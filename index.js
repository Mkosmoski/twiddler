

$(document).ready(() => {
  const $body = $('body');
  $body.html('');

  console.log(moment())
//array to push used tweets into
  let usedTweets = [];
//contain all the tweets in the stream
  const allTweets = streams.home
  const allUsers = streams.users


//tweets to first map and put on the page
  const $tweets = streams.home.map((tweet) => {
    usedTweets.push(tweet)
    const $tweet = $('<div></div>').attr('class', 'full-tweet');
    const timeStamp = new Date
    
    
    $tweet.html(`<div class = 'tweet-user' > @${tweet.user}: </div> ${tweet.message} <br/> <BLOCKQUOTE>  ... ${moment(timeStamp).fromNow()} </BLOCKQUOTE>`)
    //make the tweets fun! - random colors and css
    const randomColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    $tweet.css("background-color",randomColor).css('border-radius', '10px').css('padding-left', '7px')
   
    return $tweet
  
  });
 
   // $('.tweet-user').on('click', (event)=> console.log('hi user')) 
 
//create a main section with the id section-main order newsfeed and first tweets
const $newsfeed = $('<section>').attr('id', 'newsfeed');
$body.append($newsfeed)
$newsfeed
  .append($tweets)
  .css('padding-top', '20px')
  .css('padding-left', '20px')
  .css('padding-right', '20px')
  .css('background-color', 'silver')
  .css('border-radius', '20px')
  .css('border', 'dotted')

// Show the user new tweets somehow.- create a button that displays new tweets.
//attach the tweets to the main section

//nav bar
$('<section>')
  .attr('id', 'nav')
  .addClass('nav-bar')
  .css('padding-top', '10px')
  .css('padding-bottom', '10px')
  .prependTo($body);
//add the button!
$('<button/>')
  .attr('id', 'refresh-button')
  .text('Refresh Your Feed')
  .css('color', 'aquamarine')
  .css('background-color', 'black')
  .prependTo('#nav');


//add the button for a new tweet!
$('<button/>')
  .attr('id', 'twoBit-button')
  .text('Give us Your Two Bits')
  .css('color', 'pink')
  .css('background-color', 'black')
  .prependTo('#nav');

//function to show all tweets that are not shown yet
 function showNewTweets() {
  //filter tweets that already exist and create a div with formatted tweets on hold 
    allTweets.filter((tweet) => {
    if(!usedTweets.includes(tweet)){ 
      usedTweets.push(tweet);
      const $tweet = $('<div></div>');
      const timeStamp = new Date
      
      $tweet.html(`<a> @${tweet.user} </a> : ${tweet.message} <br/> <BLOCKQUOTE>  ... ${moment(timeStamp).fromNow()} </BLOCKQUOTE>`)
      var randomColors = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

      $tweet.prependTo('#newsfeed').css("background-color",randomColors).css('border-radius', '10px')

      return $tweet;
    }
  });

}

//Button function to refresh
$("#refresh-button").on('click', showNewTweets) 

//button function to write your own tweet
$("#twoBit-button").on('click', showNewTweets)

$('.tweet-user').on('click', (event)=> console.log('hi user')) 

//header
const $header = $('<section>').attr('id', 'header').addClass('header');
const $heading = $('<h1>').text('My Two Bits').css('color', 'limegreen').css('font-family', 'monospace');

$header
  .append($heading)
  .css('background-color', 'Black')
  .css('text-align', 'center')
  .css('border-radius', '20px')
  .css('padding-top', '30px')
  .css('padding-bottom', '30px')
  .prependTo($body);


//user feed-  Allow the user to click on any username to see that user’s timeline.
//streams.user (show only tweets by this user)
function userFeed(user) {
  usedTweets.filter((tweet) => {
    if(tweet.user = user){ 
      const $tweet = $('<div></div>');
      const timeStamp = new Date
      
      $tweet.html(`<a> @${tweet.user} </a> : ${tweet.message} <br/> <BLOCKQUOTE>  ... ${moment(timeStamp).fromNow()} </BLOCKQUOTE>`)
    
      const $userSidebar = $('<sidebar>').attr('id','user-feed').addClass('user-feed').appendTo('#header')
      $userSidebar.toggle()
      $tweet.appendTo('#user-feed')

      return $tweet;
    }
  });

}

});
