$(() => {

  //function to escape unsafe input from user
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  //function to load tweets with AJAX
  const loadTweets = () => {
    $.ajax({
      url: '/tweets/',
      method: 'GET',
      dataType: 'json',
      success: (tweets) => {
        renderTweets(tweets);
      },
      error: (err) => {
        console.log(`there was an error: ${err}`);
      }
    })
  };

  //function to render tweet to HTML
  const createTweetElement = (tweet) => {
    const $tweet = `<div class="tweet-container">
                      <header class="tweets">
                        <div class="user">
                          <img class="avatar" src="${tweet.user.avatars}" alt="avatar">
                          <div class="name">${tweet.user.name}</div>
                        </div>
                        <div class="handle">${tweet.user.handle}</div>
                      </header>
                      <div class="content">
                        <p>${escape(tweet.content.text).replace(/%20/g, '').replace('%3F', '?').replace('%21', '!')}</p>
                      </div>
                      <div class="line"></div>
                      <footer class="tweet">
                        <div class="data">${timeago.format(tweet.created_at)}</div>
                        <div class="icons">
                          <i class="fas fa-flag"></i>
                          <i class="fas fa-retweet"></i>
                          <i class="fas fa-heart"></i>
                        </div>
                      </footer>
                    </div>`;
    $('#tweets-container').prepend($tweet);
    return;
  };  
  
  //function to retrieve tweet from tweets
  const renderTweets = (tweets) => {
   $('#tweets-container').empty();

    for (const tweet of tweets) {
      createTweetElement(tweet);
    }
  }; 
  
  loadTweets();

  //handle form submit and send data to sever
  const $form = $('#new-tweet-form');
  $form.submit(function(event) {
    event.preventDefault();
    const serializedData = $(this).serialize();
    const textareaValue = $('#tweet-text').val();
    //check input value before POST
    if (textareaValue.length > 140) {
      const $error = $('<div>').text('Your message is too long. Maximum length exceeded.').addClass('error-message');
      $('.text-box').append($error);
    } else {
      $.post('/tweets/', serializedData, (response) => {
        console.log(response);
        $('#tweet-text').val('');
        loadTweets();
      });
    }
  });
});
