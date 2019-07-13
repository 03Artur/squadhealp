
const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Justin',
      lastName: 'Bieber',
      email: 'justin@gmail.com',
      password: bcrypt.hashSync('1qaz2w3e4r', bcrypt.genSaltSync(8)),
      isActive: true,
      isBanned: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
  },
};
