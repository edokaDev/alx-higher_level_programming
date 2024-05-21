#!/usr/bin/node
/**
 * a script that prints the number of movies
 * where the character “Wedge Antilles” is present.
 */
const request = require('request');
const characterId = '18';
const url = 'https://swapi-api.alx-tools.com/api/films/';

request.get(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const content = JSON.parse(body);
    let count = 0;

    /* Iterating over each movie */
    content.results.forEach(element => {
      /* Iterating over each character */
      element.characters.forEach(character => {
        /* checking the id "https://swapi-api.alx-tools.com/api/people/1/" */
        if (character.split('/')[5] === characterId) {
          count += 1; /* incrementing count */
        }
      });
    });
    console.log(count);
  }
});
