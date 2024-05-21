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
  } else if (response.statusCode === 200) {
    const content = JSON.parse(body);
    let count = 0;

    /* Iterating over each movie */
    content.results.forEach(element => {
      /* Iterating over each character */
      element.characters.forEach(character => {
        /* checking the id "https://swapi-api.alx-tools.com/api/people/1/" */
        if (character.includes(characterId)) {
          count++; /* incrementing count */
        }
      });
    });
    console.log(count);
  } else {
    console.log('An error occured!');
  }
});
