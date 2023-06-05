/**
 * Check if a number is Even or Odd
 * 
 * @param {*} n 
 * @returns true || false
 */

function evenOrOdd(n){
    return (n % 2 === 0) ? true : false;
}
export default evenOrOdd;


// Implementation || Example

let num = parseInt(window.prompt("Enter here value", 0));
console.log((evenOrOdd(num)) ? `${num} is Even` : `${num} is Odd`);

