import { useState } from 'react'
import Board from './Board'
import { createBoard, isCellTaken, nextPlayer, playMove } from './Rules'


// Point d'entrée du jeu Morpion
// C'est ici que vit tout l'état de la partie
// Il orchestre les règles (rules.js) et l'affichage (Board.jsx)
function Morpion() {
    // L'état du plateau — tableau 2D 3x3
    const [board, setBoard] = useState(createBoard())

    // Le joueur qui doit jouer ('X' ou 'O')
    const [currentPlayer, setCurrentPlayer] = useState('X')

    // Appelée quand un joueur clique sur une case
    function handleCellClick(x, y) {
        // Règle : on ne peut pas jouer sur une case déjà occupée
        if (isCellTaken(board, x, y)) return

        // On crée un nouveau plateau avec le coup joué
        const newBoard = playMove(board, x, y, currentPlayer)
        setBoard(newBoard)

        // On passe au joueur suivant
        setCurrentPlayer(nextPlayer(currentPlayer))
    }

    return (
        <div>
            {/* Indicateur du joueur actuel */}
            <p>Joueur actuel : {currentPlayer}</p>

            {/* Le plateau reçoit l'état et remonte les clics */}
            <Board
                board={board}
                onCellClick={handleCellClick}
            />
        </div>
    )
}

export default Morpion