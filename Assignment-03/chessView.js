'use strict';

var GameView = (function() {
  function Gameview() {
    this.$$board = $('gameBoard');
  }

  GameView.prototype.render = function(board) {
    var boardHtml = "<table>";
    var count = board.length;
    var style = window.getComputedStyle(this.$$board);
    var size = parseInt(style.width) / count;
    console.log(size);

    for (var i = 0; i < board.length; ++i) {
      boardHtml += "<tr>";
      var col = board[i];
      for (var j = 0; j < col.lenth; ++j) {
        var className = '';
        if (col[j] === 'black') {
          className = 'blackTile';
        } else {
          className = 'whiteTile';
        }
        boardHtml += '<td class= "' + className + '" style="height: ' + size + 'px; width: ' + size + 'px;"></td>';
      }
      boardHtml += '</tr>';
    }
    boardHtml += '</table>';
    this.$$board.innerHTML = boardHtml;
  };

  return GameView;
})();

$().ready(function() {
  var controller = new GameController();

  controller.init();

  $('increase').onclick = function() {
    controller.increaseSize();
  };
});
