'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let label = [
      {name:'front-end',color:'red',TodoId:7,createdAt:new Date(),updatedAt:new Date()},
      {name:'front-end',color:'blue',TodoId:7,createdAt:new Date(),updatedAt:new Date()},
      {name:'front-end',color:'red',TodoId:7,createdAt:new Date(),updatedAt:new Date()},
      {name:'front-end',color:'red',TodoId:8,createdAt:new Date(),updatedAt:new Date()},
      {name:'front-end',color:'red',TodoId:8,createdAt:new Date(),updatedAt:new Date()},
      {name:'back-end',color:'red',TodoId:2,createdAt:new Date(),updatedAt:new Date()},
      {name:'back-end',color:'red',TodoId:3,createdAt:new Date(),updatedAt:new Date()},
      {name:'back-end',color:'red',TodoId:4,createdAt:new Date(),updatedAt:new Date()},
    ]
    return queryInterface.bulkInsert('Labels',label,{})
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Labels',null,{})
  }
};
