// Justin and Virgi checks for Git and contributors

console.log("im here");
console.log('Justin Is here');
console.log('virgi is here');

// --G var
var draw = true;

// step one - Create the grid --- Can bind click function built into for loop
function drawGrid(width, height, attributename, attribute){
	var MainTableWrapper = document.createElement('div');
	MainTableWrapper.addEventListener('mousedown', function(){
		draw = true;
		var thisElem = event.target;
		thisElem.style = 'background-color: black';
	});
		MainTableWrapper.addEventListener('mouseup', function(){
		draw = false;
		var thisElem = event.target;
	 	thisElem.style = 'background-color: white';
	});

	MainTableWrapper.setAttribute('id', 'MainTableWrapper');


	for(var i = 1; i< height; i++){
		var newTableCol = document.createElement('div');
		newTableCol.setAttribute('data', i );
		newTableCol.setAttribute(attributename, attribute);
		MainTableWrapper.appendChild(newTableCol);

		 for(var j = 1; j < width; j++){
		 	var newTableRow = document.createElement('div');
	 		newTableRow.setAttribute('data', j);
	 		newTableRow.setAttribute('class', 'newTableRow');
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

// - clear grid (button)

var clrButtonDiv = document.createElement('div');
var clrButton = document.createElement('button');
clrButton.setAttribute('id', 'clrButton');
clrButtonDiv.setAttribute('id', 'clrButtonDiv');
clrButton.innerHTML = 'CLEAR';
clrButtonDiv.appendChild(clrButton);
parent.appendChild(clrButtonDiv);


clrButton.addEventListener('click', function(event){
	var rmElm = document.getElementsByClassName('newTableRow');
	for(var i=0; i<rmElm.length;i++){

	rmElm[i].removeAttribute('style');
}}, true);






// step 4 - make main grid clickable





// step 6 - add action fucntion to each grid Key






// step 7 - action for erase button / clear grid





// step 8 - link colors to color grid








// step 10. link the color grid to mous click to write to the main grid














































