// Assignment code here
var generatePassword = function(){
  var pass = "test";
  var passLength = window.prompt("Insert length of password.");
  var availableChars = "";

  //Adds lowercase characters to available characters if user agrees
  if(window.confirm("Would you like your password to have Lower Case characters?")){
    availableChars += "abcdefghijklmnopqrstuvwxyz";
  }
  //Adds uppercase characters to available characters if user agrees
  if(window.confirm("Would you like your password to have Upper Case characters?")){
    availableChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  
  if(window.confirm("Would you like your password to have Numeric characters?")){
    availableChars += "0123456789";
  }
  
  if(window.confirm("Would you like your password to have Special characters?")){
    availableChars += "\ \!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\]\^\_\`\{\|\}\~";
  }

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
