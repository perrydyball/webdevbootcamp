//create secretNumber
var secretNumber = 4;

//ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

if(guess === secretNumber) {
		alert("YOU GOT IT RIGHT!");
	}
else {	
	while (guess !== secretNumber) {
		//check if guess is higher
		if(guess > secretNumber){
			alert("Too high.  Guess again!");
		}

		else {
			alert("Too low.  Guess again!");
		}
		stringGuess = prompt("Guess a number");
		guess = Number(stringGuess);
	}
	alert("YOU GOT IT RIGHT!");
}
