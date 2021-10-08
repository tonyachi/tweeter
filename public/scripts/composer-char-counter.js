$(() => {
  $('textarea').keyup(function() {
    const counter = 140;
    let count = this.value.length;
    
    if (count <= counter) {
      $('.counter').text(counter - count).removeClass('error');
      $('.error-message').remove();
    } else {
      $('.counter').text(counter - count).addClass('error');
    }
  });
});