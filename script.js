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

var alphabetUpperCase = [];
var alphabetLowerCase = [];

for (i = 65; i < 91; i++) {
  var letter = String.fromCharCode(i);
  alphabetUpperCase.push(letter);
  alphabetLowerCase.push(letter.toLowerCase());
}
console.log(alphabetUpperCase);
console.log(alphabetLowerCase);
