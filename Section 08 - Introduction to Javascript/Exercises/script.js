var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var age = Number(prompt("What is your age?"));

console.log("Nice to meet you " + firstName + " " + lastName);
console.log("Are you sure you are only " + age + "?. You look older! ");

var days = (age*365)+((age-(age%4))/4)
console.log("You have been on the planet " + days + " days");

if(age < 0){
	console.log("Hey dude! You haven't been born yet! Age cannot be negative");
}

if (age === 21) {
 console.log("Happy 21st Birthday!");
}

if((age % 2) === 1){
	console.log("You are odd!");
}

if((age % Math.sqrt(age)) === 0){
	console.log("Perfect Square!");
}

if(age < 18){
	console.log("Sorry, you are not old enough to enter the venue");
}
else if(age < 21){
	console.log("You can enter, but you cannot drink");
}
else {
	console.log("Come on in. You can drink");
}