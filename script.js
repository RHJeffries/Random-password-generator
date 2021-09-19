// Assignment Code
var generateBtn = document.querySelector("#generate");

// Criteria variables for password
var pwordLength;
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]

// Function to begin crtieria selection
var charSelect = function() { 
   var chars = window.prompt("Select number of character between 8 and 128");

if ((chars < 8) || (chars > 128)) {
        window.alert("Password needs to be between 8 and 128 characters")
        return charSelect;
}  
    
} 

// Function to select criteria
function criteria() {

    var answerLower = window.confirm("Do you want lower case letters included? OK - yes, Cancel - no");
    if (answerLower == true);
    else {
        var answerUpper = window.confirm("Do you want upper case letters included? OK - yes, Cancel - no");
    } if (answerUpper == true);
    else {
        var answerNumbers = window.confirm("Do you want numbers included? OK - yes, Cancel - no");
    } if (answerNumbers == true);
    else {
        var answerSpecial = window.confirm("Do you want special characters included? OK - yes, Cancel - no");
    } if (answerSpecial == true);

    else if ((answerLower == false) && (answerUpper == false) && (answerNumbers == false) && (answerSpecial == false))
    window.alert("Must choose one criteria of lower case, upper case, numbers or special characters")
    return answerLower;
}


  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

