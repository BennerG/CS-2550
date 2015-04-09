'use strict';

var GameModel = (function() {
  function GameModel() {
    this.$$boardSize = 8;
  };

  GameModel.prototype.$$generateInitialBoard = function() {
    this.$$board = new Array();
    for (var i = 0; i < this.$boardSize; ++i) {
      this.$$board[i] = new Array();
      for (var j = 0; j < this.$$boardSize; ++j) {
        if ((i + j) % 2 === 0) {
          this.$$board[i][j] = 'white';
        } else {
          this.$$board[i][j] = 'black';
        }
      }
    }
  }

  GameModel.prototype.getBoard = function() {
    if (!this.$$board) {
      this.$$generateInitialBoard();
    }

    return this.$$board;
  }

  GameModel.prototype.increase = function() {
    this.$$boardSize++;
    this.$$generateInitialBoard();
  }

  return GameModel;
})();
