// Justin and Virgi checks for Git and contributors

console.log("im here");
console.log('Justin Is here');
console.log('virgi is here');

// --G var
var draw = true;
var colorArray = ['red', 'blue', 'green', 'black'];
var color = document.getElementsByClassName('colorTable');
//var currentColor = event.target.style.backgroundColor;

// step one - Create the grid --- Can bind click function built into for loop
function drawGrid(width, height, attributename, attribute){
	var MainTableWrapper = document.createElement('div');
	MainTableWrapper.addEventListener('mousedown', function(event){
		draw = true;

	});
		MainTableWrapper.addEventListener('mouseup', function(event){
		draw = false;

	});

	MainTableWrapper.setAttribute('id', 'MainTableWrapper');


	for(var i = 1; i< height; i++){
		var newTableCol = document.createElement('div');
		newTableCol.setAttribute('data', i );
		newTableCol.setAttribute('class', 'parentDiv');
		MainTableWrapper.appendChild(newTableCol);

		 for(var j = 1; j < width; j++){
		 	var newTableRow = document.createElement('div');
	 		newTableRow.setAttribute('data', j);
	 		newTableRow.setAttribute(attributename, attribute);
	 		//newTableRow.setAttribute('background-color', 'green');
	 		// newTableRow.addEventListener('mouseover', function(event){
	 		// 	if(draw){
	 		// 		var thisElem = event.target;
				// 	thisElem.style = 'background-color: black';
	 		// 	}else
	 		// 	 if(draw === false){
	 		// 		var thisElem = event.target;
	 		// 		thisElem.style = 'background-color: white';
	 		// 	}
	 		newTableCol.appendChild(newTableRow);
	 		};
		}
		return MainTableWrapper;
	};




var newGrid = drawGrid(10,10, 'class', 'tableCol');

var parent = document.getElementById('pixelPainter');
		parent.appendChild(newGrid);
// step 2 - create the color grid (without color)

var newColorGrid = drawGrid(3,3, 'class', 'colorTable');
	var parent = document.getElementById('pixelPainter');
	parent.appendChild(newColorGrid);


//- make Erase and Clear buttins
var erButtonDiv = document.createElement('div');
var eraseButton = document.createElement('button');
eraseButton.setAttribute('id', 'eraseButton');
erButtonDiv.setAttribute('id', 'erButtonDiv');
eraseButton.innerHTML = 'ERASE';
erButtonDiv.appendChild(eraseButton);
parent.appendChild(erButtonDiv);

// ERASE BTN
eraseButton.addEventListener('click', function(event){
	if(draw){
	draw = false;
	}else if(draw === false){
		draw = true;
	}
}, true);

//- clear grid (button)

var clrButtonDiv = document.createElement('div');
var clrButton = document.createElement('button');
clrButton.setAttribute('id', 'clrButton');
clrButtonDiv.setAttribute('id', 'clrButtonDiv');
clrButton.innerHTML = 'CLEAR';
clrButtonDiv.appendChild(clrButton);
parent.appendChild(clrButtonDiv);


clrButton.addEventListener('click', function(event){
	var rmElm = document.querySelectorAll('.tableCol');
	for(var i=0; i<rmElm.length;i++){
	rmElm[i].removeAttribute('style');
}}, true);






// step 6 - add action fucntion to each grid Key

// step 7 - action for erase button / clear grid

// step 8 - link colors to color grid

function addColors(){
	for (var i = 0; i < color.length; i++) {
		color[i].style.backgroundColor = colorArray[i];
	}
};

addColors();

// step 10. link the color grid to mous click to write to the main grid
//var currentColor = event.currentTarget.style.backgroundColor;


var colorTest = document.querySelectorAll('.tableCol');
var palletes = document.querySelectorAll('.colorTable');
var colorString;


for (var i = 0; i < palletes.length; i++) {
	palletes[i].addEventListener('click', function(event) {
    var currentColor = event.currentTarget.style.backgroundColor;
    colorString = currentColor;
	})
};


for (var i = 0; i < colorTest.length; i++) {
	colorTest[i].addEventListener('click', function(event){
		this.style.backgroundColor = colorString;
			})
};

















































