// Assignment Code
var generateBtn = document.querySelector("#generate");

// Criteria variables for password

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]

// Function to begin crtieria selection

    


function generatePassword () {
   
var pwordLength = window.prompt("Select number of character between 8 and 128");
if (( pwordLength < 8) || ( pwordLength > 128)){
    window.alert("Must be between 8 and 128 characters")
    
        return pwordLength;
}
    

var answers = {

answerLower: answerLower = window.confirm("Do you want lower case letters included? OK - yes, Cancel - no"),
               
answerUpper: answerUpper = window.confirm("Do you want upper case letters included? OK - yes, Cancel - no"),
             
answerNumbers: answerNumbers = window.confirm("Do you want numbers included? OK - yes, Cancel - no"),
             
answerSpecial: answerSpecial = window.confirm("Do you want special characters included? OK - yes, Cancel - no")
    } 
    
    if (( answerLower == true ) || (answerUpper == true ) || ( answerNumbers == true ) || ( answerSpecial == true ));

    else 
    ((answerLower == false) && (answerUpper == false) && (answerNumbers == false) && (answerSpecial == false))
    window.alert("Must choose one criteria of lower case, upper case, numbers or special characters"); 



}



  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

