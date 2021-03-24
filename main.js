// One approach is to store our two numbers and one operation as strings so that 
// we can easily add characters as the user presses buttons



let firstNumber = '';
let operation = '';
let secondNumber = '';
let resultClear




// Calculates the result of the current expression if it is valid, then displays the result on the screen



function calcResult() {
  let a = Number(firstNumber);
  let b = Number(secondNumber);
  // to clear secondNumber
  secondNumber = ''
  
  if(operation === '+'){
    result = a + b;
  }
  else if(operation=== '-'){
    result = a - b;
  }
  else if(operation === 'x'){
    result = a * b;
  }
  else if (operation === '/'){
    result = a / b;
  }
  document.querySelector('#screen').innerText = result;
  firstNumber = result;
  operation = ''; 
}



// Handles when an operation button is pressed (+, -, /, *)


function handleAddition(){
  operation = '+';
  if (operation = '+'){
    updateScreen(operation)
  }
}
function handleSubtraction(){
  operation = '-';
  updateScreen(operation);
}
function handleDivision(){
  operation = '/';
  updateScreen(operation);
}
function handleMultiplication(){
  operation = 'x';
  updateScreen(operation);
}



// Handles when a number button is pressed

function handleNumberOne(){
  if (operation !== ''){
    secondNumber += '1';
    updateScreen();
  }
  else {
    firstNumber += '1'
    updateScreen()
  }
}
function handleNumberTwo(){
  if (operation !== ''){
    secondNumber += '2';
    updateScreen();
  }
  else {
    firstNumber += '2'
    updateScreen()
  }
}
function handleNumberThree(){
  if (operation !== ''){
    secondNumber += '3';
    updateScreen();
  }
  else {
    firstNumber += '3'
    updateScreen()
  }
}
function handleNumberFour(){
  if (operation !== ''){
    secondNumber += '4';
    updateScreen();
  }
  else {
    firstNumber += '4'
    updateScreen()
  }
}
function handleNumberFive(){
  if (operation !== ''){
    secondNumber += '5';
    updateScreen();
  }
  else {
    firstNumber += '5'
    updateScreen()
  }
}
function handleNumberSix(){
  if (operation !== ''){
    secondNumber += '6';
    updateScreen();
  }
  else {
    firstNumber += '6'
    updateScreen()
  }
}
function handleNumberSeven(){
  if (operation !== ''){
    secondNumber += '7';
    updateScreen();
  }
  else {
    firstNumber += '7'
    updateScreen()
  }
}
function handleNumberEight(){
  if (operation !== ''){
    secondNumber += '8';
    updateScreen();
  }
  else {
    firstNumber += '8'
    updateScreen()
  }
}
function handleNumberNine(){
  if (operation !== ''){
    secondNumber += '9';
    updateScreen();
  }
  else {
    firstNumber += '9'
    updateScreen()
  }
}
function handleNumberZero(){
  if (operation !== ''){
    secondNumber += '0';
    updateScreen();
  }
  else {
    firstNumber += '0'
    updateScreen()
  }
}
function handleDecimal(){
  if (operation !== ''){
    secondNumber += '.';
    updateScreen();
  }
  else {
    firstNumber += '.'
    updateScreen()
  }
}


// Clears the screen
function clearScreen() {
  document.querySelector('#screen').innerText = '';
  firstNumber = '';
  operation = '';
  secondNumber = '';
  result = '';

}



// Updates the screen based on `firstNumber`, `operation`, and `secondNumber`
function updateScreen() {
  document.querySelector('#screen').innerText = firstNumber + operation + secondNumber;
}




// TODO: write query selectors and add event listeners to the calculator's buttons



const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')
const zero = document.querySelector('#zero')
const add = document.querySelector('#add')
const subtract = document.querySelector('#subtract')
const multiply = document.querySelector('#multiply')
const divide = document.querySelector('#divide')
const decimal = document.querySelector('#decimal')
const clear = document.querySelector('#clear')
const equal = document.querySelector('#equal')

one.addEventListener('click', handleNumberOne);
two.addEventListener('click', handleNumberTwo);
three.addEventListener('click', handleNumberThree);
four.addEventListener('click', handleNumberFour);
five.addEventListener('click', handleNumberFive);
six.addEventListener('click', handleNumberSix);
seven.addEventListener('click', handleNumberSeven);
eight.addEventListener('click', handleNumberEight);
nine.addEventListener('click', handleNumberNine);
zero.addEventListener('click', handleNumberZero);
add.addEventListener('click', handleAddition);
subtract.addEventListener('click', handleSubtraction);
multiply.addEventListener('click', handleMultiplication);
divide.addEventListener('click', handleDivision);
decimal.addEventListener('click', handleDecimal);
clear.addEventListener('click', clearScreen);
equal.addEventListener('click', calcResult);


