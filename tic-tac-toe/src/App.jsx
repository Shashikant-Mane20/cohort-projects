import { useState } from 'react'
import Board from './components/Board'

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isXTurn, setIsXTurn] = useState(true)

  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  const checkWinner = (currentBoard) => {
    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern

      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a]
      }
    }

    return null
  }

  const winner = checkWinner(board)

  const isDraw = board.every((cell) => cell !== null) && !winner

  const handleClick = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]

    newBoard[index] = isXTurn ? 'X' : 'O'

    setBoard(newBoard)

    setIsXTurn(!isXTurn)
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setIsXTurn(true)
  }

  return (
    <div
      className="
        min-h-screen
        bg-gradient-to-br
        from-slate-900
        via-slate-800
        to-slate-900
        flex
        items-center
        justify-center
        px-4
      "
    >
      <div
        className="
          bg-slate-900/70
          backdrop-blur-md
          p-8
          rounded-3xl
          shadow-2xl
          border border-slate-700
          text-center
          w-full
          max-w-md
        "
      >
        <h1
          className="
            text-4xl
            font-bold
            text-white
            mb-6
          "
        >
          Tic Tac Toe
        </h1>

        {!winner && !isDraw && (
          <p className="text-xl text-slate-300 mb-6">
            Current Turn:{' '}
            <span className="font-bold text-cyan-400">
              {isXTurn ? 'X' : 'O'}
            </span>
          </p>
        )}

        {winner && (
          <p className="text-2xl font-bold text-green-400 mb-6">
            Winner: {winner} 🎉
          </p>
        )}

        {isDraw && (
          <p className="text-2xl font-bold text-yellow-400 mb-6">
            Match Draw 🤝
          </p>
        )}

        <div className="flex justify-center mb-8">
          <Board board={board} handleClick={handleClick} />
        </div>

        <button
          onClick={resetGame}
          className="
            bg-cyan-500
            hover:bg-cyan-600
            text-white
            px-6
            py-3
            rounded-xl
            font-semibold
            transition-all
            duration-200
            shadow-lg
            hover:scale-105
          "
        >
          Reset Game
        </button>
      </div>
    </div>
  )
}

export default App