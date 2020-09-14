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

function rangeAggregator(characterRangeKey) {
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

var alphabetUpperCaseArray = rangeAggregator(
  unicodeCharacters.alphabetUpperRange
);
var alphabetLowerCaseArray = rangeAggregator(
  unicodeCharacters.alphabetLowerRange
);
var symbolsArray = rangeAggregator(unicodeCharacters.symbolRange);
var numbersArray = rangeAggregator(unicodeCharacters.numberRange);

var defaultPwdLength = 12;
var characterTypes = {
  alphabetUpperCase: false,
  alphbetLowerCase: true,
  symbols: false,
  numbers: false,
};
