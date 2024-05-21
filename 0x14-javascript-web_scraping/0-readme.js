#!/usr/bin/node
const fs = require('fs');
const args = process.argv.slice(2);
const filePath = args[0];

fs.readFile(filePath, 'utf-8', (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
