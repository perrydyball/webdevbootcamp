//define colors and populate as an array via a function
var colors = generateRandomColors(6);

// select all 6 squares by class
var squares = document.querySelectorAll(".square");

//pick an random color from array by calling function
var pickedColor = pickColor();

// select the span colorDisplay by id
var colorDisplay = document.getElementById("colorDisplay");

// select the span message by id
var messageDisplay = document.querySelector("#message");

//change the text in the span to be the picked color
colorDisplay.textContent = pickedColor;

//for the 6 squares...
for (var i = 0; i < squares.length; i++) {
  //add initial colours to sqaures
  squares[i].style.backgroundColor = colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click", function(){
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    //compare color to picked color
    if (clickedColor === pickedColor) {
      //set the span message text
      messageDisplay.textContent = "Correct!";
      changeColors(pickedColor);
    } else {
      //set the current square background color to same as body background
      this.style.backgroundColor = "#232323";
      //set the span message text
      messageDisplay.textContent = "Try Again!";
    }
  })
}

//function to change colors when correct guess is made
function changeColors(color) {
  // select the h1
  var h1Display = document.querySelector("h1");
  h1Display.style.backgroundColor = color;
  for (var j=0; j < squares.length; j++){
    squares[j].style.backgroundColor = color;
  }
}

//function to returm one of the 6 colors (squares)
function pickColor() {
  //create a random rumber [0..5]
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

//function to returm an array of colors
function generateRandomColors(num) {
  //define empty array
  var arr = [];
  //populate the array
  for (var j=0; j < num; j++){
    //get random color
    arr.push(randomColor());
  }
  return arr;
}

//generate a rgb string
function randomColor(){
  //generate a random number 0..255 for r g b channels
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  //"rgb(255, 0, 0)"
  var rgbStr = "rgb(" + r + ", " + g + ", " + b + ")";
  return rgbStr;
}
