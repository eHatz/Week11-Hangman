//constructor file
//randomly selects a word for the player

function pickWord() {
	var chars = ['Robb', 'Catelyn', 'Eddard', 'Hodor', 'Jeoffrey', 'Robert', 'Ygritte', 'Renly', 'Drogo', 'Stannis', 'Myrcella', 'Viserys', 'Oberyn', 'Shaggydog'];
	var randNum = Math.floor(Math.Random() * chars.length);
	return chars[randNum];
};
exports['random-word'] = pickWord;