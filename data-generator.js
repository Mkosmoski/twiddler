/*
 * NOTE: This file generates fake tweet data, and is not intended to be part of your implementation.
 * You can safely leave this file untouched, and confine your changes to index.js.
 */

// Set up data structures
const streams = {
  home: [],
  users: {
    smashBr0: [],
    byteMy@ss: [],
    retroG@ymer: [],
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
const opening = ['by the power of Greyskull', 'just', '', '', '', 'ask me how i', 'completely', 'nearly', 'once again', 'efficiently', 'last night i', 'the princess is captured', 'that evil sorcerer', 'the apothecary', 'a shady old man'];
const verbs = ['slayed', 'cast', 'fought', 'smashed', 'poisoned', 'fused', 'experienced', 'navigated', 'aided', 'delighted', 'traveled', 'flew', 'scorched', 'adventured', 'reigned', 'explored', 'revealed', 'hailed', 'ignited'];
const objects = ['my', 'your', 'the', 'the unknown', 'a', 'my', 'an entire', 'this', 'that', 'the', 'the magical', 'a new form of'];
const nouns = ['princess warrior', 'Bowser', 'shadow cave', 'Town of Lunar', 'dragon', 'cloud kingdom', 'chocobo', 'treasure', 'way of life', 'Triforce', 'pokéball', 'bad decision', 'future', 'life', 'goblins', 'King Boo'];
const tags = ['#wizardlyfe', '#chocoboproblems', '#mushroomkingdom', '#bytesized', '#my2bits', '#smashbro', '#levelUp', '#pwned', '#NESlife', '#magic', '#thatSquirtleTho', '', '', ''];

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
    created_at: new Date(),
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
