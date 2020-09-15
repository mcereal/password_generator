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

// var unicodeCharacters = {
//   specialCharRange: [
//     [33, 48],
//     [58, 65],
//     [91, 97],
//     [123, 127],
//   ],
//   alphabetUpperRange: [[65, 91]],
//   alphabetLowerRange: [[97, 123]],
//   numberRange: [[48, 58]],
// };

//user character, length, entry settings, and ranges of Unicode characters in decimal

var userSettings = {
  pwdLength: [null],
  alphabetUpper: [[null], [false], ["uppercase"], [[65, 91]]],
  alphabetLower: [[null], [false], ["lowercase"], [[97, 123]]],
  specialChar: [
    [null],
    [false],
    ["special"],
    [
      [33, 48],
      [58, 65],
      [91, 97],
      [123, 127],
    ],
  ],
  numbers: [[null], [false], ["numbers"], [[48, 58]]],
  passwordRange: [8, 128],
  userFlagTrue: ["y", "Y", "yes", "Yes", "YES"],
  userFlagFalse: ["n", "N", "no", "No", "NO"],
};

function main() {
  userDesiredCharacters();
  characterOptionsConstructor();
}

// returns an array of unicode characters given a corresponding range in decimal

function unicodeRetriever(decimalRange) {
  var character = [];
  for (i = decimalRange[0]; i < decimalRange[1]; i++) {
    character.push(String.fromCharCode(i));
  }
  return character;
}

// parses key value pairs of unicode decimal ranges stored in unicodeCharacters

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

//Prompts user for lowercase, uppercase, special characters, or numbers selection

function userDesiredCharacters() {
  for (const [key, value] of Object.entries(userSettings)) {
    if (key.includes("pwdLength")) {
      while (rangeValidator(value[0]) != true) {
        let desiredPwdLength = prompt(
          "How long do you want your password to be? Enter a number between 8 - 128"
        );
        value[0] = desiredPwdLength;
      }
    } else if (
      key.includes("alphabetUpper") ||
      key.includes("alphabetLower") ||
      key.includes("specialChar") ||
      key.includes("numbers")
    ) {
      while (characterValidator(value[0]) != true) {
        let userCharPrompt = prompt(
          "Do you want to use " + value[2] + " characters? Type y/n"
        );
        userSettingsUpdater(value, userCharPrompt);
      }
    } else {
      return;
    }
  }
}

// validates user entries for user character selection

function characterValidator(value) {
  while (
    userSettings.userFlagTrue.includes(value) ||
    userSettings.userFlagFalse.includes(value)
  ) {
    return true;
  }
  return false;
}

// validates user entries for password length choice

function rangeValidator(value) {
  while (
    value < userSettings.passwordRange[0] ||
    value > userSettings.passwordRange[1]
  ) {
    return false;
  }
  return true;
}

//updates userSettings character flags to true or false given user input

function userSettingsUpdater(value, userPrompt) {
  value[0] = userPrompt;
  if (userSettings.userFlagTrue.includes(value[0])) {
    value[1] = true;
  } else {
    value[1] = false;
  }
}

function characterOptionsConstructor() {
  let passwordCharacters = [];
  for (const [key, value] of Object.entries(userSettings)) {
    if (
      key.includes("alphabetUpper") ||
      key.includes("alphabetLower") ||
      key.includes("specialChar") ||
      key.includes("numbers")
    ) {
      if (value[1]) {
        passwordCharacters = passwordCharacters.concat(
          rangeAggregator(value[3])
        );
      }
    }
  }
  console.log(passwordCharacters);
}
