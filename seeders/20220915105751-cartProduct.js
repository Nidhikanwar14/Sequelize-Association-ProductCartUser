'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.bulkInsert('Products' ,[{
     cartId : 1,
     productName : 'Mobile',
     productPrice : 10000,
     createdAt : new Date(),
     updatedAt : new Date()
   },
       {
           cartId : 2,
           productName : 'T-shirt',
           productPrice : 3000,
           createdAt : new Date(),
           updatedAt : new Date()
       },
       {
           cartId : 2,
           productName : 'Jackets',
           productPrice : 5000,
           createdAt : new Date(),
           updatedAt : new Date()
       }])
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.bulkDelete('Products' ,null ,{})
  }
};
