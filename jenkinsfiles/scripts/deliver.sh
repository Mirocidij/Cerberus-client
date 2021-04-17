set -x
yarnpkg run build
set +x

set -x
yarn start &
sleep 1
echo $! > .pidfile
set +x