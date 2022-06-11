// Welcome greeting
window.alert("Welcome to Password Generator!");

// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = lowerCase.toUpperCase();
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!","@","#","$","%","^","&","*"]
console.log(upperCase)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
// Prompt user to choose password details
var promptPassword = prompt("How many characters do you want in your password?");  
if (promptPassword <8) {
  alert("Password needs to be between 8 and 128 characters!");
  return;
}
if (promptPassword >128) {
  alert("Password needs to be between 8 and 128 characters!");
  return;
}
var charactersLower = confirm("Do you want to include lowercase letters?");
var charactersUpper = confirm("Do you want to include uppercase letters?");
var charactersNum = confirm("Do you want to include numbers?");
var charactersSpecial = confirm("Do you want to include special characters?");
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
