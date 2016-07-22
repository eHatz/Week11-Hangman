//contains all of the methods which will check the letters guessed versus the random word selected
var picksWord = require('./game.js')['picks-word'];
var userLetter = require('./letter.js')['letter-control'];
var letterObj = new userLetter(picksWord());
var wordObj = new Word();

function Word (wrd) {
	this.guessedLetters = [];
	this.guessCount = 5;
	this.currentWord = letterObj.word;
	this.blankedWord = letterObj.blankWord;
	//check users letter input and inserts it into guessed letters probably with .push()
	//check if letter input is inside of the word, if letter is not decrement amount of guesses by 1
	//check if word was found

	this.takeLetters = function(userInput) { //checks user input, will likely take prompt values
		if (this.currentWord.indexOf(userInput) >= 0) { //if the letter the user typed exists in the word
			console.log('you guessed right'); 
			this.guessedLetters.push(userInput); // adds the letter guessed to the array
			for (var i = 0; i < this.currentWord.length; i++) { // runs throug the current word
				if (userInput === this.currentWord[i]) { // if the letter that was typed exists at that index in the word switch blank word to the letter
					this.blankedWord[i] = userInput;
				};
			};
			console.log(this.blankedWord);

		} else {
			console.log('you guessed wrong')
			this.guessCount--;
		};
	};
};



module.exports['wordControl']= Word;