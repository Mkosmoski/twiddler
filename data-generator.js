/*
 * NOTE: This file generates fake tweet data, and is not intended to be part of your implementation.
 * You can safely leave this file untouched, and confine your changes to index.js.
 */

// Set up data structures
const streams = {
  home: [],
  users: {
    smashBr0: [],
    thisBytes: [],
    retroGaymer: [],
    aBit0ff: [],
  },
};
const users = Object.keys(streams.users);

// Utility function for adding tweets to our data structures
const addTweet = (newTweet) => {
  const username = newTweet.user;
//  streams.users[username].push(newTweet);
  streams.home.push(newTweet);
};

// Utility function
const randomElement = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

// Random tweet generator
const opening = ['By the power of Greyskull, I', 'just', '', '', 'Poll time: has anyone', 'ask me how i', 'the legend is', 'nearly', 'once again', 'Without a map or sword i', 'Last night when I was lost in a cave I', 'the princess is captured and', 'that evil sorcerer finally', 'the apothecary', 'A cloaked man in the shadows'];
const verbs = ['slayed in one mighty blow', 'cast', 'fought', 'smashed', 'poisoned', 'fused', 'experienced', 'with determination I navigated', 'aided', 'delighted by', 'traveled', 'conquered', 'scorched', 'adventured', 'reigned', 'explored', 'revealed', 'hailed from', 'ignited in passion'];
const objects = ['my', 'your', 'the', 'the unknown', 'a', 'my', 'an invincible', 'a mysterious', 'this', 'that', 'the', 'the magical', 'a new form of'];
const nouns = ['princess warrior', 'Bowser did it again!!!?', 'shadow cave?', 'Town of Lunar <3', 'dragon', 'cloud kingdom', 'chocobo ride through the country', 'treasure', 'way of life...', 'Triforce', 'pokéball', 'questionable decision', 'alternate future', 'life', 'goblins!!', 'King B00'];
const tags = ['#wizardlyfe', '#chocobo', '#pixelproblems', '#bytesized', '#my2bits', '#smashbro', '#levelUp', '#pwned', '#NES4eva', '#magic', '#thatSquirtleTho', '', '', ''];

const randomMessage = () => {
  return [
    randomElement(opening),
    randomElement(verbs),
    randomElement(objects),
    randomElement(nouns),
    randomElement(tags),
  ].join(' ');
};

// Generate random tweets on a random schedule
const generateRandomTweet = () => {
  const tweet = {
    user: randomElement(users),
    message: randomMessage(),
  };
  addTweet(tweet);
};

for (let i = 0; i < 10; i++) {
  generateRandomTweet();
}

const scheduleNextTweet = () => {
  generateRandomTweet();
  setTimeout(scheduleNextTweet, Math.random() * 1500);
};
scheduleNextTweet();

// Utility function for letting students add "write a tweet" functionality
// (NOTE: Not used by the rest of this file.)
const writeTweet = (message) => {
  const visitor = window.visitor;

  if (!visitor){
    throw new Error('Set the global visitor property!');
  }

  const tweet = {
    user: visitor,
    message: message,
  };
  addTweet(tweet);
};
