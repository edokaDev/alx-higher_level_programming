#!/usr/bin/env bash
# a script that displays the size of a curl response.

if [ -z "$1" ]; then
	exit 1
fi

url="$1"
response=$(curl -sI "$url")
cl=$(echo "$response" | grep -i '^Content-Length:' | awk '{print $2}' | tr -d '\r')

if [ -n "$cl" ]; then
	echo "$cl"
	exit 0
fi
exit 1
