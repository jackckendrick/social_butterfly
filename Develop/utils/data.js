const { Schema, model, Types } = require('mongoose');
const usernames = [
  "happydog",
  "sillycat",
  "smartbird",
  "bravelion",
  "kindmonkey",
  "funnyturtle",
  "gentleelephant",
  "wildpenguin",
  "cleverdog",
  "creativecat",
  "happylion",
  "sillybird",
  "smartmonkey",
  "braveturtle",
  "kindelephant",
  "funnypenguin",
  "gentledog",
  "wildcat",
  "cleverbird",
  "creativelion",
  "happymonkey",
  "sillyturtle",
  "smartelephant",
  "bravepenguin",
  "kinddog",
  "funnycat",
  "gentlebird",
  "wildlion",
  "clevermonkey",
  "creativeelephant"
];


const emails = [
  "john.doe@yahoo.com",
  "jane.smith@gmail.com",
  "alexander.wilson@yahoo.com",
  "olivia.johnson@gmail.com",
  "william.brown@yahoo.com",
  "emily.davis@gmail.com",
  "michael.miller@yahoo.com",
  "sophia.anderson@gmail.com",
  "james.jackson@yahoo.com",
  "oliver.thomas@gmail.com",
  "charlotte.white@yahoo.com",
  "benjamin.harris@gmail.com",
  "ava.thompson@yahoo.com",
  "lucas.clark@gmail.com",
  "mia.lewis@yahoo.com",
  "henry.lee@gmail.com",
  "amelia.hall@yahoo.com",
  "logan.green@gmail.com",
  "isabella.carter@yahoo.com",
  "daniel.hill@gmail.com",
  "olivia.johnson@yahoo.com",
  "alexander.wilson@gmail.com",
  "sophia.anderson@yahoo.com",
  "michael.miller@gmail.com",
  "emily.davis@yahoo.com",
  "william.brown@gmail.com",
  "oliver.thomas@yahoo.com",
  "charlotte.white@gmail.com",
  "james.jackson@yahoo.com",
  "olivia.johnson@gmail.com"
];


const thoughts = [
  "Life is a journey, not a destination.",
  "The only way to do great work is to love what you do.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "The best preparation for tomorrow is doing your best today.",
  "In the middle of every difficulty lies opportunity.",
  "Don't watch the clock; do what it does. Keep going.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Believe you can and you're halfway there.",
  "It does not matter how slowly you go as long as you do not stop.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  "A person who never made a mistake never tried anything new.",
  "You miss 100% of the shots you don't take.",
  "The greatest glory is not in never falling, but in rising every time we fall.",
  "Your time is limited, don't waste it living someone else's life.",
  "The best way to predict the future is to create it.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  "Opportunities don't happen. You create them.",
  "The only person you should try to be better than is the person you were yesterday.",
  "Don't be afraid to give up the good to go for the great.",
  "The harder I work, the luckier I get.",
  "You are never too old to set another goal or to dream a new dream.",
  "It always seems impossible until it's done.",
  "Dream big and dare to fail.",
  "Success is not just about making money. It's about making a difference.",
  "In the end, it's not the years in your life that count. It's the life in your years.",
  "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
  "The secret of getting ahead is getting started.",
  "If you want to achieve greatness, stop asking for permission.",
  "You have within you right now, everything you need to deal with whatever the world can throw at you."
];

const reactions = [
  "Great job!",
  "Well said!",
  "Amazing work!",
  "Impressive!",
  "Brilliant!",
  "Fantastic!",
  "You nailed it!",
  "Well done!",
  "Incredible!",
  "You're awesome!",
  "I'm impressed!",
  "You rock!",
  "Outstanding!",
  "Terrific!",
  "Excellent job!",
  "Well executed!",
  "Superb!",
  "You're a star!",
  "Splendid work!",
  "Kudos!",
  "You've outdone yourself!",
  "Magnificent!",
  "You're incredible!",
  "Well played!",
  "You've amazed me!",
  "Thumbs up!",
  "You're a legend!",
  "You've earned my respect.",
  "Phenomenal!",
  "A job well done!"
];



const users = [];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(usernames)}`;

// Function to generate random user profiles that we can add to the database. Includes thoughts.
const getRandomUsers = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      username: getRandomName(),
      email: getRandomArrItem(emails),
      // thoughts: [...getRandomThoughts(2)],
      // friends: [...getFriends(5)],
    });
  }
  return results;
};


//Gets random thoughts to add to the database
const getRandomThoughts = (int) => {
  let results = [];
  for (let i=0; i<int; i++){
    results.push({
      thoughtText: getRandomArrItem(thoughts),
      createdAt: Date.now(),
      username: getRandomName(),
      reactions: [...getReactions(3)]
    })
  }
  return results;
}

//gets random reactions to add to the thoughts In the database
const getReactions = (int) => {
  let results =[];
  for (let i =0; i<int; i++){
    results.push({
      reactionId: {type: Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId(),},
      reactionBody: getRandomArrItem(reactions),
      username: getRandomName(),
      createdAt: Date.now(),
    })
  }
  return results;
}

// Create the tags that will be added to each application
// const getFriends = (int) => {
//   if (int === 1) {
//     return getRandomName();
//   }
//   const results = [];
//   for (let i = 0; i < int; i++) {
//     results.push({
//       username: getRandomName(),
//     });
//   }
//   return results;
// };

// Export the functions for use in seed.js
module.exports = { getRandomUsers, getRandomThoughts };
