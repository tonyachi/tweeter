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
    
    //create tweet header elements
    const $avatar = $('<img>').addClass('avatar').attr('src', tweet.user.avatars).attr('alt', 'avatar');
    const $name = $('<div>').addClass('name').text(tweet.user.name);
    const $handle = $('<div>').addClass('handle').text(tweet.user.handle);
    const $user = $('<div>').addClass('user').append($avatar, $name);
    //create tweet header
    const $header = $('<header>').addClass('tweets').append($user, $handle);

    //create tweet content elements
    const $text = $('<p>').text(tweet.content.text);
    const $line = $('<div>').addClass('line');
    //create tweet content
    const $content = $('<div>').addClass('content').append($text, $line);

    //create footer elements
    const data = timeago.format(tweet.created_at);
    const $data = $('<div>').addClass('data').text(data);
    //create icon elements for footer
    const $flag = $('<i>').addClass('fas fa-flag');
    const $retweet = $('<i>').addClass('fas fa-retweet');
    const $heart = $('<i>').addClass('fas fa-heart');
    const $icons = $('<div>').addClass('icons').append($flag, $retweet, $heart);
    //create footer
    const $footer = $('<footer>').addClass('tweet').append($data, $icons);

    //create tweet component
    const $tweet = $('<div>').addClass('tweet-container').append($header, $content, $footer);

    //return HTML for tweets section
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
