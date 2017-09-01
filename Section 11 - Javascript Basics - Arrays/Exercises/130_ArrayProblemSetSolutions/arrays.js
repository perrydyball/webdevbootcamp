//printReverse

function printReverse(array) {
	for (var i = array.length-1; i !== 0; i--) {
		console.log(array[i]);
	}
}

printReverse([1,2,3,4]);
printReverse(["a", "b", "c", "d"]);


//isUniform

function isUniform(array) {
	var first = array[0];
	for (var i = 1; i < array.length; i++) {
		if (first !== array[i]) {
			return false;
		}
	}
	return true;
}

isUniform([1,1,1,1]);
isUniform([2,1,1,1]);
isUniform(["a", "b", "c", "d"]);
isUniform(["a", "a", "a", "a"]);

//isUniform2

function isUniform2(array) {
	var first = array[0];
	var state = true;
	array.forEach(function(value){
		if (first !== value) {
			state = false;
			return;
		}
  	});
	return state;
}

isUniform2([1,1,1,1]);
isUniform2([2,1,1,1]);
isUniform2(["a", "b", "c", "d"]);
isUniform2(["a", "a", "a", "a"]);

//sumArray

function sumArray(array) {
	var total = 0;
	array.forEach(function(value){
		total += value;
  	});
	console.log(total);
}

sumArray([1,2,3]);
sumArray([10,3,10,4]);
sumArray([-5,100]);

//max

function max(array) {
	var max = 0;
	array.forEach(function(value){
		if (value > max) {
			max = value;
		}
  	});
	console.log(max);
}

max([1,2,3]);
max([10,3,10,4]);
max([-5,100]);

