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
    paletto.take(5,0);
    assertTrue(paletto.getBallGrid(5,0) === -1);
};

PalettoTestCase.prototype.testStory3 = function () {
    var paletto = new Engine();
    paletto.init();
    paletto.fill();
    paletto.takeBloc('A6');
    assertTrue(paletto.getBallGridBloc('A6') === -1);
    assertTrue(paletto.getNbBall() === 35);
    assertTrue(paletto.getNbBallPlayer(0,5) === 1);
};

PalettoTestCase.prototype.testStory4 = function () {
    var paletto = new Engine();
    paletto.init();
    paletto.fill();
    paletto.takeBloc('A6');
    paletto.switchPlayer();
    assertTrue(paletto.getCurrentPlayer() === 1);
    paletto.takeBloc('A1');
    paletto.takeBloc('F6');
    assertTrue(paletto.getNbBallPlayer(1,0) === 2);
};

PalettoTestCase.prototype.testStory6 = function () {
    var paletto = new Engine();
    paletto.init();
    paletto.fill();
    paletto.takeBloc('A1');
    paletto.takeBloc('F6');
    paletto.switchPlayer();
    paletto.takeBloc('B1');
    paletto.takeBloc('E6');
    paletto.takeBloc('F5');
    paletto.switchPlayer();
    paletto.takeBloc('A2');
    paletto.takeBloc('A6');
    paletto.switchPlayer();
    paletto.takeBloc('A3');
    paletto.switchPlayer();
    paletto.takeBloc('A5');
    paletto.takeBloc('F4');
    paletto.takeBloc('F1');
    paletto.takeBloc('C1');
    paletto.switchPlayer();
    paletto.takeBloc('E1');
    paletto.takeBloc('F3');
    paletto.takeBloc('D6');
    paletto.takeBloc('A4');
    paletto.switchPlayer();
    paletto.takeBloc('D3');
    paletto.takeBloc('F2');
    paletto.takeBloc('B6');
    paletto.switchPlayer();
    paletto.takeBloc('B3');
    paletto.takeBloc('E2');
    paletto.takeBloc('E5');
    paletto.switchPlayer();
    paletto.takeBloc('B4');
    paletto.takeBloc('C6');
    paletto.takeBloc('D5');
    paletto.takeBloc('E3');
    assertTrue(paletto.win() === 0);
    assertTrue(paletto.getNbBallPlayer(0,0) === 6);
};