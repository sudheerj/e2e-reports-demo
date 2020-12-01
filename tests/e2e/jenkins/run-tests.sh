#! /bin/sh

VERSION=${1:-latest}

echo "Pulling codecept/e2e image: ${VERSION}"
mkdir report

docker run --rm \
    -v "${pwd}"/report/:/workspace/report/ \
    codecept/e2e:${VERSION}