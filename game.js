//randomly selects a word for the player

function pickWord() {
	var chars = ['robb', 'catelyn', 'eddard', 'hodor', 'joffrey', 'robert', 'ygritte', 'renly', 'drogo', 'stannis', 'myrcella', 'viserys', 'oberyn', 'shaggydog'];
	var randNum = Math.floor(Math.random() * chars.length);
	return chars[randNum];
};

exports['picks-word'] = pickWord;