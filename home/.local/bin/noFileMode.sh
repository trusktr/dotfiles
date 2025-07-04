#!/usr/bin/env sh

# Run this in a paraent folder that contains git repos, and it will set config.fileMode to false for all of the git repos.
# This is useful when cloned repos in one OS differ from another (f.e. Window NTFS can sometimes be all 777 vs Linux Ext), and ignoring any changes to file permissions.

for f in ./*; do
    if [ -d "$f" ]; then
        (cd "$f" && git config core.fileMode false)
    fi
done
