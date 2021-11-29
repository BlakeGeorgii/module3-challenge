// Assignment code here
var generatePassword = function(){
  var pass = "test";

  var passLength = window.prompt("Insert length of password.");

  var isLower = window.confirm("Would you like your password to have Lower Case characters?");

  var isUpper = window.confirm("Would you like your password to have Upper Case characters?");

  var isNumeric = window.confirm("Would you like your password to have Numeric characters?");
  
  var isSpecial = window.confirm("Would you like your password to have Special characters?");
  
  return pass;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
