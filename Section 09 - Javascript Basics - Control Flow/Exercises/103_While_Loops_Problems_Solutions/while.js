var count = -10

while (count < 20){
	console.log(count);
	count++;
}

count = 10

while (count <= 40){
	if (count % 2 === 0) {
		console.log(count);
	}
	count++;
}

count = 300

while (count <= 333){
	if (count % 2 === 1) {
		console.log(count);
	}
	count++;
}

count = 5

while (count <= 50){
	if ((count % 5 === 0) && (count % 3 === 0)) {
		console.log(count);
	}
	count++;
}