import Grid from '../../engine/Grid'
import CellMorpion from './CellMorpion'

// Affichage du plateau de jeu
// Reçoit l'état du plateau et le gestionnaire de clic depuis Morpion.jsx
// Ne contient aucune logique de jeu — uniquement la mise en page
function Board({ board, onCellClick }) {
    return (
        <Grid
            cols={3}
            rows={3}
            cellWidth={100}
            cellHeight={100}
            gap={8}
            renderCell={(x, y) => (
                // Pour chaque case, on passe sa valeur et son gestionnaire de clic
                <CellMorpion
                    value={board[y][x]}
                    onClick={() => onCellClick(x, y)}
                />
            )}
        />
    )
}

export default Board