#!/usr/bin/node
/**
 * a script that gets the contents of a webpage
 * and stores it in a file.
 */
const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);
const url = args[0];
const filePath = args[1];

request.get(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    fs.writeFile(filePath, body, 'utf-8', error => {
      if (error) {
        console.log(error);
      }
    });
  }
});
