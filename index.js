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