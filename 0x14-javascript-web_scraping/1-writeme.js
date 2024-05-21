#!/usr/bin/node
const fs = require('fs');
const args = process.argv.slice(2);
const filePath = args[0];
const content = args[1];

fs.writeFile(filePath, content, 'utf-8', (error) => {
  if (error) {
    console.log(error);
  }
});
