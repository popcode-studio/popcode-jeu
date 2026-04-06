import { useState } from "react";
import { checkWinner, createBoard, dropPiece, isBoardFull, isWinningCell, nextPlayer } from "./rules";
import Board from "./Board";

function Puissance4() {
    const [board, setBoard] = useState(createBoard())
    const [currentPlayer, setCurrentPlayer] = useState(1)

    const winner = checkWinner(board)
    const boardFull = isBoardFull(board)
    const isGameOver = winner !== null || boardFull

    function handleColumnClick(x) {
        if (isGameOver) return

        const newBoard = dropPiece(board, x, currentPlayer)
        if (newBoard === null) return // ← à rajouter — colonne pleine

        setBoard(newBoard)
        setCurrentPlayer(nextPlayer(currentPlayer))
    }

    function handleRestart() {
        setBoard(createBoard())
        setCurrentPlayer(1)
    }

    return (
        <div>
            {winner && <p>{winner.player} a gagné !</p>}
            {!winner && boardFull && <p>Match nul !</p>}
            {!isGameOver && <p>Joueur actuel : {currentPlayer}</p>}

            <Board
                board={board}
                onColumnClick={handleColumnClick}
                // On passe une fonction qui dit si une case est gagnante ou en train de shaker
                isWinningCell={(x, y) => isWinningCell(winner, x, y)}
            />

            {isGameOver && (
                <button onClick={handleRestart}>Rejouer</button>
            )}
        </div>
    )
}

export default Puissance4