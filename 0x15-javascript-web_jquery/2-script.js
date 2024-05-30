/**
 * a script that changes the text color of the <header> element
 * to red (#FF0000) using jquery when an event happens.
 */

$('#red_header').on('click', () => {
  $('header').css('color', '#FF0000');
});
