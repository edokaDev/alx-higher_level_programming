/**
 * a script that fetches data from an api
 * using jquery.
 */
let url = 'https://hellosalut.stefanbohacek.dev/?lang=fr';

$.get(url, (data, status) => {
    console.log(data);
    $('DIV#hello').text(data.hello);
});
