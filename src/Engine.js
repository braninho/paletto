'use strict';

var Engine = function () {

// private attributes and methods
    var grid = new Array(6);
    var player1 = new Array(6);
    var player2 = new Array(6)

    var nbBall = 0;
    const NULL = -1;
    const BLACK = 0;
    const WHITE = 1;
    const GREEN = 2;
    const BLUE = 3;
    const RED = 4;
    const YELLOW = 5;


// public methods
    this.init = function () {
        var column, line;
        for (column = 0; column < 6; column = column + 1) {
            grid[column] = new Array(6);
            for (line = 0; line < 6; line = line + 1) {
                grid[column][line] = -1;
            }
        }
    };

    this.fill = function () {
        this.setBallGrid(0,0,BLACK);
        this.setBallGrid(0,1,GREEN);
        this.setBallGrid(0,2,WHITE);
        this.setBallGrid(0,3,BLUE);
        this.setBallGrid(0,4,RED);
        this.setBallGrid(0,5,WHITE);
        this.setBallGrid(1,0,YELLOW);
        this.setBallGrid(1,1,WHITE);
        this.setBallGrid(1,2,GREEN);
        this.setBallGrid(1,3,RED);
        this.setBallGrid(1,4,YELLOW);
        this.setBallGrid(1,5,BLUE);
        this.setBallGrid(2,0,BLUE);
        this.setBallGrid(2,1,YELLOW);
        this.setBallGrid(2,2,BLUE);
        this.setBallGrid(2,3,WHITE);
        this.setBallGrid(2,4,BLACK);
        this.setBallGrid(2,5,RED);
        this.setBallGrid(3,0,RED);
        this.setBallGrid(3,1,BLACK);
        this.setBallGrid(3,2,RED);
        this.setBallGrid(3,3,GREEN);
        this.setBallGrid(3,4,BLUE);
        this.setBallGrid(3,5,WHITE);
        this.setBallGrid(4,0,WHITE);
        this.setBallGrid(4,1,GREEN);
        this.setBallGrid(4,2,YELLOW);
        this.setBallGrid(4,3,BLACK);
        this.setBallGrid(4,4,YELLOW);
        this.setBallGrid(4,5,GREEN);
        this.setBallGrid(5,0,YELLOW);
        this.setBallGrid(5,1,BLUE);
        this.setBallGrid(5,2,BLACK);
        this.setBallGrid(5,3,RED);
        this.setBallGrid(5,4,GREEN);
        this.setBallGrid(5,5,BLACK);

        nbBall = 36;
    };

    this.getBallGrid = function (line, column) {
        return grid[line][column];
    };

    this.setBallGrid = function (line, column, color) {
        grid[line][column] = color;
    };

    this.take = function (line, column) {
        this.setBallGrid(line,column,NULL);
        nbBall -= 1;
    };
};
