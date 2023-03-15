var addBtn = document.getElementById("add");
var subtractBtn = document.getElementById("subtract");
var multiplyBtn = document.getElementById("multiply");
var divideBtn = document.getElementById("divide");
var modulusBtn = document.getElementById("modulus");
var resultEl = document.getElementById("result");

function clearResult() {
	resultEl.innerHTML = "Results will be displayed here.";
}

function displayResult(operator, result) {
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);

	switch(operator) {
		case '+':
			resultEl.innerHTML = "The sum of " + num1 + " and " + num2 + " is " + result + ".";
			break;
		case '-':
			resultEl.innerHTML = "The difference between " + num1 + " and " + num2 + " is " + result + ".";
			break;
		case '*':
			resultEl.innerHTML = "The product of " + num1 + " and " + num2 + " is " + result + ".";
			break;
		case '/':
			resultEl.innerHTML = "The quotient of " + num1 + " and " + num2 + " is " + result + ".";
			break;
		case '%':
			resultEl.innerHTML = "The remainder of " + num1 + " divided by " + num2 + " is " + result + ".";
			break;
		default:
			resultEl.innerHTML = "Results will be displayed here.";
	}
}

addBtn.addEventListener("click", function() {
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	var result = num1 + num2;
	clearResult();
	displayResult('+', result);
});

subtractBtn.addEventListener("click", function() {
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	var result = num1 - num2;
	clearResult();
	displayResult('-', result);
});

multiplyBtn.addEventListener("click", function() {
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	var result = num1 * num2;
	clearResult();
	displayResult('*', result);
});

divideBtn.addEventListener("click", function() {
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	var result = num1 / num2;
	clearResult();
	displayResult('/', result);
});

modulusBtn.addEventListener("click", function() {
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	var result = num1 % num2;
	clearResult();
	displayResult('%', result);
});