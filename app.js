// Questions PDF 26-30:

// Chapter 26 (Rounding Numbers)
// 1. 
var roundedNumber = Math.round(origNum);

// 2.
var roundNum = Math.ceil(origNum);

// 3.
roundNum = Math.floor(origNum);

// 4. 
var roundedResult = Math.round(origNum);

// 5. 
var roundedHalf = Math.round(0.5);

// Chapter 27 (Random Numbers)
// 1. 
var randomNum = Math.floor(Math.random() * 50) + 1;

// 2. 
var randomNumber = Math.random();

// 3. 
var diceRoll = Math.floor(Math.random() * 6) + 1;

// 4. 
var coinToss = Math.random() < 0.5 ? 'heads' : 'tails';

// Chapter 28, 29 (Converting Strings)
// 1.
// parseInt() function

// 2. 
var integer = parseInt("123");

// 3. 
// parseFloat() function

// 4. 
// Use isNaN() function to check if it's NaN after conversion.

// 5. 
// Using the String() function or concatenating with an empty string.

// 6. 
var strNumber = String(42);

// 7. 
// Yes, you can using parseInt(), but it will only extract the integer part.

// Chapter 30 (Controlling the length of decimals)
// 1. 
var newNum = num.toFixed(4);

// 2.
num = parseFloat(num.toFixed(2));

// 3. 
if (num.toFixed(2).length > 4) {

}

// 4. 
var bigNumber = 123.456789;
alert(bigNumber.toFixed(2));



// chapters 26-30.pdf (MATH METHODS):

// 1. 
var num = parseInt(prompt("Enter a positive integer:"));
document.write("a. Number: " + num + "<br>");
document.write("b. Round off value: " + Math.round(num) + "<br>");
document.write("c. Floor value: " + Math.floor(num) + "<br>");
document.write("d. Ceil value: " + Math.ceil(num) + "<br>");

// 2. 
var num = parseFloat(prompt("Enter a negative floating point number:"));
document.write("a. Number: " + num + "<br>");
document.write("b. Round off value: " + Math.round(num) + "<br>");
document.write("c. Floor value: " + Math.floor(num) + "<br>");
document.write("d. Ceil value: " + Math.ceil(num) + "<br>");

// 3.
var num = parseInt(prompt("Enter a number:"));
document.write("The absolute value of " + num + " is " + Math.abs(num) + "<br>");

// 4. 
var diceValue = Math.floor(Math.random() * 6) + 1;
document.write("The value of the dice is: " + diceValue + "<br>");

// 5.
var coinValue = Math.random() < 0.5 ? "Heads" : "Tails";
document.write("The value of the coin toss is: " + coinValue + "<br>");

// 6. 
var randomNumber = Math.floor(Math.random() * 100) + 1;
document.write("Random number between 1 and 100 is: " + randomNumber + "<br>");

// 7.
var weightInput = prompt("Enter your weight:");
var weight = parseFloat(weightInput);
document.write("Your weight is: " + weight + " kilograms<br>");

// 8. 
var secretNumber = Math.floor(Math.random() * 10) + 1;
var userGuess = parseInt(prompt("Guess the secret number between 1 and 10:"));
if (userGuess === secretNumber) {
    document.write("Congratulations! You guessed the secret number!<br>");
} else {
    document.write("Sorry, the secret number was: " + secretNumber + "<br>");
}
