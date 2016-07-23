function Letter(theWord) {
	this.word = theWord.split(''); //turns the string into an array

	this.toBlank = function() {
		var blankedWord = [];
		for(i = 0; i < this.word.length; i++) { // makes an array of '_' the same length as the word array
			blankedWord.push('_');// push the '_' into the array
		};
		return blankedWord;
	};
	this.blankWord = this.toBlank(); //takes the blank array created by toBlank function

	this.checkLetter = function(blankWord, realWord, userInput, index) { //checks if user guessed letter is in the word
		if (realWord[index].toLowerCase() === userInput) { //compares the users choice to the letter at that index
			blankWord[index] = realWord[index]; //changes the value of the blank at that index to the letter
		};
	};
};

module.exports['letter-control'] = Letter;