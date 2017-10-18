// //jshint esversion : 6
// let addColors = require('addColors');

// // --G var
// var draw = true;
// var colorArray = ['red', 'blue', 'green', 'black'];
// var color = document.getElementsByClassName('colorTable');




// //CreateGrid Function start
// function createGrid(width, height, attributename, attribute){
// 	var MainTableWrapper = document.createElement('div');
// 	MainTableWrapper.addEventListener('mousedown', function(event){
// 		draw = true;

// 	});
// 		MainTableWrapper.addEventListener('mouseup', function(event){
// 		draw = false;

// 	});

// 	MainTableWrapper.setAttribute('id', 'MainTableWrapper');


// 	for(var i = 1; i< height; i++){
// 		var newTableCol = document.createElement('div');
// 		newTableCol.setAttribute('data', i );
// 		newTableCol.setAttribute('class', 'parentDiv');
// 		MainTableWrapper.appendChild(newTableCol);

// 		for(var j = 1; j < width; j++){
// 		 	var newTableRow = document.createElement('div');
// 	 		newTableRow.setAttribute('data', j);
// 	 		newTableRow.setAttribute(attributename, attribute);
// 	 		newTableCol.appendChild(newTableRow);
// 	 	}
// 	}
// 		return MainTableWrapper;
// }



// // Draw Main Gid
// var newGrid = drawGrid(30,10, 'class', 'tableCol');

// var parent = document.getElementById('pixelPainter');
// 		parent.appendChild(newGrid);




// // create the color grid (without color)
// var newColorGrid = drawGrid(3,3, 'class', 'colorTable');
// 	var parent = document.getElementById('pixelPainter');
// 	parent.appendChild(newColorGrid);




// //- make Erase and Clear buttins
// var erButtonDiv = document.createElement('div');
// var eraseButton = document.createElement('button');
// eraseButton.setAttribute('id', 'eraseButton');
// erButtonDiv.setAttribute('id', 'erButtonDiv');
// eraseButton.innerHTML = 'ERASE';
// erButtonDiv.appendChild(eraseButton);
// parent.appendChild(erButtonDiv);



// // ERASE BTN - Function
// 	erButtonDiv.addEventListener('click',function(event){
// 		colorString = 'white';
// 	});



// //- clear grid (button)
// var clrButtonDiv = document.createElement('div');
// var clrButton = document.createElement('button');
// clrButton.setAttribute('id', 'clrButton');
// clrButtonDiv.setAttribute('id', 'clrButtonDiv');
// clrButton.innerHTML = 'CLEAR';
// clrButtonDiv.appendChild(clrButton);
// parent.appendChild(clrButtonDiv);



// // Clear Button Functionality
// clrButton.addEventListener('click', function(event){
// 	var rmElm = document.querySelectorAll('.tableCol');
// 	for(var i=0; i<rmElm.length;i++){
// 		rmElm[i].removeAttribute('style');
// }}, true);


// // Populate color grid with colors
// // function addColors(){
// // 	for (var i = 0; i < color.length; i++) {
// // 		color[i].style.backgroundColor = colorArray[i];
// // 	}
// // }
// addColors();

// // Handels selections color locale to but grabed and placed
// var colorTest = document.querySelectorAll('.tableCol');
// var palletes = document.querySelectorAll('.colorTable');
// var colorString;

// for (var i = 0; i < palletes.length; i++) {
// 	palletes[i].addEventListener('click', function(event) {
//     var currentColor = event.currentTarget.style.backgroundColor;
//     colorString = currentColor;
// 	});
// }

// for (var i = 0; i < colorTest.length; i++) {
// 	colorTest[i].addEventListener('mousedown', function(event){
// 		this.style.backgroundColor = colorString;
// 			});
// }



