#!/bin/bash
# A script that displays all http methods a url accepts.
curl -s -i -X OPTIONS "$1" | awk '/Allow:/ {sub(/Allow: /, ""); print}'
