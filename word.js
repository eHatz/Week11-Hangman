//contains all of the methods which will check the letters guessed versus the random word selected
var userLetter = require('./letter.js')['letter-control'];

function Word (wrd) {
	this.word = wrd;
	this.wordArr = wrd.split('');
	this.guessedLetters = [];
	this.guessCount = 5;
	//check users letter input and inserts it into guessed letters probably with .push()
	//check if letter input is inside of the word, if letter is not decrement amount of guesses by 1
	//check if word was found

	this.takeLetters = function(userIn) { //checks user input, will likely take propt values
		for (var i = 0; i < this.wordArr.length; i++) {
			if (userIn === this.wordArr[i]) {
				//call letter.js here

			} else
				this.guessCount--; //if the letter was not in the word array
				console.log('That letter is not in the word. You have ' + this.guessCount + ' guesses left.');
			};
		};
		this.guessedLetters.push(userIn);
	};

	this.
};

exports['word']= Word