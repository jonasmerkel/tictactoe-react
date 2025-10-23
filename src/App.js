import { useState, useCallback, useMemo } from "react";

// Memoized Square component for better performance
function Square({ value, onSquareClick, disabled, index }) {
  return (
    <button
      className="square"
      onClick={onSquareClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSquareClick();
        }
      }}
      disabled={disabled}
      aria-label={
        value
          ? `Square ${index + 1} filled with ${value}`
          : `Empty square ${index + 1}, click to place ${
              disabled ? "" : "your mark"
            }`
      }
      tabIndex={disabled ? -1 : 0}
    >
      {value}
    </button>
  );
}

// Winning combinations - moved outside component to avoid recreation
const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // columns
  [0, 4, 8],
  [2, 4, 6], // diagonals
];

function calculateWinner(squares) {
  for (const [a, b, c] of WINNING_LINES) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// Check if board is full (tie game)
function isBoardFull(squares) {
  return squares.every((square) => square !== null);
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  // Memoize expensive calculations
  const winner = useMemo(() => calculateWinner(squares), [squares]);
  const isTie = useMemo(
    () => !winner && isBoardFull(squares),
    [squares, winner]
  );

  // Memoized status calculation
  const status = useMemo(() => {
    if (winner) {
      return `🎉 Winner: ${winner} 🎉`;
    } else if (isTie) {
      return "🤝 It's a tie! 🤝";
    } else {
      return `Next player: ${xIsNext ? "X" : "O"}`;
    }
  }, [winner, isTie, xIsNext]);

  // Memoized click handler for better performance
  const handleClick = useCallback(
    (i) => {
      if (squares[i] || winner) {
        return;
      }
      const nextSquares = squares.slice();
      nextSquares[i] = xIsNext ? "X" : "O";
      setSquares(nextSquares);
      setXIsNext(!xIsNext);
    },
    [squares, winner, xIsNext]
  );

  // Reset game function
  const resetGame = useCallback(() => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }, []);

  return (
    <div className="game">
      <div className="game-board">
        <h1 className="game-title">Tic-Tac-Toe</h1>
        <div className="status">{status}</div>
        <div className="board-row">
          <Square
            value={squares[0]}
            onSquareClick={() => handleClick(0)}
            disabled={!!winner || isTie}
            index={0}
          />
          <Square
            value={squares[1]}
            onSquareClick={() => handleClick(1)}
            disabled={!!winner || isTie}
            index={1}
          />
          <Square
            value={squares[2]}
            onSquareClick={() => handleClick(2)}
            disabled={!!winner || isTie}
            index={2}
          />
        </div>
        <div className="board-row">
          <Square
            value={squares[3]}
            onSquareClick={() => handleClick(3)}
            disabled={!!winner || isTie}
            index={3}
          />
          <Square
            value={squares[4]}
            onSquareClick={() => handleClick(4)}
            disabled={!!winner || isTie}
            index={4}
          />
          <Square
            value={squares[5]}
            onSquareClick={() => handleClick(5)}
            disabled={!!winner || isTie}
            index={5}
          />
        </div>
        <div className="board-row">
          <Square
            value={squares[6]}
            onSquareClick={() => handleClick(6)}
            disabled={!!winner || isTie}
            index={6}
          />
          <Square
            value={squares[7]}
            onSquareClick={() => handleClick(7)}
            disabled={!!winner || isTie}
            index={7}
          />
          <Square
            value={squares[8]}
            onSquareClick={() => handleClick(8)}
            disabled={!!winner || isTie}
            index={8}
          />
        </div>
        {(winner || isTie) && (
          <button className="reset-button" onClick={resetGame}>
            🔄 Play Again
          </button>
        )}
      </div>
    </div>
  );
}
