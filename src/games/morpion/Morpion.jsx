import { useState } from 'react'
import Board from './Board'
import { checkWinner, createBoard, isBoardFull, isCellTaken, isWinningCell, nextPlayer, playMove } from './Rules'

function Morpion() {
    const [board, setBoard] = useState(createBoard())
    const [currentPlayer, setCurrentPlayer] = useState('X')

    // shakingCell stocke la position de la dernière case cliquée en erreur
    const [shakingCell, setShakingCell] = useState(null)

    const winner = checkWinner(board)
    const boardFull = isBoardFull(board)
    const isGameOver = winner !== null || boardFull

    function handleCellClick(x, y) {
        if (isGameOver) return

        if (isCellTaken(board, x, y)) {
            // On déclenche le shake sur cette case
            setShakingCell({ x, y })
            // On retire le shake après 300ms pour pouvoir le redéclencher
            setTimeout(() => setShakingCell(null), 300)
            return
        }

        const newBoard = playMove(board, x, y, currentPlayer)
        setBoard(newBoard)
        setCurrentPlayer(nextPlayer(currentPlayer))
    }

    function handleRestart() {
        setBoard(createBoard())
        setCurrentPlayer('X')
        setShakingCell(null)
    }

    return (
        <div>
            {winner && <p>{winner.player} a gagné !</p>}
            {!winner && boardFull && <p>Match nul !</p>}
            {!isGameOver && <p>Joueur actuel : {currentPlayer}</p>}

            <Board
                board={board}
                onCellClick={handleCellClick}
                // On passe une fonction qui dit si une case est gagnante ou en train de shaker
                isWinningCell={(x, y) => isWinningCell(winner, x, y)}
                isShakingCell={(x, y) => shakingCell?.x === x && shakingCell?.y === y}
            />

            {isGameOver && (
                <button onClick={handleRestart}>Rejouer</button>
            )}
        </div>
    )
}

export default Morpion