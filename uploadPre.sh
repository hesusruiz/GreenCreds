#!/usr/bin/env sh

# abort on errors
set -e

rsync -auzi docs/ ubuntu@safeisland:/home/ubuntu/EvidenceLedger.Verifier.Pre
