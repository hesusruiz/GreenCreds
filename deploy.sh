#!/usr/bin/env sh

# abort on errors
set -e

# build
#npm run build

git add .
git commit -m 'deploy'

echo Pushing to Github repository
# git push -u origin main
git push git@github.com:hesusruiz/GreenCreds.git

echo Updating SafeIsland server
ssh safeisland "cd GreenCreds; git pull"