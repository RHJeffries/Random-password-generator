// Assignment Code
var generateBtn = document.querySelector("#generate");

// Criteria variables for password

var lower = ["abcdefghijklmnopqrstuvwxyz"]
var upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var numbers = ["0123456789"]
var special = ["!@#$%^&*()+-.`~|<>=-_"]

// Function to begin crtieria selection

var generatePassword = function() { 
   var pwordLength = window.prompt("Select number of character between 8 and 128");
    if (( pwordLength < 8) || ( pwordLength > 128)) {
        window.alert("Must be between 8 and 128 characters");
        return ;
    }
    
    var answerLower = window.confirm("Do you want lower case letters included? OK - yes, Cancel - no");
     
    var answerUpper = window.confirm("Do you want upper case letters included? OK - yes, Cancel - no");

    var answerNumbers = window.confirm("Do you want numbers included? OK - yes, Cancel - no");

    var answerSpecial = window.confirm("Do you want special characters included? OK - yes, Cancel - no");
      if 
        ((answerLower == true) || (answerUpper == true) || (answerNumbers == true) || (answerSpecial == true));
      

    else {
        ((answerLower == false) && (answerUpper == false) && (answerNumbers == false) && (answerSpecial == false))
    window.alert("Must choose one criteria of lower case, upper case, numbers or special characters");
    }
    return ;
}





// Function to create password

function password() {

  var pwordOptions = criteria;
  var pwordCombination = [];
  var pwordResult = "";

  if (pwordOptions.answerLower) {
      for (var i of lower)
      pwordCombination.push(i);
  }

  for (var i = 0; i < pwordOptions.length; i++) {
    pwordResult += pwordCombo[Math.floor(Math.random() * pwordCombo.length)];
    
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

