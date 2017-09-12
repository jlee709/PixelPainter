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
function drawGrid(width, height){

for(var i = 0; i< height; i++){
	var newTableCol = document.createElement('div');
	newTableCol.setAttribute('class', 'tableCol');

	var newParent = document.getElementById('pixelPainter');
  var child = newParent.appendChild(newTableCol);

  	var minTableCol = document.createElement('div');
		minTableCol.setAttribute('class', 'miniTableCol');
		
		var miniChild = newTableCol.appendChild(minTableCol);

		// for(var j = 0; j<width; j++){
		// 	var newTableRow = document.createElement('div');
	 // 		newTableRow.setAttribute('style', 'border: solid black 2px;');
	 // 		var newParent = document.getElementById('pixelPainter');
		//   var child = newParent.appendChild(newTableRow);

	 // }
}

  return newTableCol;
  
}

console.log(drawGrid());


// step 2 - create the color grid (without color)





// step 3 - make Erase and Clear buttins 




// step 4 - make main grid clickable 





// step 5 - make color grid clickable 





// step 6 - add action fucntion to each grid Key 






// step 7 - action for erase button / clear grid 





// step 8 - link colors to color grid 






// step 9 - clear grid (button)





// step 10. link the color grid to mous click to write to the main grid 














































