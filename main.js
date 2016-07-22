//contains the logic of your app. Running it in the terminal/bash will start the game
//app should end when the player guesses the correct word or runs out of guesses

var inquire = require('inquirer');
var checkWord = require('./word.js')['wordControl'];
var wordObj = new checkWord();
console.log(wordObj);

function inquireFunc () {
	inquire.prompt([
		{
			type: "input",
			name: "letter",
			message: "The word is " + wordObj.blankedWord.join(' ')  + " Pick a letter!"
		}
	]).then(function(user) {
		if (user.letter.length > 1) {
			console.log('Please only type one letter at a time.')
		} else if {
			
		};
		wordObj.takeLetters(user.letter);
	});
};