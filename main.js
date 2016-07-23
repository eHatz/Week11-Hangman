var inquire = require('inquirer');
var checkWord = require('./word.js')['wordControl'];
var wordObj = new checkWord();


function inquireFunc () {
	if (wordObj.guessCount === 0) { // if the user has guess incorrectly 5 times
		console.log('You lose, how can you even call yourself a Game of Thrones fan.');
		return console.log('The character was ' + wordObj.currentWord.join('')); //converts the currentWord array into a string
	};
	inquire.prompt([
		{
			type: "input",
			name: "letter",
			message: "The word is " + wordObj.blankedWord.join(' ')  + " Pick a letter!" // converts the array blankedWord to a string
		}
	]).then(function(user) {
		var userGuess = user.letter.toLowerCase();
		if (userGuess.length > 1) { // prevent the user from inputting more than one letter
			console.log(' ');
			console.log('Please only type one letter at a time.');
			console.log('_______________________________________________');
			console.log(' ');
			inquireFunc(); // resets the function
		} else if (userGuess.length === 0) { // prevent the user from not entering anything
			console.log(' ');
			console.log('Please choose a letter.');
			console.log('_______________________________________________');
			console.log(' ');
			inquireFunc();
		} else if (wordObj.guessedLetters.indexOf(userGuess) > -1) { //prevent the user from entering a letter that was already entered
			console.log(' ');
			console.log('You already guessed that letter');
			console.log('_______________________________________________');
			console.log(' ');
			inquireFunc();
		} else{
			wordObj.takeLetters(userGuess); // runs the method takeLetters stored in wordObj 
			console.log('You have guessed the following letter: ' + wordObj.guessedLetters.join(' ')); // converts the guessedLetters array to a string separated by spaces
			console.log('You have ' + wordObj.guessCount + ' guesses left.');
			if (wordObj.currentWord.join('') === wordObj.blankedWord.join('')){ // if the user has guessed all the letter/ if all the '_' have been switched to letters
				return console.log('You WON, you may now sit on the Iron Throne!');
			}
			else{
				inquireFunc(); // if the user has not guessed all the letter resets the function
			};	
		};
		
	});
};

inquireFunc(); //starts the app