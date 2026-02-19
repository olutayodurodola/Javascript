var firstNumber = Number(prompt("Enter first Number: "));
var operation = Number(prompt("Enter the operation you want to perform: 1 for Add, 2 for Subtract, 3 for Multiply, 4 for Divide "));
var SecondNumber = Number(prompt("Enter Second Number: "));
var sum = 0;
var subtract = 0;
var multiply = 0;
var divide = 0;


if (operation == 1)
{
	sum = firstNumber + SecondNumber;
	alert ("The result of addition is " + sum);
} 
else if (operation == 2)
{
	subtract = firstNumber - SecondNumber;
	alert ("The result of Subtraction is " + subtract);
}
else if (operation == 3)
{
	multiply = firstNumber * SecondNumber;
	alert ("The result of Multiplication is " + multiply);
}
else if (operation == 4)
{
	divide = firstNumber / SecondNumber;
	alert ("The result of Division is " + divide);
}