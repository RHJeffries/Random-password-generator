// Assignment Code
var generateBtn = document.querySelector("#generate");

// Criteria variables for password

var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]

// Function to begin crtieria selection

var generatePassword = function() { 
   var pwordLength = window.prompt("Select number of character between 8 and 128");
    if (( pwordLength < 8) || ( pwordLength > 128)) {
        window.alert("Must be between 8 and 128 characters");
        return ;
    }else
    
    var answerLower = window.confirm("Do you want lower case letters included? OK - yes, Cancel - no");
    if (answerLower == true);


    else if (answerLower == false)
    window.alert("Must choose one criteria of lower case, upper case, numbers or special characters")
 ;
}



// Function to create password


  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

