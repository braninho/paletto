'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase.prototype.testStory1 = function () {
    var paletto = new Engine();
    paletto.init();
    paletto.fill();
    for(var i = 0;i<6;i++){
        for(var j = 0;j<6;j++){
            if(i<5){
                assertTrue(paletto.getBallGrid(i,j) != paletto.getBallGrid(i+1,j));
            }
            if(i>0){
                assertTrue(paletto.getBallGrid(i,j) != paletto.getBallGrid(i-1,j));
            }
            if(j>0){
                assertTrue(paletto.getBallGrid(i,j) != paletto.getBallGrid(i,j-1));
            }
            if(j<5){
                assertTrue(paletto.getBallGrid(i,j) != paletto.getBallGrid(i,j+1));
            }
        }
    }
};

PalettoTestCase.prototype.testStory2 = function () {
    var paletto = new Engine();
    paletto.init();
    paletto.fill();
    paletto.take(6,0);
    assertTrue(paletto.getBallGrid(6,0) === -1);
};