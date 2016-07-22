//constructor file
//controls whether or not the letter appears as a '_' or as itself on-screen
var chosenWord = require('./game.js')['random-word'];

function Letter(letter) {
	this.word = chosenWord.split('');
	this.blankWord = this.toBlank();

	this.toBlank = function() {
		var blankedWord = [];
		for(i = 0; i < this.word; i++) {
			blankedWord.push('_');
		};
		return blankedWord
	};

	this.checkLetter = function(userLetter) {
		for (var i = 0; i < this.word.length; i++) {
			if (userLetter === this.word[i]) {
				this.blankWord[i] = userLetter;
			};
		};
	};
};

exports['letter-control'] = Letter;

	//make a charac property and set it to what you think makes second_instructor_demonstration

	//make an appear property and set it to what makes sense

	//make a letterRender property and set it to a function that does what you think makes sense
//export the Letter constructor here