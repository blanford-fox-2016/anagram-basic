'use strict';


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
    let fs = require('fs')
    let data_file = fs.readFileSync('./db/fixtures/words', 'utf8').split("\n")
    let data_array = []

    for(var i = 0 ; i < data_file.length-1 ; i++){
      data_array.push({words: data_file[i], createdAt: new Date(), updatedAt: new Date()})
    }

    return queryInterface.bulkInsert('anagram_devs', data_array)
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('anagram_devs', null);
  }
};