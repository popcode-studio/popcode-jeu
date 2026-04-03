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

// Toutes les combinaisons gagnantes possibles en coordonnées [x, y]
const WINNING_COMBINATIONS = [
    // Lignes horizontales
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    // Colonnes verticales
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    // Diagonales
    [[0, 0], [1, 1], [2, 2]],
    [[2, 0], [1, 1], [0, 2]],
]

// Retourne le joueur gagnant ('X' ou 'O') ou null si pas de victoire
export function checkWinner(board) {
    for (const combination of WINNING_COMBINATIONS) {
        // On récupère les valeurs des 3 cases de la combinaison
        const [a, b, c] = combination.map(([x, y]) => board[y][x])

        // Si les 3 cases sont identiques et non vides → victoire !
        if (a !== null && a === b && b === c) {
            return a
        }
    }

    // Aucune combinaison gagnante trouvée
    return null
}

// Retourne true si toutes les cases sont remplies (match nul)
export function isBoardFull(board) {
    return board.every(row => row.every(cell => cell !== null))
}