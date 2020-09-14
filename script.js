// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", userDesiredCharacters);

// ranges of Unicode characters in decimal

var unicodeCharacters = {
  specialCharRange: [
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
var specialCharArray = rangeAggregator(unicodeCharacters.specialCharRange);
var numbersArray = rangeAggregator(unicodeCharacters.numberRange);

var userSettings = {
  pwdLength: [0],
  alphabetUpper: ["uppercase", null],
  alphabetLower: ["lowercase", null],
  specialChar: ["special", null],
  numbers: ["numbers", null],
};

function userDesiredCharacters() {
  while (userSettings.pwdLength[0] < 8 || userSettings.pwdLength[0] > 128) {
    var desiredPwdLength = prompt(
      "How long do you want your password to be? Enter a number between 8 - 128"
    );
    userSettings.pwdLength[0] = desiredPwdLength;
  }
  // var userCharPrompt = prompt(
  //   "Do you want to use " + userChoice + "characters? Type y/n"
  // );

  for (i = 1; i < Object.keys(userSettings).length; i++) {
    // console.log(Object.keys(userSettings[i]));
  }

  // console.log(Object.keys(userSettings).length);
}
