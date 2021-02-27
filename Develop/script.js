// Assignment Code
//DOM Elements
const password = document.getElementById('password')
const generate = document.getElementById('generate')
const characterAmtRng = document.getElementById('characterAmtRng')
const characterAmtNum = document.getElementById('characterAmtNum')
const includeUpperElement = document.getElementById('includeUpper')
const includeLowerElement= document.getElementById('includeLower')
const includeSymElement = document.getElementById('includeSym')
const includeNumElement = document.getElementById('includeNum')


const UPPERCASE_CODES = ArrayLowtoHigh(65, 90)
const LOWERCASE_CODES = ArrayLowtoHigh(97, 122)
const NUMBER_CODES = ArrayLowtoHigh(48, 57)
const SYMBOL_CODES = ArrayLowtoHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)
  

var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword(includeLower, includeUpper, includeNum, includeSym) {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", e=> {e .preventDefault()
  const characterAmtNum = characterAmtNum.value
  const includeNum = includeNumElement.checked
  const includeSym = includeSymElement.checked
  const includeUpper = includeUpperElement.checked
  const includeLower = includeLowerElement.checked

  password.innertext = generatePassword(includeLower, includeUpper, includeSym, includeNum);
})
