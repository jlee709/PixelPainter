// Justin and Virgi checks for Git and contributors
console.log("im here");
console.log('Justin Is here');
console.log('virgi is here');

// specs For Pixel Painter

// When instatiated it appends a
// new PixelPainter object to a HTML div
// element with an id of pp-canvas.
// Module or Classical OOP Patterns for this.


// The height and width attributes set the size of the canvas.
// must be a square

// Do not edit the index.html file. You will generate all
// of your html markup using the DOM API.


// constraints --> can not manipulate html !!!!!



// --! pseudo code for what needs to be completed !-- //



// step one - Create the grid
function drawGrid(width, height, attributename, attribute){
	var MainTableWrapper = document.createElement('div');
	var parent = document.getElementById('pixelPainter');
	parent.appendChild(MainTableWrapper);

	for(var i = 1; i< height; i++){
		var newTableCol = document.createElement('div');
		newTableCol.setAttribute('data', i );
		newTableCol.setAttribute(attributename, attribute);
		MainTableWrapper.appendChild(newTableCol);

		 for(var j = 1; j < width; j++){
		 	var newTableRow = document.createElement('div');
	 		newTableRow.setAttribute('data', j);
	 		newTableRow.setAttribute('class', 'newTableRow');
	 		newTableCol.appendChild(newTableRow);

	  }
}

  return MainTableWrapper;

}

drawGrid(10,10, 'class', 'tableCol');

// step 2 - create the color grid (without color)
drawGrid(3,3, 'class', 'colorTable');


// step 3 - make Erase and Clear buttins




// step 4 - make main grid clickable





// step 5 - make color grid clickable





// step 6 - add action fucntion to each grid Key






// step 7 - action for erase button / clear grid





// step 8 - link colors to color grid






// step 9 - clear grid (button)





// step 10. link the color grid to mous click to write to the main grid














































