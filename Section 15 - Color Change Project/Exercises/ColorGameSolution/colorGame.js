//######################################################
//MAIN LOGIC
//######################################################

//define selectors
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1Display = document.querySelector("h1");
var resetBtn = document.querySelector("#resetBtn");
var modeBtns = document.querySelectorAll(".mode");

//define processing variables
var numSquares = 6;
var colors = [];
var pickedColor;

//initialise the game
init();

//******************************************************
//function to initialise the game
//******************************************************
function init() {
  setupResetBtn();
  setupModeBtns();
  setupSquares();
  resetGame();
}

//******************************************************
//function to setup reset button listener
//******************************************************
function setupResetBtn(){
  resetBtn.addEventListener("click", function() {
    resetGame();
  })
}

//******************************************************
//function to setup mode buttons listener
//******************************************************
function setupModeBtns(){
  for (var i = 0; i < modeBtns.length; i++){
    //add click listeners to the mode buttons
    modeBtns[i].addEventListener("click", function() {
      //ensure all mode buttons are unselected
      for (i = 0; i < modeBtns.length; i++) {
        modeBtns[i].classList.remove("selected");
      }
      //select the mode button that has been clicked
      this.classList.add("selected");
      //ternary operator - if then else
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      //reset the game
      resetGame();
    })
  }
}

//******************************************************
//function to setup squares listener
//******************************************************
function setupSquares(){
  for (var i = 0; i < squares.length; i++) {
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
      //grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      //compare color to picked color
      if (clickedColor === pickedColor) {
        //set the span message text
        messageDisplay.textContent = "Correct!";
        //set the reset button text
        resetBtn.textContent = "Play Again?";
        //change all squares and h1 to picked color
        changeColors(pickedColor);
      } else {
        //set the current square background color to same as body background
        //note - using this.style.display = "none" shifts the squares (like removing a slot in an array)
        this.style.backgroundColor = "#232323";
        //set the span message text
        messageDisplay.textContent = "Try Again!";
      }
    })
  }
}

//******************************************************
//function to reset the game
//******************************************************
function resetGame(){
  //generate new colors
  colors = generateRandomColors(numSquares);
  //pick a new color from array
  pickedColor = pickColor();
  //change the text in the span to be the picked color
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    //if colors[i] is not undefined
    if (colors[i]) {
      //add initial colours to squares and make sure they are visible
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      //hide the square
      squares[i].style.display = "none"
    }
  }
  //reset h1 background
  h1Display.style.backgroundColor = "steelblue";
  //remove message
  messageDisplay.textContent = "";
  //reset the reset button text
  resetBtn.textContent = "New Colors";
}
//******************************************************
//function to returm an array of colors
//******************************************************
function generateRandomColors(num) {
  //define empty array
  var arr = [];
  //populate the array
  for (var j=0; j < num; j++){
    //get random color and add entry at end of array
    arr.push(randomColor());
  }
  return arr;
}

//******************************************************
//function to generate a rgb string
//******************************************************
function randomColor(){
  //generate a random number 0..255 for r g b channels
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  //"rgb(255, 0, 0)"
  var rgbStr = "rgb(" + r + ", " + g + ", " + b + ")";
  return rgbStr;
}

//******************************************************
//function to returm one of the colors (squares)
//******************************************************
function pickColor() {
  //create a random rumber [0..length of colors array]
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

//******************************************************
//function to change colors when correct guess is made
//******************************************************
function changeColors(color) {
  h1Display.style.backgroundColor = color;
  for (var j=0; j < squares.length; j++){
    squares[j].style.backgroundColor = color;
  }
}
