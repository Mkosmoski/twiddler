$(document).ready(() => {
  const $body = $('body');
  $body.html('');


  let usedTweets = [];

  const allTweets = streams.home
//et count = 0


  const $tweets = streams.home.map((tweet) => {
    usedTweets.push(tweet)
    const $tweet = $('<div></div>');
    const text = `@${tweet.user}: ${tweet.message}`
    const date = moment().format('h:mm:ss a');
    // Saturday, June 9th, 2007, 5:46:21 PM
    $tweet.text(text).text(date)
  
    return $tweet;
  
  });


//create a main section with the id section-main
const $newsfeed = $('<section>').attr('id', 'newsfeed');
$body.append($newsfeed)
$newsfeed.append($tweets)

// Show the user new tweets somehow.- create a button that displays new tweets.
//attach the tweets to the main section

//nav bar
$('<section>')
  .attr('id', 'nav')
  .addClass('nav-bar')
  .prependTo($body);
//add the button!
$('<button/>')
  .attr('id', 'refresh-button')
  .text('Refresh Your Feed')
  .css('color', 'aquamarine')
  .css('background-color', 'black')
  .prependTo('#nav');


 function showNewTweets() {
 
  //filter tweets that already exist and creat a div with formatted tweets on hold 
    allTweets.filter((tweet) => {
    if(!usedTweets.includes(tweet)){ 
      usedTweets.push(tweet);
      const $tweet = $('<div></div>');
      const text = `@${tweet.user}: ${tweet.message}`
      //const date = moment().format("dddd, MMMM Do, h:mm A");
      // Saturday, June 9th, 2007, 5:46:21 PM
      $tweet.text(text) //.append(date)
      $tweet.prependTo('#newsfeed')
      return $tweet;
    }
  });

}
  //console.log(allTweets)
//Button function
$("#refresh-button").on('click', showNewTweets) 

// function showNewTweets() {
//   $newTweets.appendTo('#newsfeed')

// }






});
