/**
 * a script that fetches data from an api
 * using jquery.
 */
let url = 'https://swapi-api.alx-tools.com/api/people/5/?format=json';

$.get(url, (data, status) => {
    $('#character').text(data.name);
    console.log(data.name);
});
