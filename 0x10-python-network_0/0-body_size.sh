#!/bin/bash
# a script that displays the size of a curl response.
curl -sI "$1" | grep -i '^Content-Length:' | awk '{print $2}' | tr -d '\r'
