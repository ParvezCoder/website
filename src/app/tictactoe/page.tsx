"use client";
import { useState } from 'react';
const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const handleClick = (index: number) => {
    if (board[index] || calculateWinner(board)) return;
    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };
  const calculateWinner = (squares: (string | null)[]) => {
    const lines = [
      [0, 1, 2],      [3, 4, 5],    [6, 7, 8],      [0, 3, 6],      [1, 4, 7], [2, 5, 8],[0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };
  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-white">{status}</h1>

      <div className="grid grid-cols-3 gap-4 bg-gray-800 p-4 rounded-lg border-2 border-blue-500">
        {board.map((square, index) => (
          <button
            key={index}
            className="w-24 h-24 text-3xl font-bold bg-gray-700 text-gray-200 border-4 border-blue-500 rounded-lg shadow-lg hover:bg-gray-600 hover:shadow-xl transition ease-in-out duration-300"
            onClick={() => handleClick(index)}
          >
            {square}
          </button>
        ))}
      </div>

      <button
        className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl focus:outline-none transition ease-in-out duration-300"
        onClick={resetGame}
      >
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;
