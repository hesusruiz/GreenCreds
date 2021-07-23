#!/usr/bin/env sh

# abort on errors
set -e

# build
#npm run build

git add .
git commit -m 'deploy'

git push -u origin main

ssh safeisland "cd GreenCreds; git pull"