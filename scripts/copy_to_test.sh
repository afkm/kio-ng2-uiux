#!/usr/bin/env bash

SCRIPT_PATH="$(dirname "${0}")"
SCRIPT_FILE="$(basename "${0}")"

MODULE_ROOT="$(cd "$(dirname "${0}")/.."; pwd)"
MODULE_NAME="$(basename "${MODULE_ROOT}")"
TEST_APP_ROOT="${MODULE_ROOT}/../../digit-wmr"
TEST_APP_MODULE="${TEST_APP_ROOT}/node_modules/${MODULE_NAME}"

if [[ ! -d "${TEST_APP_ROOT}" ]]; then
  printf 'please create a test app at "%s"\n' "${TEST_APP_ROOT}"
  exit 1
fi


rsync -avzh "${MODULE_ROOT}/release/." "${TEST_APP_MODULE}/release/."
rsync -avzh "${MODULE_ROOT}/src/." "${TEST_APP_MODULE}/src/."
#rm -rf "${TEST_APP_MODULE}/release"
#scp -r "${MODULE_ROOT}/release" "${TEST_APP_MODULE}/."

"${SCRIPT_PATH}/merge_packages.js" "${MODULE_ROOT}" "${TEST_APP_MODULE}" > /dev/null
printf 'Latest build time \x1b[1;36m%s\x1b[0m\n' "$(date)"
