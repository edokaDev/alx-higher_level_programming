#!/bin/bash
# A script that sends a get request with a header.
curl -sL -H "X-School-User-Id: 98" "$1"
