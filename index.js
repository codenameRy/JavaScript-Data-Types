//Numbers

let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes

alert( 7.3e9 );  // 7.3 billions (7,300,000,000)

let num2 = 255;

alert( num2.toString(16) );  // ff
alert( num2.toString(2) );   // 11111111
alert( num2.toString(36) );   // 11111111

//Challenge 1 - Sum numbers from the visitor

// Create a script that prompts the visitor to enter two numbers and then shows their sum.

//Solution 

function sum(arr) {
   return arr.reduce((a, b) => a + b)
}
let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");

alert(sum([a,b]))

//Challenge 2 - Why 6.35.toFixed(1) == 6.3?

//round 6.35 the right way?

//Solution


alert( Math.round(6.35 * 10) / 10);

//Challenge 3 - Repeat until the input is a number
// Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.

// The resulting value must be returned as a number.

// The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null.

//Solution
function readNumber() {
  let num;

  do {
    num = prompt("Enter a number please?", 0);
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
}

alert(`Read: ${readNumber()}`);

//Challenge 4 - A random number from min to max

//Write the function random(min, max) to generate a random floating-point number from min to max (not including max). Can include min

//Solution

function random(min, max) {
  return Math.random() * (max - min) + min;
}

alert( random(1, 5) );
alert( random(1, 10) );
alert( random(1, 6) );

//Challenge 5 - A random integer from min to max

//Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.

// Any number from the interval min..max must appear with the same probability.

//Solution with Decimals
function randomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.random() * (max - min);
}

alert( randomInteger(1, 5) );
alert( randomInteger(1, 10) );
alert( randomInteger(1, 6) );

//Solution with Integers, no Decimals

function randomInteger2(min, max) {
  // here rand is from min to (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

alert( randomInteger2(1, 5) );
alert( randomInteger2(1, 10) );
alert( randomInteger2(1, 6) );

//July 21, 2020 - Strings

//Challenge 1 - Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:

// ucFirst("john") == "John";

//Solution 1
function ucFirst(str){
  return str[0].toUpperCase() + str.slice(1)
}

console.log( ucFirst('house') )

//Solution 2
function ucFirst2(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

console.log( ucFirst("peace") ); // Peace

//Challenge 2 - Check for Spam

/*Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

The function must be case-insensitive:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false*/

//Solution
function checkSpam(str) {
  let lowerStr = str.toLowerCase()
  return lowerStr.includes("viagra") || lowerStr.includes("xxx")
}

console.log( checkSpam('buy ViAgRA now') ) 
console.log( checkSpam('free xxxxx') ) 
console.log(checkSpam("innocent rabbit") ) 

// Truncate the text
// Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

// The result of the function should be the truncated (if needed) string.

// For instance:

// truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"

// truncate("Hi everyone!", 20) = "Hi everyone!"


//Solution 1 - If Statement
function truncate(str, maxlength) {
  let strLength = str.length;
  if ( strLength > maxlength ) {
    return str.slice(0, maxlength - 1) + '…';
  }
  return str
}

console.log( truncate("Hi everyone!", 20) )
console.log( truncate("What I'd like to tell on this topic is:", 20) )

//Solution 2 - Ternary Operator
function truncate2(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}

console.log( truncate2("Code all day and night", 16) )
console.log( truncate2("Fly on a spaceship to outer space", 20) )

//Challenge 4 - Extract the money

// We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.

// Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.

// The example:

// alert( extractCurrencyValue('$120') === 120 ); // true

function extractCurrencyValue(str) {
  return +str.slice(1)
}

console.log( extractCurrencyValue('$120') )