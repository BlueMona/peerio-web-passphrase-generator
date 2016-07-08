#!/usr/bin/env bash
set -e
npm run build:prod
cd ./../peerio-web-passphrase-generator.github.io
shopt -s extglob
rm -rf !(CNAME|.git)
cp -R ./../peerio-web-passphrase-generator/dist/* .
git add -A 
git commit -am "deploy"
git push
cd ./../peerio-web-passphrase-generator