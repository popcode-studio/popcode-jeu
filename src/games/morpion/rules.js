// Crée un plateau vide 3x3
// Chaque case est null (vide), 'X' ou 'O'
export function createBoard() {
    return Array.from({ length: 3 }, () => Array(3).fill(null))
}

// Retourne un nouveau plateau avec le coup joué
// On ne modifie jamais le plateau existant — on en crée toujours un nouveau
export function playMove(board, x, y, player) {
    return board.map((row, iy) =>
        row.map((cell, ix) => (ix === x && iy === y ? player : cell))
    )
}

// Retourne true si la case est déjà occupée
export function isCellTaken(board, x, y) {
    return board[y][x] !== null
}

// Retourne le joueur suivant
export function nextPlayer(currentPlayer) {
    return currentPlayer === 'X' ? 'O' : 'X'
}