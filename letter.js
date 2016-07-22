//constructor file
//controls whether or not the letter appears as a '_' or as itself on-screen

function Letter(theWord) {
	this.word = theWord.split('');
	this.toBlank = function() {
		var blankedWord = [];
		for(i = 0; i < this.word.length; i++) {
			blankedWord.push('_');
		};
		return blankedWord
	};

	this.blankWord = this.toBlank();
};

module.exports['letter-control'] = Letter;