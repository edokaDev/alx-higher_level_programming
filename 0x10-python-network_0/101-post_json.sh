#!/bin/bash
# A script that sends a JSON POST request to a url
curl -X POST -H "Content-Type: application/json" -d "@$2" "$1"
