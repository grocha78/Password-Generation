// Welcome greeting
window.alert("Welcome to Password Generator!");

// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!","@","#","$","%","^","&","*"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function dataPreferences(){
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
// Prompt user to confirm if they want to include lowercase characters
var charactersLower = confirm("Do you want to include lowercase letters?");
// Prompt user to confirm if they want to include upper case characters
var charactersUpper = confirm("Do you want to include uppercase letters?");
// Prompt user to confirm if they want to include number characters 
var charactersNum = confirm("Do you want to include numbers?");
// Prompt user to confirm if they want to include special characters
var charactersSpecial = confirm("Do you want to include special characters?");

var characterPref = {
  passLength: promptPassword,
  lowerCase: charactersLower,
  upperCase: charactersUpper,
  num: charactersNum,
  specialChar: charactersSpecial
}
return characterPref;
}

function generatePassword() {
  var userPref = dataPreferences();
  console.log(userPref, "This returns user's password preferences");
  if (characterPref.specialChar) {
  var randoSpec = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  }
  console.log(randoSpec);





}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
