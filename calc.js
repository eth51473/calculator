const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);
	console.log('math symbol', mathSymbol)
	if (mathSymbol == '+'){
		console.log(num1 + num2)
	}
	if (mathSymbol == '-'){
		console.log(num1 - num2)
	}
	if (mathSymbol == '*'){
		console.log(num1 * num2)
	}
	if (mathSymbol == '/'){
		console.log(num1 / num2)
	}
	if (mathSymbol == 'sqrt'){
		console.log("the square root of your two numbers added together is: " + Math.sqrt(num1 + num2))
	}
	if (mathSymbol == '^2'){
		console.log("the square of your two numbers added together is: "+ Math.pow((num1 + num2), 2))
	}
	if (mathSymbol == '^3'){
		console.log("the cube of your two numbers added together is: "+ Math.pow((num1 + num2), 3))
	}
	if (mathSymbol == 'pwr'){
		console.log(`${num1} to the power of ${num2} is : `+ Math.pow(num1, num2))
	}
	if (mathSymbol == 'mod'){
		console.log(num1 % num2)
	}
	

	// This line closes the connection to the command line interface.
	reader.close()
	});
//Test Commit