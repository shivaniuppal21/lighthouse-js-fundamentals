const generateBoard = function(whiteQueen, blackQueen){
let chessBoard = []
for (let i = 0; i < 8; i++){
    chessBoard.push([]);
    for (let j = 0; j < 8; j++){
        if((whiteQueen[0] === i && whiteQueen[1] === j) ||
        (blackQueen[0] === i && blackQueen[1] === j)){
            chessBoard[i].push(1);
        }else {
            chessBoard[i].push(0);
        }
        
    }
}
return chessBoard
}
const queenThreat = (board) => {
    let queen1, queen2;
    for (let i = 0; i < board.length; i++) {
      if (!queen1 && board[i].indexOf(1) !== -1) {
        queen1 = [i, board[i].indexOf(1)];
      }
      if (queen1 && board[i].indexOf(1) !== -1) {
        if (queen1[0] === i) {
          queen2 = [i, board[i].indexOf(1, queen1[1] + 1)];
        } else {
          queen2 = [i, board[i].indexOf(1)];
        }
      }
    }
    console.log(queen1, queen2);
  
    if (
      queen1[0] === queen2[0] ||
      queen1[1] === queen2[1] ||
      (Math.abs(queen1[1] - queen2[1]) === Math.abs(queen1[0] - queen2[0]))
    ) {
      return true;
    } else {
      return false;
    }
  };
  let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard))