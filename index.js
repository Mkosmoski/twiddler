

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
    
    
    $tweet.html(`<div class = 'tweet-user' > @${tweet.user} </div> ${tweet.message} <br/> <sub>  ... ${moment(timeStamp).fromNow()} </sub>`)
    //make the tweets fun! - random colors and css
    const randomColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    $tweet.css("background-color",randomColor).css('border-radius', '10px').css('padding-left', '7px').css('margin', '10px')
   
    return $tweet
  
  });
 
   // $('.tweet-user').on('click', (event)=> console.log('hi user')) 
 
//create a main section with the id section-main order newsfeed and first tweets
const $content = $('<section>').attr('id', 'all-content').css('margin', '7px')
const $newsfeed = $('<section>').attr('id', 'newsfeed');
$body
  .append($content)

$newsfeed
  .append($tweets)
  .css('padding-top', '20px')
  .css('padding-left', '20px')
  .css('padding-right', '20px')
  .css('background-color', 'silver')
  .css('border-radius', '20px')
  .css('border', 'dotted')
  .appendTo($content)

//header
const $header = $('<section>').attr('id', 'header').addClass('header');
const $heading = $('<h1>').text('My Two Bits').css('color', 'limegreen').css('font-family', 'monospace');

$header
  .append($heading)
  .css('background-color', 'Black')
  .css('text-align', 'center')
  .css('border-radius', '20px')
  .css('padding-top', '20px')
  .css('padding-bottom', '20px')
  .prependTo($body);

  //sidebar for user tweets(hidden when not looking at specific userfeeds)
  const $userSidebar = $('<div>').attr('id','user-feed').addClass('user-feed')


$userSidebar
  .prependTo('#all-content')
  .css('background-color', 'black')
  .css('height', '100%') /* Full-height: remove this if you want "auto" height */
  .css('width', "300px") 
  .css("position", "fixed") 
  .css('border-radius', '20px')
  .css('border', 'transparent')
  .css("right", '0')
  .hide()

// Show the user new tweets somehow.- create a button that displays new tweets.
//attach the tweets to the main section

//nav bar
$('<section>')
  .attr('id', 'nav')
  .addClass('nav-bar')
  .css('padding-top', '10px')
  .css('padding-bottom', '10px')
  .appendTo($header);
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
  .css('border', 'dotted', 'white')
  .prependTo('#nav');

  //create a div for all form stuffs
const $tweetForm = $('<div>').attr('id', 'tweet-form-div').attr('class', 'form').css('padding-bottom', '10px').hide()

//give tweetform a header
$tweetForm  
    .append($("<h3/>")
    .attr('id', 'tweet-form-header')
    .addClass('form')
    .text("Give Us Your Two Bits"))
    .prependTo($content);

//create the actual form with inputs and labels and a submit button
$('<form>')
    .attr('id', 'tweet-form')
    .attr('class', 'form-inline')
    .append($("<label>")
      .attr('for', 'username')
      .text('username')
      .css('padding', '10px'))
    .append($('<input>')
      .attr('id', 'username')
      .attr('type', 'text')
      .attr('placeholder', '@username')
      .css('padding', '7px'))
    .append($('<br/>'))
    .append($('<br/>'))
    .append($("<label>")
      .attr('for', 'tweet')
      .text('Give us your two bits!')
      .css('padding', '10px'))
    .append($('<input>')
      .attr('id', 'urTwoBits')
      .attr('type', 'text')
      .attr('placeholder', 'Your two bits...')
      .css('margin-right', '10px')
      .css('padding', '10px')
      .css('padding-right', '300px'))
    .append($('<button/>')
      .attr('type', 'submit')
      .attr('id', 'submit-button')
      .text('submit')
      .css('color', 'aquamarine')
      .css('background-color', 'black')
      .css('padding', '10px'))
      .appendTo($tweetForm)



//function to show all tweets that are not shown yet
 function showNewTweets() {
  //filter tweets that already exist and create a div with formatted tweets on hold 
    allTweets.filter((tweet) => {
    if(!usedTweets.includes(tweet)){ 
      usedTweets.push(tweet);
      const $tweet = $('<div></div>');
      const timeStamp = new Date
      
      $tweet.html(`<div class = 'tweet-user'> @${tweet.user} </div> ${tweet.message} <br/> <sub>  ... ${moment(timeStamp).fromNow()} </sub>`)
      var randomColors = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

      $tweet.prependTo('#newsfeed').css("background-color",randomColors).css('border-radius', '10px').css('padding-left', '7px').css('margin', '10px')

      return $tweet;
    }
  });

}

//Button function to refresh
$("#refresh-button").on('click', showNewTweets) 

//button function to write your own tweet
$("#twoBit-button").on('click', ()=> $tweetForm.show(1000))

//function to get userfeed
$('.tweet-user').on('click', userFeed) 

//function to submit tweet
$('#submit-button').on('click', (event) =>{
  displayTweet();
  setTimeout(showNewTweets, 100);
}) 



//user feed-  Allow the user to click on any username to see that user’s timeline.
//allUsers = streams.user (show only tweets by this user)
function userFeed(event) {
  const user = $(this).text(); 
  //empty content of user-feed
  $('#user-feed').empty()
  
  const $exitButton = $('<button/>').attr('id', 'GB-button').text('Back to Homefeed').css('color', 'pink').css('background-color', 'black')
  const $userheading = $('<h1>').text(`${user}'s Two Bits`).css('color', 'limegreen').css('font-family', 'monospace').css('padding', '7px').css('text-align', 'center');
  $('#user-feed').append($userheading).append($exitButton)
  
  usedTweets.filter((tweet) => {
    if(tweet.user = user){ 
      const $tweet = $('<div></div>');
      const timeStamp = new Date
      
      $tweet.html(`${tweet.user}: ${tweet.message} <br/> <sub>  ... ${moment(timeStamp).fromNow()} </sub>`)
    
      
      $tweet.appendTo('#user-feed').css("background-color",'mediumpurple').css('border-radius', '10px').css('padding-left', '7px').css('margin', '10px')

      return $tweet;
    }
  });
  
  $userSidebar.toggle(1000)
  $exitButton.on('click', ()=> $userSidebar.toggle(1000))
}

});

//function to submit your tweet
function displayTweet(){
//two inputs are #username #urTwoBits
//username make window.vistor
event.preventDefault()
$('#tweet-form-div').hide(500)
window.visitor = $('#username').val();

//call writeTweet function with message from input
  const bitsMessage = $('#urTwoBits').val();
  writeTweet(bitsMessage);
  $("input").val("")
}
