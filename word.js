var picksWord = require('./game.js')['picks-word'];
var userLetter = require('./letter.js')['letter-control'];
var letterObj = new userLetter(picksWord()); //makes an object which used the constructor function in letter and takes a randomly selected string as a parameter
var wordObj = new Word();

function Word (wrd) {
	this.guessedLetters = [];
	this.guessCount = 5; //initial amount of guesses the user has
	this.currentWord = letterObj.word; //sets value to the value inside of the letter object... could not set it to picksWord because it
										//would return another random word from the array
	this.blankedWord = letterObj.blankWord;

	this.takeLetters = function(userInput) {
		//checks if the letter the user typed is in the word...check both capital and lower case
		if (this.currentWord.indexOf(userInput.toLowerCase()) >= 0 || this.currentWord.indexOf(userInput.toUpperCase()) >= 0) {
			console.log(' ');
			console.log('you guessed right');
			console.log('_______________________________________________');
			console.log(' ');
			this.guessedLetters.push(userInput); // adds the letter guessed to the array

			for (var i = 0; i < this.currentWord.length; i++) { // runs through the current word
				letterObj.checkLetter(this.blankedWord, this.currentWord, userInput, i); //adds the parameters to the check letter function stored in letterObj

				//the code below works as well but the instructions said 
				//'controls whether or not the letter appears as a '_' or as itself on-screen' should be stored in letters.js

				// if (userInput === this.currentWord[i]) {
				// 	this.blankedWord[i] = userInput;
				// };
			};

		} else {
			console.log(' ');
			console.log('you guessed wrong')
			console.log('_______________________________________________');
			console.log(' ');
			this.guessCount--;//decrements guess count
			this.guessedLetters.push(userInput); // add the user guessed letter to the array
		};
	};
};

module.exports['wordControl'] = Word;