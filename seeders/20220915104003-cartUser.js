'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.bulkInsert('Carts' ,[{
     userId : 1,
     cartName : 'cart1',
     createdAt : new Date(),
     updatedAt : new Date()
   },{
       userId : 2,
       cartName : 'cart2',
       createdAt : new Date(),
       updatedAt : new Date()
   },
       {
           userId : 3,
           cartName : 'cart3',
           createdAt : new Date(),
           updatedAt : new Date()
       }])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Carts' ,null ,{});
  }
};
