#!/usr/bin/node
/**
 * a script that prints the title of a Star Wars movie
 * where the episode number matches a given integer.
 */
const request = require('request');
const args = process.argv.slice(2);
const id = args[0];
const url = `https://swapi-api.alx-tools.com/api/films/${id}`;

request.get(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const content = JSON.parse(body);
    console.log(`${content.title}`);
  }
});
