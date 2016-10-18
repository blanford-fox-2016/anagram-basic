var express = require('express');
var router = express.Router();
var helper = require('../helpers/util');
var fs  = require('fs');
var models = require('../models')
var words = models.Words
const R = require('ramda');
const sequelize = require('sequelize');


/* GET home page. */

router.post('/', function(req, res, next) {
  var input = req.body.word;
  var lengthInput = input.length;

  // var a = word.split("");
  // const permutations = (n, tokens, subperms = [[]]) =>
  //   n < 1 || n > tokens.length ?
  //     subperms        :
  //     R.addIndex(R.chain)((token, idx) => permutations(
  //       n - 1,
  //       R.remove(idx, 1, tokens),
  //       R.compose(R.map, R.append)(token)(subperms)
  //     ), tokens);
  //
  // var test  = permutations(a.length, a);
  // var result = R.uniq(R.map(x => x.join(""), test))

  words.findAll({
    where: sequelize.where(sequelize.fn('char_length', sequelize.col('word')), lengthInput)
  }).then(function(data, err){
    if (err) {
      console.log(err);
    }else{
      //console.log(data.dataValues.word);
      for (var i = 0; i < data.length; i++) {
        console.log(data[i].word);
        res.render('index', {word : data[i].word, title: 'Anagrams'});
      }

      callback()
      // res.send(data)
    }
  })

});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Anagrams'});
});

module.exports = router;
