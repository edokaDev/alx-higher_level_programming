/**
 * a script that adds an element
 * using jquery.
 */

$('#add_item').on('click', () => {
  $('UL.my_list').append('<li>Item</li>');
});
