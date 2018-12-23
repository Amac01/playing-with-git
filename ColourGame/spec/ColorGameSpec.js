'use strict';

describe('ColorGame', function() {
  var game;
  var colors;

  beforeEach(function(){

    game = new ColorGame();
    colors = new Colors();
  });

  it('should show an array of colors', function(){
    game.addColors(colors);
    expect(game.getColors(colors)).toEqual(colors[0]);
  });


});
