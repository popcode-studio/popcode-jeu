import { useState } from 'react'
import Board from './Board'
import {
    createBoard,
    playMove,
    isCellTaken,
    nextPlayer,
    checkWinner,
    isBoardFull,
} from './Rules'

// Point d'entrée du jeu Morpion
// Orchestre l'état de la partie, les règles et l'affichage
function Morpion() {
    const [board, setBoard] = useState(createBoard())
    const [currentPlayer, setCurrentPlayer] = useState('X')

    // On calcule le gagnant et l'état du plateau à chaque rendu
    // Ces valeurs sont recalculées automatiquement quand board change
    const winner = checkWinner(board)
    const boardFull = isBoardFull(board)

    // La partie est terminée si quelqu'un a gagné ou si le plateau est plein
    const isGameOver = winner !== null || boardFull

    function handleCellClick(x, y) {
        // On ignore les clics si la partie est terminée
        if (isGameOver) return

        // Règle : on ne peut pas jouer sur une case déjà occupée
        if (isCellTaken(board, x, y)) return

        // On crée un nouveau plateau avec le coup joué
        const newBoard = playMove(board, x, y, currentPlayer)
        setBoard(newBoard)

        // On passe au joueur suivant
        setCurrentPlayer(nextPlayer(currentPlayer))
    }

    function handleRestart() {
        // On recrée un plateau vide et on remet X en premier
        setBoard(createBoard())
        setCurrentPlayer('X')
    }

    return (
        <div>
            {/* Message selon l'état de la partie */}
            {winner && <p>{winner} a gagné !</p>}
            {!winner && boardFull && <p>Match nul !</p>}
            {!isGameOver && <p>Joueur actuel : {currentPlayer}</p>}

            <Board
                board={board}
                onCellClick={handleCellClick}
            />
        </div>
    )
}

export default Morpion