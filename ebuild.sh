#!/usr/bin/env sh

# abort on errors
set -e

# Bump the application version
node bump

# Build JavaScript with esbuild
node ebuild

# Copy the unprocessed files
cp src/.nojekyll docs/
cp src/*.png docs/
cp src/index.html docs/
cp src/VERSION.txt docs/
cp src/manifest.json docs/

