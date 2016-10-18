'use strict';
const fs = require('fs');
const R = require('ramda')
let file = './db/fixtures/words';


module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    let data_array = fs.readFileSync(file).toString().split('\n');
    // [
    //{words: word}
    // ]

    return queryInterface.bulkInsert('Words', the_obj(data_array), {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};

////
let the_obj = (array) => {
  let result = [];
  for(let i = 0; i < array.length - 1; i += 1){
    result.push({word:array[i]})
  }
  return result;
}
