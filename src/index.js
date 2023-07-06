//  Calculate multiplication and division of two numbers (input from the user).

function multiply() {
  let num1 = document.querySelector(".num1").value;
  let num2 = document.querySelector(".num2").value;
  let result = document.querySelector(".result");
  result.innerHTML = num1 * num2;
}
function divide() {
	let num1 = document.querySelector(".num1").value;
	let num2 = document.querySelector(".num2").value;
	let result = document.querySelector(".result");
	result.innerHTML = num1 / num2;
  }
