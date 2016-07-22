//contains the logic of your app. Running it in the terminal/bash will start the game
//app should end when the player guesses the correct word or runs out of guesses

var prompt = require('prompt');
var checkWord = require('./word.js')['word'];
var randomWord = require('./game.js')['random-word'];
