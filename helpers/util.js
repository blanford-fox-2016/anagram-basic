'use strict';

var models = require('../models/index');
var word = models.Words;
var sequelize = require('sequelize');
var util = {};
var hasil = []

util.anagrams = function(source, callback){
  word.findAll({
    where: sequelize.where(sequelize.fn('char_length', sequelize.col('kata')), source.length),
    }).then(function (data){
      console.log(data[0].dataValues);
      for(var i = 0; i < data.length; i++){
          hasil.push(data[i].dataValues.kata)
      }
      callback(source, hasil)
      })
}

module.exports = util;
