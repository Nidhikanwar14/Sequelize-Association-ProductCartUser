'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users' , [{
      firstName : 'john',
      lastName : 'hvc',
      email : 'hgcs@gmail.com',
      password : '632g@',
      createdAt : new Date(),
      updatedAt :new Date()
    },
      {
        firstName : 'Whiskey',
        lastName : 'dhf',
        email : 'kh12@gmail.com',
        password : '212g@',
        createdAt : new Date(),
        updatedAt :new Date()
      },
      {
        firstName : 'Sharline',
        lastName : 'wdg',
        email : 'dts76@gmail.com',
        password : 'yy2g@',
        createdAt : new Date(),
        updatedAt :new Date()
      }])
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.bulkDelete('Users' ,null ,{});
  }
};
