

$(document).ready(() => {
  const $body = $('body');
  $body.html('');

  console.log(moment())
//array to push used tweets into
  let usedTweets = [];
//contain all the tweets in the stream
  const allTweets = streams.home


//tweets to first map and put on the page
  const $tweets = streams.home.map((tweet) => {
    usedTweets.push(tweet)
    const $tweet = $('<div></div>');
  //const date = moment().format('hh:mm:ss') 
    const text = `@${tweet.user}: ${tweet.message}`
   
    // const today = new Date()
    // const postTime = today.getDay()+' at '+ today.getHours() + ':' + today.getMinutes();
    // // Saturday, June 9th, 2007, 5:46:21 PM
    $tweet.text(text)
       
  
    return $tweet
  
  });


//create a main section with the id section-main order newsfeed and first tweets
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

//function to show all tweets that are not shown yet
 function showNewTweets() {
 
  //filter tweets that already exist and create a div with formatted tweets on hold 
    allTweets.filter((tweet) => {
    if(!usedTweets.includes(tweet)){ 
      usedTweets.push(tweet);
      const $tweet = $('<div></div>');
      const text = `@${tweet.user}: ${tweet.message}`
      
      $tweet.text(text)
      $tweet.prependTo('#newsfeed')
      return $tweet;
    }
  });

}

//Button function
$("#refresh-button").on('click', showNewTweets) 






});
