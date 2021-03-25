// My version of Sensi's approach (Alex Crist)       

// One approach is to store our two numbers and one operation as strings so that 
// we can easily add characters as the user presses buttons



let firstNumber = '';
let secondNumber = '';
let operation = '';





// Updates the screen based on `firstNumber`, `operation`, and `secondNumber`
function updateScreen() {
  document.querySelector('#screen').innerText = firstNumber +' '+ operation +' '+ secondNumber;
}






// Query selectors that grab the beautiful buttons in our calculator

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





// Functions for each number button and the decimal button.(0-9)

function handleNumberOne(){
  //if statement to ensure the second number considered 
  //for evaluation can be updated for calculation
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
  result = ''
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
  result = ''
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
  result = ''
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
  result = ''
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
  result = ''
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
  result = ''
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
  result = ''
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
  result = ''
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
  result = ''
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

// Functions for the operation buttons(+, -, /, *)


function handleAddition(){
  
  if (result !== ''){
    firstNumber = result;
    operation = '+';
    updateScreen(operation);
  }
  else if(firstNumber !== ''){
    operation = '+';
    updateScreen(operation);
  }
}

function handleSubtraction(){
  if (result !== ''){
    firstNumber = result;
    operation = '-';
    updateScreen(operation);
  }
  else if(firstNumber !== ''){
    operation = '-';
    updateScreen(operation);
  }
}

function handleDivision(){
  if (result !== ''){
    firstNumber = result;
    operation = '/';
    updateScreen(operation);
  }
  else if(firstNumber !== ''){
    operation = '/';
    updateScreen(operation);
  }
}
function handleMultiplication(){
  if (result !== ''){
    firstNumber = result;
    operation = 'x';
    updateScreen(operation);
  }
  else if(firstNumber !== ''){
    operation = 'x';
    updateScreen(operation);
  }
}

// Function for the clear button
function clearScreen() {
  document.querySelector('#screen').innerText = '';
  firstNumber = '';
  operation = '';
  secondNumber = '';
  result = '';
  
}

//Event Listeners that call the functions
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



// Function that calculates the expression, then displays the result on the screen

function calcResult() {
  let a = Number(firstNumber);
  let b = Number(secondNumber);
  
  // CLEARS SECOND NUMBER VARIABLE
  secondNumber = ''
  
  if(operation === '+'){
    result = a + b;
  }
  else if(operation === '-'){
    result = a - b;
  }
  else if(operation === 'x'){
    result = a * b;
  }
  else if (operation === '/'){
    result = a / b;
  }
  
  document.querySelector('#screen').innerText = result;
  
  
  //why did I do this?
  firstNumber = '';
  
  //CLEARS THE OPERATION VARIABLE
  operation = ''; 
  
  if (document.querySelectorAll('.buttons').clicked === true){
    firstNumber = '';
  }
}





















