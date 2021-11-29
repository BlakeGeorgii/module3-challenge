// Assignment code here
var generatePassword = function(){
  var pass = "";
  var passLength = parseInt(window.prompt("Insert length of password."));
  var availableChars = "";

  //Adds lowercase characters to available characters if user agrees
  if(window.confirm("Would you like your password to have Lower Case characters?")){
    availableChars += "abcdefghijklmnopqrstuvwxyz";
  }
  //Adds uppercase characters to available characters if user agrees
  if(window.confirm("Would you like your password to have Upper Case characters?")){
    availableChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  //Adds numeric characters to available characters if user agrees
  if(window.confirm("Would you like your password to have Numeric characters?")){
    availableChars += "0123456789";
  }
  //Adds special characters to available characters if user agrees
  if(window.confirm("Would you like your password to have Special characters?")){
    availableChars += "\ \!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\]\^\_\`\{\|\}\~";
  }
  //Takes a random character from availableChars and adds it to pass for passLength
  for(var i = 0; i < passLength; i++){
    pass += availableChars.charAt(Math.random() * availableChars.length);
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
