// Assignment Code
var generateBtn = document.querySelector("#generate");

// all possible password critera 
var pswrdCriteria = {
  
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
  // set variable to password length so user can input
  var passwordLength = 0
    // force user to pick length between 8 and 124
    while (passwordLength < 8 || passwordLength > 124) {
      passwordLength = prompt("How many characters would you like your password to have? (8-124).");
    }
    // prompt user on what character to include, validate their answer
    var lowerCase = confirm("Would you like your password to include lower case letters?");
    if (lowerCase) {
      alert("Lower case letters included.");
    }
    else {
      alert("Excluded")
    }
    var upperCase = confirm("Would you like your password to include upper case letters?");
    if (upperCase) {
      alert("Upper case letters included.");
    }
    else {
      alert("Excluded")
    }
    var numbers = confirm("Would you like your password to include numbers?");
    if (numbers) {
      alert("Numbers included.");
    }
    else {
      alert("Excluded")
    }
    var special = confirm("Would you like your password to include special characters?");
    if (special) {
      alert("Special characters included.");
    }
    else {
      alert("Excluded")
    }
    
    // while loop that takes random character of each specific group while password is less than request length
    while (final.length < passwordLength) {
      
      if (lowerCase) {
        final += pswrdCriteria.lCase[Math.floor(Math.random() * 26)];
      }
      if (upperCase && final.length <passwordLength) {
        final += pswrdCriteria.uCase[Math.floor(Math.random() * 26)];
      }
      if (numbers && final.length <passwordLength) {
        final += pswrdCriteria.number[Math.floor(Math.random() * 10)];
      }
      if (special && final.length <passwordLength) {
        final += pswrdCriteria.special[Math.floor(Math.random() * 32)];
      }
    }
    return final;
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
  
  

  




