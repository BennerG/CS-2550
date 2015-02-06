'use strict';

window.onload = init;

function init() {
  var findTable = document.getElementById("gameBoard");
  gameBoard.innerHTML = makePlayingBoard();
}

function makePlayingBoard() {
  var html = "";
  var i = 0;
  var j = 0;
  var rowLet = "";
  var colNum = "";

                  // Queen, King, Rook, Bishop, Knight, Pawn
  var pieces = [ "&#9818;", "&#9819;","&#9820;","&#9821;", "&#9822;", "&#9823;" ];
  var gamePiece = "";

  var color = "";

  for (i = 0; i < 8; ++i) {
    switch(i) {
      case 0:
        rowLet = "a";
        color = "black";
        break;
      case 1:
        rowLet = "b";
        gamePiece = "&#9823;";
        break;
      case 2:
        rowLet = "c";
        gamePiece = "";
        color = "";
        break;
      case 3:
        rowLet = "d";
        break;
      case 4:
        rowLet = "e";
        break;
      case 5:
        rowLet = "f";
        break;
      case 6:
        rowLet = "g";
        gamePiece = "&#9823;";
        color = "white";
        break;
      case 7:
        rowLet = "h";
        break;
      }

    html += '<tr>';

    for (j = 0; j < 8; ++j) {
      switch(j) {
        case 0:
          colNum = "1";
          if (rowLet === "a" || rowLet === "h") {
            gamePiece = pieces[2];
          }
          break;
        case 1:
          colNum = "2";
          if (rowLet === "a" || rowLet === "h") {
            gamePiece = pieces[4];
          }
          break;
        case 2:
          colNum = "3";
          if (rowLet === "a" || rowLet === "h") {
            gamePiece = pieces[3];
          }
          break;
        case 3:
          colNum = "4";
          if (rowLet === "a" || rowLet === "h") {
            gamePiece = pieces[0];
          }
          break;
        case 4:
          colNum = "5";
          if (rowLet === "a" || rowLet === "h") {
            gamePiece = pieces[1];
          }
          break;
        case 5:
          colNum = "6";
          if (rowLet === "a" || rowLet === "h") {
            gamePiece = pieces[3];
          }
          break;
        case 6:
          colNum = "7";
          if (rowLet === "a" || rowLet === "h") {
            gamePiece = pieces[4];
          }
          break;
        case 7:
          colNum = "8";
          if (rowLet === "a" || rowLet === "h") {
            gamePiece = pieces[2];
          }
          break;
      }
      html += '<td id="' + rowLet + colNum + '" class="' + color + '"><a href="#">' + gamePiece + '</a></td>'
    }
    html += '</tr>';
    }
  return html;
}
