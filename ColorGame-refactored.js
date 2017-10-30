var numsquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButtton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i=0; i<modeButton.length; i++){
		modeButton[i].addEventListener("click", function(){
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "EASY" ? numsquares = 3: numsquares=6;
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i<squares.length; i++){
		//add click listeners to the squares
		squares[i].addEventListener("click", function(){
			// grab color of clicked square
			var clickedColor = this.style.backgroundColor
			//compare color to picked color
			
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButtton.textContent = "Play Again";
			}else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		})
	}
}

function reset(){

	//generate all new colors
	colors = generateRandomColors(numsquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display
	colorDisplay.textContent = pickedColor;
	resetButtton.textContent = "New Colors"
	//change colors of squares
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
		
	}
	//change h1 background color to background
	h1.style.backgroundColor = "steelblue";
	//change display message to empty
	messageDisplay.textContent = "";

}

resetButtton.addEventListener("click", function(){
	reset();
})

function changeColors(color){
	//loop through all squares
	for(var i=0 ; i<squares.length; i++ ){
		//change colors of squares to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i=0; i<num; i++){
		//get random color and push into array
		arr.push(randomColor());

	}
	//return that array

	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255 
	var r = Math.floor(Math.random()*256);
	//pick a "green" from 0 - 255 
	var g = Math.floor(Math.random()*256);
	//pick a "blue" from 0 - 255 
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r +", " + g + ", " + b + ")";
}