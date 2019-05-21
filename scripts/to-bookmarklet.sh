#!/usr/bin/env bash

TARGET_FILE=$1
OUTPUT_FILE="$(basename "${TARGET_FILE}" .min.js).bookmarklet.js"

echo -n "javascript:" > "${OUTPUT_FILE}"
cat "${TARGET_FILE}" | sed -z 's/\n//g' >> "${OUTPUT_FILE}"
