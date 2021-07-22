#!/usr/bin/env sh

# Clean some files after build

# abort on errors
set -e

rm docs/json/all_jwk_keys.json
rm docs/json/pre_jwk_keys.json
rm docs/json/uk_jwk_keys.json
rm docs/json/value-sets.json
