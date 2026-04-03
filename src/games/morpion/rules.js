export function createBoard() {
    return Array.from({ length: 3 }, () => Array(3).fill(null))
}

export function playMove(board, x, y, player) {
    return board.map((row, iy) =>
        row.map((cell, ix) => (ix === x && iy === y ? player : cell))
    )
}

export function isCellTaken(board, x, y) {
    return board[y][x] !== null
}

export function nextPlayer(currentPlayer) {
    return currentPlayer === 'X' ? 'O' : 'X'
}

const WINNING_COMBINATIONS = [
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 1], [2, 2]],
    [[2, 0], [1, 1], [0, 2]],
]

export function checkWinner(board) {
    for (const combination of WINNING_COMBINATIONS) {
        const [a, b, c] = combination.map(([x, y]) => board[y][x])
        if (a !== null && a === b && b === c) {
            // Retourne le gagnant ET les cases gagnantes
            return { player: a, cells: combination }
        }
    }
    return null
}

export function isBoardFull(board) {
    return board.every(row => row.every(cell => cell !== null))
}

// Retourne true si la case fait partie de la combinaison gagnante
export function isWinningCell(winnerResult, x, y) {
    if (!winnerResult) return false
    return winnerResult.cells.some(([cx, cy]) => cx === x && cy === y)
}