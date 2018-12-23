// alert('connect');

function ColorGame(){
  this.colors = [];
}

ColorGame.prototype.addColors = function(color) {
  this.colors.push(color);
}

ColorGame.prototype.getColors = function(index){
  return this.colors[index];
}
