// Assignment Code
const generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", main);

// User character, length, entry settings, and ranges of Unicode characters in decimal
let passwordSettings = {
  pwdLength: [0],
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
  voidEntry: false,
  reset: false,
};

// App entry point
function main() {
  if (passwordSettings.reset === false) {
    userPasswordLength();
    userDesiredCharacters();
    voidEntryCheck();
    writePassword();
    // passwordSettings.reset = false;
  } else {
    reset();
    userDesiredCharacters();
    writePassword();
  }
}

// Returns an array of unicode characters given a corresponding range in decimal
function unicodeRetriever(decimalRange) {
  let character = [];
  for (i = decimalRange[0]; i < decimalRange[1]; i++) {
    character.push(String.fromCharCode(i));
  }
  return character;
}

// Parses key value pairs of unicode decimal ranges stored in passwordSettings
function rangeAggregator(characterRangeKey) {
  length = characterRangeKey.length;
  let characterArray = [];
  for (let i = length; i--; ) {
    characterArray = characterArray.concat(
      unicodeRetriever(characterRangeKey[i])
    );
  }
  return characterArray;
}

// Prompts user for password length selection
function userPasswordLength() {
  for (const [key, value] of Object.entries(passwordSettings)) {
    if (key.includes("pwdLength")) {
      while (numberValidator(value[0]) != true) {
        let desiredPwdLength = prompt(
          "How long do you want your password to be? Enter a number between " +
            passwordSettings.passwordRange[0] +
            " - " +
            passwordSettings.passwordRange[1]
        );
        value[0] = desiredPwdLength;
      }
    }
  }
}

// Prompts user for lowercase, uppercase, special characters, or numbers selection
function userDesiredCharacters() {
  for (const [key, value] of Object.entries(passwordSettings)) {
    if (
      key.includes("alphabetUpper") ||
      key.includes("alphabetLower") ||
      key.includes("specialChar") ||
      key.includes("numbers")
    ) {
      while (characterValidator(value[0]) != true) {
        let userCharPrompt = prompt(
          "Do you want to use " + value[2] + " characters? Type y/n"
        );
        passwordSettingsUpdater(value, userCharPrompt);
      }
    }
  }
}

// Validates user entries for user character selection
function characterValidator(value) {
  while (
    passwordSettings.userFlagTrue.includes(value) ||
    passwordSettings.userFlagFalse.includes(value)
  ) {
    return true;
  }
  return false;
}

// Validates user entries for password length choice
function numberValidator(value) {
  if (
    isNaN(value) ||
    value < passwordSettings.passwordRange[0] ||
    value > passwordSettings.passwordRange[1]
  ) {
    return false;
  } else {
    return true;
  }
}

// Updates passwordSettings character flags to true or false given user input
function passwordSettingsUpdater(value, userPrompt) {
  value[0] = userPrompt;
  if (passwordSettings.userFlagTrue.includes(value[0])) {
    value[1] = true;
  } else {
    value[1] = false;
  }
}

// Builds an array of all possible password characters given user's choice
function characterOptionsConstructor() {
  let passwordCharacters = [];
  for (const [key, value] of Object.entries(passwordSettings)) {
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
  return passwordCharacters;
}

// Generates a random number in password length range
function randomNumber(arrayLength) {
  let min = 0;
  let max = arrayLength.length;
  return Math.floor(Math.random() * (max - min)) + min;
}

//checks to make sure user selected at least one character option
function voidEntryCheck() {
  let charOptions = characterOptionsConstructor();
  while (charOptions.length === 0) {
    let resetConfirmation = confirm(
      "You must select at least one character option"
    );
    reset();
    passwordSettings.reset = true;
    main();
    charOptions = characterOptionsConstructor();
  }
}

// Returns a string that is the user's password
function generatePassword() {
  let charOptions = characterOptionsConstructor();
  let password = "";
  for (i = 0; i < passwordSettings.pwdLength[0]; i++) {
    password = password.concat(charOptions[randomNumber(charOptions)]);
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Asks the user if they want to reset their selections and then resets if true
function reset() {
  for (const [key, value] of Object.entries(passwordSettings)) {
    if (
      key.includes("alphabetUpper") ||
      key.includes("alphabetLower") ||
      key.includes("specialChar") ||
      key.includes("numbers")
    ) {
      value[0] = null;
      value[1] = false;
    }
  }
}
