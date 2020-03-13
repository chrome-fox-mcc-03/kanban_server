'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [
      {name_box:'Backlog',description:'add feature login',UserId:4,createdAt:new Date(),updatedAt:new Date()},
      {name_box:'Backlog',description:'add feature register',UserId:4,createdAt:new Date(),updatedAt:new Date()},
      {name_box:'Backlog',description:'add feature register',UserId:4,createdAt:new Date(),updatedAt:new Date()},
      {name_box:'Backlog',description:'add feature register',UserId:3,createdAt:new Date(),updatedAt:new Date()},
      {name_box:'Backlog',description:'add feature register',UserId:1,createdAt:new Date(),updatedAt:new Date()},
      {name_box:'Development',description:'add feature overflow',UserId:4,createdAt:new Date(),updatedAt:new Date()},
      {name_box:'Development',description:'add feature label',UserId:4,createdAt:new Date(),updatedAt:new Date()},
      {name_box:'Development',description:'add feature update',UserId:4,createdAt:new Date(),updatedAt:new Date()},
      {name_box:'Development',description:'add feature delete',UserId:4,createdAt:new Date(),updatedAt:new Date()},
      {name_box:'Product',description:'add feature card',UserId:4,createdAt:new Date(),updatedAt:new Date()},
    ]
    return queryInterface.bulkInsert('Todos',data,{})
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Todos',null,{})
  }
};
