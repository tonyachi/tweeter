/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(() => {
  console.log('client.js is working')
  // Test / driver code (temporary). Eventually will get this from the server.
  // Fake data taken from initial-tweets.json
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  //function to render tweet to HTML
  const createTweetElement = (tweet) => {
    console.log(tweet)
    const $tweet = `
                  <div class="tweet-container">
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
  }
  
  
  //function to retrieve tweet from tweets
  const renderTweets = (tweets) => {
    for (const tweet of tweets) {
      createTweetElement(tweet);
    }
  }
  
  renderTweets(data);

});
