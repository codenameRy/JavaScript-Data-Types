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

//July 22, 2020 - Arrays

//Challenge 1 - Is array copied?
// What is this code going to show?

let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits.length ); // ?

//Challenge 2 - Array operations.

// Let’s try 5 array operations.

// Create an array styles with items “Jazz” and “Blues”.
// Append “Rock-n-Roll” to the end.
// Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array.
// The array in the process:

// Jazz, Blues
// Jazz, Blues, Rock-n-Roll
// Jazz, Classics, Rock-n-Roll
// Classics, Rock-n-Roll
// Rap, Reggae, Classics, Rock-n-Roll

//Solution

let styles = ["Jazz", "Blues"]

//Append "Rock-n-Roll" to the end with push
styles.push("Rock-n-Roll")
alert(styles)

//Replace value in the middle with "Classics"
let middle = Math.floor(styles.length / 2);
styles[middle] = "Classics";
alert(styles)

/// Strip (Shift) off the first value of the array and show it.
alert(styles.shift())
alert(styles)

// Prepend Rap and Reggae to the array.
styles.unshift("Rap", "Reggae")
alert(styles)

//Challenge 4 - Sum input numbers

// Write the function sumInput() that:

// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.
// P.S. A zero 0 is a valid number, please don’t stop the input on zero.

//Solution - While Loop, break, null, and For .. of
function sumInput() {

  let numbers = [];

  while (true) {

    let value = prompt("A number please?", 0);

    // should we cancel?
    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

alert( sumInput() );

// //Challenge 5 - A maximal subarray
// The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

// The task is: find the contiguous subarray of arr with the maximal sum of items.

// Write the function getMaxSubSum(arr) that will return that sum.

// For instance:

// getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
// getMaxSubSum([2, -1, 2, 3, -9]) == 6
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11
// getMaxSubSum([-2, -1, 1, 2]) == 3
// getMaxSubSum([100, -9, 2, -3, 5]) == 100
// getMaxSubSum([1, 2, 3]) == 6 (take all)

// If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:

// getMaxSubSum([-1, -2, -3]) = 0

//Solution 1 - Kadane's Approach with For Loop and Math.max
//The time complexity of above solution is **O(n)**
let allPositives = arr => arr.every(n => n > 0)
let allNegatives = arr => arr.every(n => n < 0)
let sum2 = arr => arr.reduce((curr_max, max_so_far) => curr_max + max_so_far, 0)

var maxSequence = function(arr){
  if(arr.length === 0 || allNegatives(arr)) return 0;
  if(allPositives(arr)) return sum2(arr);

  var curr_max = 0, max_so_far = 0;

  for(var i = 0; i < arr.length; i++){  
    curr_max = Math.max(0, curr_max + arr[i]);
    max_so_far = Math.max(curr_max, max_so_far);
  }
  return max_so_far;
}

console.log( maxSequence([-1, 2, 3, -9]) ) // 5
console.log( maxSequence([2, -1, 2, 3, -9]) ) // 6
console.log( maxSequence([-1, 2, 3, -9, 11]) ) // 11
console.log( maxSequence([-2, -1, 1, 2]) ) //3
console.log( maxSequence([100, -9, 2, -3, 5]) ) //100
console.log( maxSequence([1, 2, 3]) ) //6
console.log( maxSequence([-1, -2, -3]) ) //0


//Solution 2 - For.. of and Math.max
//The time complexity of above solution is **O(n)**

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // for each item of arr
    partialSum += item; // add it to partialSum
    maxSum = Math.max(maxSum, partialSum); // remember the maximum
    if (partialSum < 0) partialSum = 0; // zero if negative
  }

  return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0
