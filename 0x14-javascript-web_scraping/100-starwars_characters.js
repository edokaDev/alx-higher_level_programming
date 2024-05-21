#!/usr/bin/node
/**
 * a script that prints the number of movies
 * where the character “Wedge Antilles” is present.
 */
const request = require('request');
const args = process.argv.slice(2);
const id = args[0];
const url = `https://swapi-api.alx-tools.com/api/films/${id}`;
const peopleUrl = 'https://swapi-api.alx-tools.com/api/people';

request.get(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const content = JSON.parse(body);

    /* Iterating over each character */
    content.characters.forEach(character => {
      /* get the id "https://swapi-api.alx-tools.com/api/people/1/" */
      const characterId = character.split('/')[5];
      /* make request to get customer details */

      request.get(`${peopleUrl}/${characterId}`, (error, response, body) => {
        if (error) {
          console.log(error);
        } else {
          const character = JSON.parse(body);
          console.log(character.name);
        }
      });
    });
  }
});
