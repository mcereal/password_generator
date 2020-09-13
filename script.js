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

// var unicodeSymbolSet1 = [33, 48];
// var unicodeSymbolSet2 = [58, 65];
// var unicodeSymbolSet3 = [91, 97];
// var unicodeSymbolSet4 = [123, 127];
// var alphabetUpperSet = [65, 91];
// var alphabetLowerSet = [97, 123];
// var numberSet = [48, 58];

// var alphabetUpperCase = unicodeRetriever(alphabetUpperSet);
// var alphabetLowerCase = unicodeRetriever(alphabetLowerSet);
// var symbols = [];
// var numbers = unicodeRetriever(numberSet);

// var lowercaseSetting = true;
// var uppercaseSetting = false;
// var numberSetting = false;
// var symbolSetting = false;

// function randomNumber() {
//   return Math.floor(Math.random() * characterSet.length);
// }

// returns an array of characters to be used to fill out character sets

// function unicodeRetriever(unicodeSet) {
//   var character = [];
//   for (i = unicodeSet[0]; i < unicodeSet[1]; i++) {
//     character.push(String.fromCharCode(i));
//   }
//   return character;
// }

var unicodeCharacters = {
  unicodeSymbolSet: [
    [33, 48],
    [58, 65],
    [91, 97],
    [123, 127],
  ],
  alphabetUpperSet: [65, 91],
  alphabetLowerSet: [97, 123],
  numberSet: [48, 58],
};

function unicodeRetriever(unicodeSet) {
  var character = [];
  for (i = unicodeSet[0]; i < unicodeSet[1]; i++) {
    character.push(String.fromCharCode(i));
  }
  return character;
}

// unicodeCharacters.unicodeSymbolSet.forEach((el) => {
//   console.log(el);
// });

// for (let prop in unicodeCharacters) {
//   console.log(unicodeCharacters[prop]);
// }

var alphabetUpperCase = [];
var alphabetLowerCase = [];
var symbols = [];
var numbers = [];

function characterSettings(characterSets) {
  for (let key in characterSets) {
    var test = [];
    var test3 = test.concat(test2);
    console.log(test3);
    for (let value in characterSets[key]) {
      // console.log(characterSets[key][value]);
      var test2 = unicodeRetriever(characterSets[key][value]);
      // console.log(unicodeRetriever(characterSets[key][value]));
    }
  }
}

characterSettings(unicodeCharacters);
