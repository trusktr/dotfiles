'use babel';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import GitHelper from '../git/GitHelper';
import gitBlame from '../git/blame';
import gitShow from '../git/show';
import gitRemotes from '../git/remotes';
import getFirstCommitDate from '../git/firstCommitDate';
import findRepoRoot from '../git/findRepoRoot';
import GutterRange from '../interface/GutterRange';
import db from './database';
import _ from 'lodash';
const blamePromises = {};
export function getBlameForFile(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        let existing = db
            .get('blames')
            .find({ path: filePath })
            .value();
        if (existing && Date.now() - existing.fetchedAt < 1000) {
            return existing;
        }
        if (!blamePromises[filePath]) {
            blamePromises[filePath] = gitBlame(filePath);
        }
        const blame = yield blamePromises[filePath];
        db
            .get('blames')
            .remove({ path: filePath })
            .write();
        db
            .get('blames')
            .push({
            path: filePath,
            lines: blame.replace(/\s+$/, '').split('\n'),
            fetchedAt: new Date(),
        })
            .write();
        delete blamePromises[filePath];
        return db
            .get('blames')
            .find({ path: filePath })
            .value();
    });
}
export function getCommitsForFile(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        let existing = db
            .get('fileCommits')
            .find({ path: filePath })
            .value();
        if (existing && Date.now() - existing.fetchedAt < 1000) {
            return existing;
        }
        const blame = yield getBlameForFile(filePath);
        const repoPath = yield getRepoRootPath(filePath);
        const commits = blame.lines.reduce((acc, line) => {
            const parsed = GitHelper.parseBlameLine(line);
            parsed.repoPath = repoPath;
            if (acc[parsed.commitHash]) {
                return acc;
            }
            acc[parsed.commitHash] = parsed;
            return acc;
        }, {});
        db
            .get('fileCommits')
            .remove({ path: filePath })
            .write();
        db
            .get('fileCommits')
            .push({
            path: filePath,
            commits,
            fetchedAt: new Date(),
        })
            .write();
        loadCommits(repoPath, _.filter(_.map(commits, 'commitHash'), hash => hash.substr(0, 6) !== '000000'));
        return db
            .get('fileCommits')
            .find({ path: filePath })
            .value();
    });
}
export function getGutterRangesForFile(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        const blame = yield getBlameForFile(filePath);
        let lineRanges = [];
        for (let i = 0; i < blame.lines.length; i++) {
            const line = blame.lines[i];
            const commitHash = line.split(' ')[0];
            // Build array of ranges
            if (lineRanges.length == 0) {
                // No ranges exist
                lineRanges.push(new GutterRange(i, commitHash));
            }
            else {
                const currentRange = lineRanges[lineRanges.length - 1]; // Get last range
                if (currentRange.identifier === commitHash) {
                    currentRange.incrementRange();
                }
                else {
                    // Add new range
                    lineRanges.push(new GutterRange(i, commitHash));
                }
            }
        }
        return {
            path: filePath,
            ranges: _.groupBy(lineRanges, 'identifier'),
            fetchedAt: new Date(),
        };
    });
}
const firstDatePromises = {};
export function getFirstCommitDateForRepo(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        return getRepoRootPath(filePath).then((repoPath) => __awaiter(this, void 0, void 0, function* () {
            const cached = db
                .get('startDates')
                .get(repoPath)
                .value();
            if (cached) {
                return cached;
            }
            if (!firstDatePromises[filePath]) {
                firstDatePromises[filePath] = getFirstCommitDate(repoPath);
            }
            const date = yield firstDatePromises[filePath];
            db
                .get('startDates')
                .set(filePath, date)
                .write();
            delete firstDatePromises[filePath];
            return date;
        }));
    });
}
let loadPromise;
function loadCommits(filePath, hashes) {
    return __awaiter(this, void 0, void 0, function* () {
        if (loadPromise) {
            yield loadPromise;
        }
        loadPromise = gitShow(filePath, hashes);
        const commits = yield loadPromise;
        for (const i in commits) {
            const commit = commits[i];
            if (commit) {
                const toWrite = Object.assign({ commitHash: commit.hash }, commit, { fetchedAt: new Date() });
                db
                    .get('commitMessages')
                    .set(commit.hash, toWrite)
                    .write();
            }
        }
    });
}
const commitPromises = {};
export function getCommit(filePath, hash) {
    return __awaiter(this, void 0, void 0, function* () {
        if (loadPromise) {
            yield loadPromise;
        }
        let existing = db
            .get('commitMessages')
            .get(hash)
            .value();
        if (existing) {
            return existing;
        }
        if (!commitPromises[hash]) {
            commitPromises[hash] = gitShow(filePath, [hash]);
        }
        const commit = yield commitPromises[hash];
        const toWrite = Object.assign({ commitHash: hash }, commit[0], { fetchedAt: new Date() });
        db
            .get('commitMessages')
            .set(commit.hash, toWrite)
            .write();
        delete commitPromises[hash];
        return toWrite;
    });
}
export function updateCommit(hash, data) {
    db
        .get('commitMessages')
        .get(hash)
        .assign(data)
        .write();
    return db
        .get('commitMessages')
        .get(hash)
        .value();
}
export function getRepoRootPath(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        let cached = db.get(`rootPaths.${filePath}`).value();
        if (cached) {
            return cached;
        }
        let rootPath = findRepoRoot(filePath);
        db
            .get('rootPaths')
            .set(filePath, rootPath)
            .write();
        return rootPath;
    });
}
const metadataPromises = {};
export function getRepoMetadata(repoPath) {
    return __awaiter(this, void 0, void 0, function* () {
        let cached = db
            .get('repoMetadata')
            .find({
            rootPath: repoPath,
        })
            .value();
        if (cached) {
            return cached;
        }
        if (!metadataPromises[repoPath]) {
            metadataPromises[repoPath] = gitRemotes(repoPath);
        }
        const remotes = yield metadataPromises[repoPath];
        const metadata = GitHelper.extractRepoMetadataFromRemotes(remotes);
        const toWrite = Object.assign({ rootPath: repoPath }, metadata, { fetchedAt: new Date() });
        db
            .get('repoMetadata')
            .push(toWrite)
            .write();
        delete metadataPromises[repoPath];
        return toWrite;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2l0RGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9kYXRhL0dpdERhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVyxDQUFDOzs7Ozs7Ozs7QUFFWixPQUFPLFNBQVMsTUFBTSxrQkFBa0IsQ0FBQztBQUN6QyxPQUFPLFFBQVEsTUFBTSxjQUFjLENBQUM7QUFDcEMsT0FBTyxPQUFPLE1BQU0sYUFBYSxDQUFDO0FBQ2xDLE9BQU8sVUFBVSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sa0JBQWtCLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxZQUFZLE1BQU0scUJBQXFCLENBQUM7QUFDL0MsT0FBTyxXQUFXLE1BQU0sMEJBQTBCLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzVCLE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUV2QixNQUFNLGFBQWEsR0FBRyxFQUFFLENBQUM7QUFDekIsTUFBTSwwQkFBZ0MsUUFBZ0I7O1FBQ3BELElBQUksUUFBUSxHQUFHLEVBQUU7YUFDZCxHQUFHLENBQUMsUUFBUSxDQUFDO2FBQ2IsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDO2FBQ3hCLEtBQUssRUFBRSxDQUFDO1FBQ1gsRUFBRSxDQUFDLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdkQsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNsQixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0MsQ0FBQztRQUNELE1BQU0sS0FBSyxHQUFHLE1BQU0sYUFBYSxDQUFDLFFBQVEsQ0FB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UUFDWCxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ2xCLENBQUM7Q0FBQTtBQUVELE1BQU0sZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0FBQzVCLE1BQU0sMEJBQWdDLFFBQWdCOztRQUNwRCxJQUFJLE1BQU0sR0FBRyxFQUFFO2FBQ1osR0FBRyxDQUFDLGNBQWMsQ0FBQzthQUNuQixJQUFJLENBQUM7WUFDSixRQUFRLEVBQUUsUUFBUTtTQUNuQixDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7UUFDWCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ1gsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNoQixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELENBQUM7UUFDRCxNQUFNLE9BQU8sR0FBRyxNQUFNLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pELE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuRSxNQUFNLE9BQU8sbUJBQ1gsUUFBUSxFQUFFLFFBQVEsSUFDZixRQUFRLElBQ1gsU0FBUyxFQUFFLElBQUksSUFBSSxFQUFFLEdBQ3RCLENBQUM7UUFDRixFQUFFO2FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQzthQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ2IsS0FBSyxFQUFFLENBQUM7UUFDWCxPQUFPLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDakIsQ0FBQztDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCc7XG5cbmltcG9ydCBHaXRIZWxwZXIgZnJvbSAnLi4vZ2l0L0dpdEhlbHBlcic7XG5pbXBvcnQgZ2l0QmxhbWUgZnJvbSAnLi4vZ2l0L2JsYW1lJztcbmltcG9ydCBnaXRTaG93IGZyb20gJy4uL2dpdC9zaG93JztcbmltcG9ydCBnaXRSZW1vdGVzIGZyb20gJy4uL2dpdC9yZW1vdGVzJztcbmltcG9ydCBnZXRGaXJzdENvbW1pdERhdGUgZnJvbSAnLi4vZ2l0L2ZpcnN0Q29tbWl0RGF0ZSc7XG5pbXBvcnQgZmluZFJlcG9Sb290IGZyb20gJy4uL2dpdC9maW5kUmVwb1Jvb3QnO1xuaW1wb3J0IEd1dHRlclJhbmdlIGZyb20gJy4uL2ludGVyZmFjZS9HdXR0ZXJSYW5nZSc7XG5pbXBvcnQgZGIgZnJvbSAnLi9kYXRhYmFzZSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCBibGFtZVByb21pc2VzID0ge307XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QmxhbWVGb3JGaWxlKGZpbGVQYXRoOiBzdHJpbmcpIHtcbiAgbGV0IGV4aXN0aW5nID0gZGJcbiAgICAuZ2V0KCdibGFtZXMnKVxuICAgIC5maW5kKHsgcGF0aDogZmlsZVBhdGggfSlcbiAgICAudmFsdWUoKTtcbiAgaWYgKGV4aXN0aW5nICYmIERhdGUubm93KCkgLSBleGlzdGluZy5mZXRjaGVkQXQgPCAxMDAwKSB7XG4gICAgcmV0dXJuIGV4aXN0aW5nO1xuICB9XG4gIGlmICghYmxhbWVQcm9taXNlc1tmaWxlUGF0aF0pIHtcbiAgICBibGFtZVByb21pc2VzW2ZpbGVQYXRoXSA9IGdpdEJsYW1lKGZpbGVQYXRoKTtcbiAgfVxuICBjb25zdCBibGFtZSA9IGF3YWl0IGJsYW1lUHJvbWlzZXNbZmlsZVBhdGhdO1xuICBkYlxuICAgIC5nZXQoJ2JsYW1lcycpXG4gICAgLnJlbW92ZSh7IHBhdGg6IGZpbGVQYXRoIH0pXG4gICAgLndyaXRlKCk7XG4gIGRiXG4gICAgLmdldCgnYmxhbWVzJylcbiAgICAucHVzaCh7XG4gICAgICBwYXRoOiBmaWxlUGF0aCxcbiAgICAgIGxpbmVzOiBibGFtZS5yZXBsYWNlKC9cXHMrJC8sICcnKS5zcGxpdCgnXFxuJyksXG4gICAgICBmZXRjaGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgfSlcbiAgICAud3JpdGUoKTtcbiAgZGVsZXRlIGJsYW1lUHJvbWlzZXNbZmlsZVBhdGhdO1xuICByZXR1cm4gZGJcbiAgICAuZ2V0KCdibGFtZXMnKVxuICAgIC5maW5kKHsgcGF0aDogZmlsZVBhdGggfSlcbiAgICAudmFsdWUoKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbW1pdHNGb3JGaWxlKGZpbGVQYXRoOiBzdHJpbmcpIHtcbiAgbGV0IGV4aXN0aW5nID0gZGJcbiAgICAuZ2V0KCdmaWxlQ29tbWl0cycpXG4gICAgLmZpbmQoeyBwYXRoOiBmaWxlUGF0aCB9KVxuICAgIC52YWx1ZSgpO1xuICBpZiAoZXhpc3RpbmcgJiYgRGF0ZS5ub3coKSAtIGV4aXN0aW5nLmZldGNoZWRBdCA8IDEwMDApIHtcbiAgICByZXR1cm4gZXhpc3Rpbmc7XG4gIH1cbiAgY29uc3QgYmxhbWUgPSBhd2FpdCBnZXRCbGFtZUZvckZpbGUoZmlsZVBhdGgpO1xuICBjb25zdCByZXBvUGF0aCA9IGF3YWl0IGdldFJlcG9Sb290UGF0aChmaWxlUGF0aCk7XG4gIGNvbnN0IGNvbW1pdHMgPSBibGFtZS5saW5lcy5yZWR1Y2UoKGFjYywgbGluZSkgPT4ge1xuICAgIGNvbnN0IHBhcnNlZCA9IEdpdEhlbHBlci5wYXJzZUJsYW1lTGluZShsaW5lKTtcbiAgICBwYXJzZWQucmVwb1BhdGggPSByZXBvUGF0aDtcbiAgICBpZiAoYWNjW3BhcnNlZC5jb21taXRIYXNoXSkge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG4gICAgYWNjW3BhcnNlZC5jb21taXRIYXNoXSA9IHBhcnNlZDtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIGRiXG4gICAgLmdldCgnZmlsZUNvbW1pdHMnKVxuICAgIC5yZW1vdmUoeyBwYXRoOiBmaWxlUGF0aCB9KVxuICAgIC53cml0ZSgpO1xuICBkYlxuICAgIC5nZXQoJ2ZpbGVDb21taXRzJylcbiAgICAucHVzaCh7XG4gICAgICBwYXRoOiBmaWxlUGF0aCxcbiAgICAgIGNvbW1pdHMsXG4gICAgICBmZXRjaGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgfSlcbiAgICAud3JpdGUoKTtcbiAgbG9hZENvbW1pdHMoXG4gICAgcmVwb1BhdGgsXG4gICAgXy5maWx0ZXIoXy5tYXAoY29tbWl0cywgJ2NvbW1pdEhhc2gnKSwgaGFzaCA9PiBoYXNoLnN1YnN0cigwLCA2KSAhPT0gJzAwMDAwMCcpXG4gICk7XG4gIHJldHVybiBkYlxuICAgIC5nZXQoJ2ZpbGVDb21taXRzJylcbiAgICAuZmluZCh7IHBhdGg6IGZpbGVQYXRoIH0pXG4gICAgLnZhbHVlKCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRHdXR0ZXJSYW5nZXNGb3JGaWxlKGZpbGVQYXRoOiBzdHJpbmcpIHtcbiAgY29uc3QgYmxhbWUgPSBhd2FpdCBnZXRCbGFtZUZvckZpbGUoZmlsZVBhdGgpO1xuICBsZXQgbGluZVJhbmdlcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJsYW1lLmxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbGluZSA9IGJsYW1lLmxpbmVzW2ldO1xuICAgIGNvbnN0IGNvbW1pdEhhc2ggPSBsaW5lLnNwbGl0KCcgJylbMF07XG4gICAgLy8gQnVpbGQgYXJyYXkgb2YgcmFuZ2VzXG4gICAgaWYgKGxpbmVSYW5nZXMubGVuZ3RoID09IDApIHtcbiAgICAgIC8vIE5vIHJhbmdlcyBleGlzdFxuICAgICAgbGluZVJhbmdlcy5wdXNoKG5ldyBHdXR0ZXJSYW5nZShpLCBjb21taXRIYXNoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRSYW5nZTogR3V0dGVyUmFuZ2UgPSBsaW5lUmFuZ2VzW2xpbmVSYW5nZXMubGVuZ3RoIC0gMV07IC8vIEdldCBsYXN0IHJhbmdlXG4gICAgICBpZiAoY3VycmVudFJhbmdlLmlkZW50aWZpZXIgPT09IGNvbW1pdEhhc2gpIHtcbiAgICAgICAgY3VycmVudFJhbmdlLmluY3JlbWVudFJhbmdlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBBZGQgbmV3IHJhbmdlXG4gICAgICAgIGxpbmVSYW5nZXMucHVzaChuZXcgR3V0dGVyUmFuZ2UoaSwgY29tbWl0SGFzaCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGg6IGZpbGVQYXRoLFxuICAgIHJhbmdlczogXy5ncm91cEJ5KGxpbmVSYW5nZXMsICdpZGVudGlmaWVyJyksXG4gICAgZmV0Y2hlZEF0OiBuZXcgRGF0ZSgpLFxuICB9O1xufVxuXG5jb25zdCBmaXJzdERhdGVQcm9taXNlcyA9IHt9O1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZpcnN0Q29tbWl0RGF0ZUZvclJlcG8oZmlsZVBhdGg6IHN0cmluZykge1xuICByZXR1cm4gZ2V0UmVwb1Jvb3RQYXRoKGZpbGVQYXRoKS50aGVuKGFzeW5jIHJlcG9QYXRoID0+IHtcbiAgICBjb25zdCBjYWNoZWQgPSBkYlxuICAgICAgLmdldCgnc3RhcnREYXRlcycpXG4gICAgICAuZ2V0KHJlcG9QYXRoKVxuICAgICAgLnZhbHVlKCk7XG4gICAgaWYgKGNhY2hlZCkge1xuICAgICAgcmV0dXJuIGNhY2hlZDtcbiAgICB9XG4gICAgaWYgKCFmaXJzdERhdGVQcm9taXNlc1tmaWxlUGF0aF0pIHtcbiAgICAgIGZpcnN0RGF0ZVByb21pc2VzW2ZpbGVQYXRoXSA9IGdldEZpcnN0Q29tbWl0RGF0ZShyZXBvUGF0aCk7XG4gICAgfVxuICAgIGNvbnN0IGRhdGUgPSBhd2FpdCBmaXJzdERhdGVQcm9taXNlc1tmaWxlUGF0aF07XG4gICAgZGJcbiAgICAgIC5nZXQoJ3N0YXJ0RGF0ZXMnKVxuICAgICAgLnNldChmaWxlUGF0aCwgZGF0ZSlcbiAgICAgIC53cml0ZSgpO1xuICAgIGRlbGV0ZSBmaXJzdERhdGVQcm9taXNlc1tmaWxlUGF0aF07XG4gICAgcmV0dXJuIGRhdGU7XG4gIH0pO1xufVxuXG5sZXQgbG9hZFByb21pc2U6IFByb21pc2U8dm9pZD47XG5hc3luYyBmdW5jdGlvbiBsb2FkQ29tbWl0cyhmaWxlUGF0aDogc3RyaW5nLCBoYXNoZXM6IHN0cmluZ1tdKSB7XG4gIGlmIChsb2FkUHJvbWlzZSkge1xuICAgIGF3YWl0IGxvYWRQcm9taXNlO1xuICB9XG4gIGxvYWRQcm9taXNlID0gZ2l0U2hvdyhmaWxlUGF0aCwgaGFzaGVzKTtcbiAgY29uc3QgY29tbWl0cyA9IGF3YWl0IGxvYWRQcm9taXNlO1xuICBmb3IgKGNvbnN0IGkgaW4gY29tbWl0cykge1xuICAgIGNvbnN0IGNvbW1pdCA9IGNvbW1pdHNbaV07XG4gICAgaWYgKGNvbW1pdCkge1xuICAgICAgY29uc3QgdG9Xcml0ZSA9IHtcbiAgICAgICAgY29tbWl0SGFzaDogY29tbWl0Lmhhc2gsXG4gICAgICAgIC4uLmNvbW1pdCxcbiAgICAgICAgZmV0Y2hlZEF0OiBuZXcgRGF0ZSgpLFxuICAgICAgfTtcbiAgICAgIGRiXG4gICAgICAgIC5nZXQoJ2NvbW1pdE1lc3NhZ2VzJylcbiAgICAgICAgLnNldChjb21taXQuaGFzaCwgdG9Xcml0ZSlcbiAgICAgICAgLndyaXRlKCk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGNvbW1pdFByb21pc2VzID0ge307XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29tbWl0KGZpbGVQYXRoOiBzdHJpbmcsIGhhc2g6IHN0cmluZykge1xuICBpZiAobG9hZFByb21pc2UpIHtcbiAgICBhd2FpdCBsb2FkUHJvbWlzZTtcbiAgfVxuICBsZXQgZXhpc3RpbmcgPSBkYlxuICAgIC5nZXQoJ2NvbW1pdE1lc3NhZ2VzJylcbiAgICAuZ2V0KGhhc2gpXG4gICAgLnZhbHVlKCk7XG4gIGlmIChleGlzdGluZykge1xuICAgIHJldHVybiBleGlzdGluZztcbiAgfVxuICBpZiAoIWNvbW1pdFByb21pc2VzW2hhc2hdKSB7XG4gICAgY29tbWl0UHJvbWlzZXNbaGFzaF0gPSBnaXRTaG93KGZpbGVQYXRoLCBbaGFzaF0pO1xuICB9XG4gIGNvbnN0IGNvbW1pdCA9IGF3YWl0IGNvbW1pdFByb21pc2VzW2hhc2hdO1xuICBjb25zdCB0b1dyaXRlID0ge1xuICAgIGNvbW1pdEhhc2g6IGhhc2gsXG4gICAgLi4uY29tbWl0WzBdLFxuICAgIGZldGNoZWRBdDogbmV3IERhdGUoKSxcbiAgfTtcbiAgZGJcbiAgICAuZ2V0KCdjb21taXRNZXNzYWdlcycpXG4gICAgLnNldChjb21taXQuaGFzaCwgdG9Xcml0ZSlcbiAgICAud3JpdGUoKTtcbiAgZGVsZXRlIGNvbW1pdFByb21pc2VzW2hhc2hdO1xuICByZXR1cm4gdG9Xcml0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUNvbW1pdChoYXNoOiBzdHJpbmcsIGRhdGEpIHtcbiAgZGJcbiAgICAuZ2V0KCdjb21taXRNZXNzYWdlcycpXG4gICAgLmdldChoYXNoKVxuICAgIC5hc3NpZ24oZGF0YSlcbiAgICAud3JpdGUoKTtcbiAgcmV0dXJuIGRiXG4gICAgLmdldCgnY29tbWl0TWVzc2FnZXMnKVxuICAgIC5nZXQoaGFzaClcbiAgICAudmFsdWUoKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlcG9Sb290UGF0aChmaWxlUGF0aDogc3RyaW5nKSB7XG4gIGxldCBjYWNoZWQgPSBkYi5nZXQoYHJvb3RQYXRocy4ke2ZpbGVQYXRofWApLnZhbHVlKCk7XG4gIGlmIChjYWNoZWQpIHtcbiAgICByZXR1cm4gY2FjaGVkO1xuICB9XG4gIGxldCByb290UGF0aCA9IGZpbmRSZXBvUm9vdChmaWxlUGF0aCk7XG4gIGRiXG4gICAgLmdldCgncm9vdFBhdGhzJylcbiAgICAuc2V0KGZpbGVQYXRoLCByb290UGF0aClcbiAgICAud3JpdGUoKTtcbiAgcmV0dXJuIHJvb3RQYXRoO1xufVxuXG5jb25zdCBtZXRhZGF0YVByb21pc2VzID0ge307XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVwb01ldGFkYXRhKHJlcG9QYXRoOiBzdHJpbmcpIHtcbiAgbGV0IGNhY2hlZCA9IGRiXG4gICAgLmdldCgncmVwb01ldGFkYXRhJylcbiAgICAuZmluZCh7XG4gICAgICByb290UGF0aDogcmVwb1BhdGgsXG4gICAgfSlcbiAgICAudmFsdWUoKTtcbiAgaWYgKGNhY2hlZCkge1xuICAgIHJldHVybiBjYWNoZWQ7XG4gIH1cbiAgaWYgKCFtZXRhZGF0YVByb21pc2VzW3JlcG9QYXRoXSkge1xuICAgIG1ldGFkYXRhUHJvbWlzZXNbcmVwb1BhdGhdID0gZ2l0UmVtb3RlcyhyZXBvUGF0aCk7XG4gIH1cbiAgY29uc3QgcmVtb3RlcyA9IGF3YWl0IG1ldGFkYXRhUHJvbWlzZXNbcmVwb1BhdGhdO1xuICBjb25zdCBtZXRhZGF0YSA9IEdpdEhlbHBlci5leHRyYWN0UmVwb01ldGFkYXRhRnJvbVJlbW90ZXMocmVtb3Rlcyk7XG4gIGNvbnN0IHRvV3JpdGUgPSB7XG4gICAgcm9vdFBhdGg6IHJlcG9QYXRoLFxuICAgIC4uLm1ldGFkYXRhLFxuICAgIGZldGNoZWRBdDogbmV3IERhdGUoKSxcbiAgfTtcbiAgZGJcbiAgICAuZ2V0KCdyZXBvTWV0YWRhdGEnKVxuICAgIC5wdXNoKHRvV3JpdGUpXG4gICAgLndyaXRlKCk7XG4gIGRlbGV0ZSBtZXRhZGF0YVByb21pc2VzW3JlcG9QYXRoXTtcbiAgcmV0dXJuIHRvV3JpdGU7XG59XG4iXX0=