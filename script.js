// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// ranges of Unicode characters in decimal

var unicodeCharacters = {
  symbolRange: [
    [33, 48],
    [58, 65],
    [91, 97],
    [123, 127],
  ],
  alphabetUpperRange: [[65, 91]],
  alphabetLowerRange: [[97, 123]],
  numberRange: [[48, 58]],
};

// returns an array of unicode characters given a corresponding range in decimal

function unicodeRetriever(decimalRange) {
  var character = [];
  for (i = decimalRange[0]; i < decimalRange[1]; i++) {
    character.push(String.fromCharCode(i));
  }
  return character;
}

// parses key value pairs of unicode decimal ranges stored in UnicodeCharacters

function characterSettings(characterRangeKey) {
  length = characterRangeKey.length;
  var characterArray = [];
  for (var i = length; i--; ) {
    characterArray = characterArray.concat(
      unicodeRetriever(characterRangeKey[i])
    );
  }
  return characterArray;
}

//arrays of possible characters to use in password generation

var alphabetUpperCase = characterSettings(unicodeCharacters.alphabetUpperRange);
var alphabetLowerCase = characterSettings(unicodeCharacters.alphabetLowerRange);
var symbols = characterSettings(unicodeCharacters.symbolRange);
var numbers = characterSettings(unicodeCharacters.numberRange);

console.log(alphabetLowerCase);
console.log(alphabetUpperCase);
console.log(symbols);
console.log(numbers);
