$(() => {
  $('textarea').keyup(function() {
    let count = this.value.length;
    const counter = 140;
    if (count <= counter) {
      $('.counter').text(counter - count).removeClass('error');
      $('.error-message').remove();
    } else {
      $('.counter').text(counter - count).addClass('error');
    }
  });
})