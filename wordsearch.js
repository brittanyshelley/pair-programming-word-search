const transpose = require('./transpose');


const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (let l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    const transposedLetters = transpose(letters);
    const verticalJoin = transposedLetters.map(ls => ls.join(''));
    for (let l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    return false;
}


module.exports = wordSearch;

