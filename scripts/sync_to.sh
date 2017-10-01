#!/usr/bin/env bash
SCRIPT_PATH="$(dirname "${0}")"

MODULE_ROOT="$(cd "$(dirname "${0}")/.."; pwd)"
MODULE_NAME="$(basename "${MODULE_ROOT}")"

TARGET_ARG="${1:-.}"

function getTargetRoot () {
  local TARGET_ROOT="$(cd "${TARGET_ARG}"; pwd)"
  printf '%s\n' "${TARGET_ROOT/node_modules*/}"
}

TARGET_ROOT="$(getTargetRoot)"

printf 'Syncing\t\x1b[1;34m%s\x1b[0m to %s\n' "${MODULE_NAME}" "${TARGET_ROOT}"

TARGET_NODE_MODULES="${TARGET_ROOT}/node_modules"
TARGET_MODULE="${TARGET_NODE_MODULES}/${MODULE_NAME}"

function syncTarget () {
  local target_name="${1}"

  if [[ -d "${TARGET_MODULE}" ]]; then
    mkdir -p "${TARGET_MODULE}/${target_name}"
  else
    printf '\x1b[30m%s\x1b[0m\n' "${MODULE_NAME} is not installed"
    exit 1
  fi

  if [[ -d "${MODULE_ROOT}/${target_name}" ]]; then
    printf 'Syncing\t\x1b[1;34m%s\x1b[0m\n' "${target_name}"
    rsync -azh --delete "${MODULE_ROOT}/${target_name}/." "${TARGET_MODULE}/${target_name}/."
  elif [[ -f "${MODULE_ROOT}/${target_name}" ]]; then
    printf 'Syncing\t\x1b[1;34m%s\x1b[0m\n' "${target_name}"
    rsync -azh "${MODULE_ROOT}/${target_name}" "${TARGET_MODULE}/${target_name}"  
  else
    printf '\x1b[2mSkip\t\x1b[1;34m%s\x1b[0m\n' "${target_name}"

  fi
}

syncTarget "src"
syncTarget "release"

"${SCRIPT_PATH}/merge_packages.js" "${MODULE_ROOT}" "${TARGET_MODULE}" > /dev/null