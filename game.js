function pickWord() {
	var chars = ['Robb', 'Catelyn', 'Eddard', 'Hodor', 'Joffrey', 'Robert', 'Ygritte', 'Renly', 'Drogo', 'Stannis', 'Myrcella', 'Viserys', 'Oberyn', 'Shaggydog'];
	var randNum = Math.floor(Math.random() * chars.length); //randomly select a string in the array
	return chars[randNum];
};

exports['picks-word'] = pickWord;