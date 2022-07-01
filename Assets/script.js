// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)

// all possible password critera 
var pswrdCriteria = {
  length: 0,
  
  lCase: ["a","b","c","d","e","f","g","h","i","j","k","l",
  "m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  
  uCase:["A","B","C","D","E","F","G","H","I","J","K","L",
  "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],

  number:[0,1,2,3,4,5,6,7,8,9],

  special:["!","\"","#","$","%","&","\'","(",")","*","+",",",
  "-",".","/","\\",":",";","<",">","=","?","@","[","]","^","_","`","{","}","|","~"]

}

// function that creates password based on user input

var createPassword = function() {
  // empty string to hold password
  var final = ""
  // set user input to variables to use with conditionals
  var lowerCase = confirm("Do you want to use lower case letters?");
  var upperCase = confirm("Do you want to use upper case letters?");
  var numbers = confirm("Do you want to use numbers?");
  var specialChar = confirm("Do you want to use any special characters?");

}



// Write password to the #password input
var writePassword = function() {
  // call function to create password
  var password = createPassword();
  // asign the text area to a variable so it can be changed with the new password
  var passwordText = document.querySelector("#password");

  //update the textArea with the new password
  passwordText.value = password;
}
  
  generateBtn.addEventListener("click", writePassword);
  
  

  




