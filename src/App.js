import { useState } from "react";
import "./App.css";

const Square = ({ value, onSquareClick }) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};

const Board = ({ isNext, squares, onPlay }) => {
  // const [isNext, setIsnext] = useState(true);
  // const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquare = squares.slice();
    // nextSquare[i] = "X";
    isNext ? (nextSquare[i] = "X") : (nextSquare[i] = "O");

    onPlay(nextSquare);
  };
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner : ${winner}`;
  }
  // else if (isBoardFull) {
  //   status = "Draw !"
  // }
  else {
    status = `Next Player : ` + (isNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">
        <h2>{status}</h2>
      </div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};
const calculateWinner = (squares) => {
  const line = [
    // winner conditions inside 2d array
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < line.length; i++) {
    const [a, b, c] = line[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

// const isBoardFull = (squares) => {
//   for (let i = 0; i < squares.length; i++) {
//     if (squares[i] === null) {
//       return false; // If any square is null, the board is not full
//     }
//   }
//   return true; // If all squares are filled, the board is full
// };

// const Square = ({ value }) => {
//   const handleClick = () => {
//     console.log(`clicked! ${value}`)
//   }
//   return <button className="square" onClick={handleClick}>{value}</button>;
// };
// above square function is example of how to use props
// export default function Game() {
//   return(

//   )
// }

export default function Game() {
 

  const [history, setHistory] = useState([Array(9).fill(null)]);
  
  const [currentMove, setCurrentMoves] = useState(0);
  
  const isNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
 
  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0,currentMove+1),nextSquares]
    setHistory(nextHistory);
    setCurrentMoves(nextHistory.length - 1);
    
  };
  const jumpTo = (nextMove) => {
    setCurrentMoves(nextMove);
    

  };

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  return (
    <div className="game">
      <div className="game-board">
        <Board isNext={isNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
