#!/usr/bin/env sh
for f in ./*; do
    if [ -d "$f" ]; then
        (cd "$f" && git config core.fileMode false)
    fi
done
