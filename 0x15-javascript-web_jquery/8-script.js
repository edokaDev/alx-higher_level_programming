/**
 * a script that fetches data from an api
 * using jquery.
 */
let url = 'https://swapi-api.alx-tools.com/api/films/?format=json';

$.get(url, (data, status) => {
    data.results.map((movie) => {
        $('UL#list_movies').append($('<li></li>').text(movie.title));
    });
});
