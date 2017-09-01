
console.log("All numbers between -10 and 19");
for (var i = -10; i <20; i++) {
	console.log(i);
};

console.log("All even numbers between 10 and 40");
for (var i = 10; i <=40; i+=2) {
	console.log(i);
};

console.log("All odd numbers between 300 and 333");
for (var i = 300; i <=333; i++) {
	if (i % 2 === 1) {
		console.log(i);
	}
};

console.log("All numbers between 5 and 50 divisible by 5 and 3");
for (var i = 5; i <=50; i++) {
	if ((i % 5 === 0) && (i % 3 === 0)) {
		console.log(i);
	}
};

function isEven(i) {
	if (i % 2 === 0) {
		return true;
	}
	return false
}

function isEvenv2(i) {
	return i % 2 === 0;
}

function factorial(num) {
	var fact = 1;
	for (var i = 2; i <=num ; i++) {
		fact *= i; //fact = fact * i;
	};
	return fact;
}

function kebabToSnake(str) {
	return str.replace(/-/g,"_");
}