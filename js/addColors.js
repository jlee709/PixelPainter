//jshint esversion : 6

let addColors = function(){
  for (var i = 0; i < color.length; i++) {
    color[i].style.backgroundColor = colorArray[i];
  }
};

module.exports = addColors;