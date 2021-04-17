#!/usr/bin/env sh

set -x
yarnpkg run build
set +x

set -x
yarnpkg start &
sleep 1
echo $! > .pidfile
set +x