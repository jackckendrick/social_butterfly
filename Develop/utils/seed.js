const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUsers, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Thought.deleteMany({});
  await User.deleteMany({});

  const users = getRandomUsers(2);
  const thoughts = getRandomThoughts(10);

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
