const adjectives = require('./adjectives');
const nouns = require('./nouns');
function generateUsername() {
    let randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    let randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    let randomUsername = randomAdjective + randomNoun;
    return randomUsername;
}

module.exports = generateUsername;