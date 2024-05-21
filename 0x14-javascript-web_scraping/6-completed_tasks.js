#!/usr/bin/node
/**
 * a script that computes the number of tasks completed by user id.
 */
const request = require('request');
const args = process.argv.slice(2);
const url = args[0];

request.get(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const content = JSON.parse(body);
    /*
    [
      {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      }, ...
    ]
    */
    const res = {};

    content.forEach(element => {
      if (element.completed) {
        if (`${element.userId}` in res) {
          res[`${element.userId}`] += 1;
        } else {
          res[`${element.userId}`] = 1;
        }
      }
    });
    console.log(res);
  }
});
