// Assignment Code
var generateBtn = document.querySelector("#generate");

// add listner to generate button
// once clicked, display series of window prompts to determine password specifications
// create function to run prompts to user
// store each character information in it's own array
// start prompts with password length
// based off which criteria is chosen by the user, 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
