// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", main);

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

//user character choices

var userSettings = {
  pwdLength: [null],
  alphabetUpper: ["uppercase"],
  alphabetLower: ["lowercase"],
  specialChar: ["special"],
  numbers: ["numbers"],
};

//valid user entries

var acceptableEntries = {
  passwordRange: [8, 128],
  userFlagTrue: ["y", "Y", "yes", "Yes", "YES"],
  userFlagFalse: ["n", "N", "no", "No", "NO"],
};

function main() {
  userDesiredCharacters();
}

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

//Prompts user for lowercase, uppercase, special characters, or numbers selection

function userDesiredCharacters() {
  for (const [key, value] of Object.entries(userSettings)) {
    if (key === "pwdLength") {
      while (rangeValidator(value[0]) != true) {
        let desiredPwdLength = prompt(
          "How long do you want your password to be? Enter a number between 8 - 128"
        );
        value[0] = desiredPwdLength;
      }
    } else {
      while (characterValidator(value[1]) != true) {
        let userCharPrompt = prompt(
          "Do you want to use " + value[0] + " characters? Type y/n"
        );
        value[1] = userCharPrompt;
      }
    }
  }
}

// validates user entries for user character selection

function characterValidator(value) {
  while (
    acceptableEntries.userFlagTrue.includes(value) ||
    acceptableEntries.userFlagFalse.includes(value)
  ) {
    return true;
  }
  return false;
}

// validates user entries for password length choice

function rangeValidator(value) {
  while (
    value < acceptableEntries.passwordRange[0] ||
    value > acceptableEntries.passwordRange[1]
  ) {
    return false;
  }
  return true;
}

function userSettingsUpdater(userPrompt) {}
