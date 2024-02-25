const { User } = require('../models'); // Adjust path as necessary
const bcrypt = require('bcryptjs');

const seedUsers = async () => {
  const userData = [
    {
      name: 'Sonya',
      
      email: 'sonya@example.com',
      password: bcrypt.hashSync('password123', 10),
    },
    {
      name: 'Alex',
      
      email: 'alex@example.com',
      password: bcrypt.hashSync('password456', 10),
    },
    {
      name: 'Max',
      
      email: 'max3@example.com',
      password: bcrypt.hashSync('password789', 10),
    }
  ];

  for (const user of userData) {
    await User.create(user);
  }
};

module.exports = seedUsers;
