"use strict";
const fs = require("fs");
let data = JSON.parse(fs.readFileSync("./data/categories.json", "utf8"));
data.map(el => {
  el.createdAt = new Date();
  el.updatedAt = new Date();
  return el;
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Categories", data);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Categories", null);
  }
};
