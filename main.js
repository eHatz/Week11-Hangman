//contains the logic of your app. Running it in the terminal/bash will start the game
//app should end when the player guesses the correct word or runs out of guesses

var inquire = require('inquirer');
var checkWord = require('./word.js')['wordControl'];
var wordObj = new checkWord();


function inquireFunc () {
	inquire.prompt([
		{
			type: "input",
			name: "letter",
			message: "The word is " + wordObj.blankedWord.join(' ')  + " Pick a letter!"
		}
	]).then(function(user) {
		if (wordObj.guessCount === 1) {
			return console.log('You lose, how can you even call yourself a Game of Thrones fan.')
		};
		if (user.letter.length > 1) {
			console.log('Please only type one letter at a time.');
			console.log('_______________________________________________');
			console.log(' ');
			inquireFunc();
		} else if (user.letter.length === 0) {
			console.log('Please choose a letter.');
			console.log('_______________________________________________');
			console.log(' ');
			inquireFunc();
		} else if (wordObj.guessedLetters.indexOf(user.letter) > -1) {
			console.log('You already Guessed that letter');
			console.log('_______________________________________________');
			console.log(' ');
			inquireFunc();
		} else{
			wordObj.takeLetters(user.letter);
			console.log('You have guessed the following letter: ' + wordObj.guessedLetters.join(' '));
			console.log('You have ' + wordObj.guessCount + ' guesses left.');
			if (wordObj.currentWord.join('') === wordObj.blankedWord.join('')){
				return console.log('You WON, you may now sit on the Iron Throne!');
			}
			else{
				inquireFunc();
			};	
		};
		
	});
};
inquireFunc();