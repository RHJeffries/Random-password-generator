// Assignment Code
var generateBtn = document.querySelector("#generate");

// Criteria variables for password

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];

// Function to generate password
function generatePassword() {

// Password variables, to be filled by selections
  var availableChars = [];
  var pwordResult = "";

// Variable to determine password length, validate selection between 8 and 128, and is a number entered
  var pwordLength = window.prompt("Select number of character between 8 and 128");
  console.log(pwordLength);
  if ((pwordLength < 8) || (pwordLength > 128) || isNaN(pwordLength)) {
    window.alert("Must be between 8 and 128 characters");
    return;
  }

// Criteria to determine make up of password characters
  var answerLower = window.confirm("Do you want lower case letters included? OK - yes, Cancel - no");
  console.log(answerLower);
  var answerUpper = window.confirm("Do you want upper case letters included? OK - yes, Cancel - no");
  console.log(answerUpper);
  var answerNumbers = window.confirm("Do you want numbers included? OK - yes, Cancel - no");
  console.log(answerNumbers);
  var answerSpecial = window.confirm("Do you want special characters included? OK - yes, Cancel - no");
  console.log(answerSpecial);
  if ((answerLower == true) || (answerUpper == true) || (answerNumbers == true) || (answerSpecial == true)) {
    if (answerLower) {
      availableChars = availableChars.concat(lower)
    }
    if (answerUpper) {
      availableChars = availableChars.concat(upper)
    }
    if (answerNumbers) {
      availableChars = availableChars.concat(numbers)
    }
    if (answerSpecial) {
      availableChars = availableChars.concat(special)
    }

  }
  else {
    window.alert("Must choose one criteria of lower case, upper case, numbers or special characters");
    return;
  }

// For statement to produce a random string from the password length and criteria
  for (var i = 0; i < pwordLength; i++) {
    pwordResult += availableChars[Math.floor(Math.random() * availableChars.length)];
  }
  return pwordResult;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

