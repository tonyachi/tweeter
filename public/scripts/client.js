/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(() => {
  //function to load tweet with AJAX
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
                        <p>${tweet.content.text}</p>
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
    $('#tweets-container').append($tweet);
    return;
  };  
  
  //function to retrieve tweet from tweets
  const renderTweets = (tweets) => {
    for (const tweet of tweets) {
      createTweetElement(tweet);
    }
  };
  
  //handle form submit event
  const $form = $('#new-tweet-form');

  $form.submit(function(event) {
    event.preventDefault();
    console.log('form was submitted');
    const serializedData = $(this).serialize();

    $.post('/tweets/', serializedData);
  });

  loadTweets();

});
