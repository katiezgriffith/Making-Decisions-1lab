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
        console.log(tokens)
		console.log("Math stuff:", mathSymbol)

		if (mathSymbol == '+')
			 {console.log(num1 + num2);
		}
		if (mathSymbol == "-")
			 {console.log(num1 - num2);
		}
		if (mathSymbol == '*')
		     {console.log(num1 * num2);
		}
		if (mathSymbol == '/')
		     {console.log(num1 / num2);
		}


		reader.close()

});
