#!/bin/bash
# A script that sends a post request with parameters.
curl -s -X POST -d "email=test@gmail.com" -d "subect=I will always be here for PLD" "$1"
