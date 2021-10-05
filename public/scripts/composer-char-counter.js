$(document).ready( function() {
  console.log('I\'m working');
  $('textarea').keypress(function() {
    let count = this.value.length;
    let counter = 140;
    if (count <= counter) {
      $('.counter').text(counter - count);
    } else {
      $('.counter').text(counter - count).addClass('error');
    }
  });
})