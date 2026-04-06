export function createBoard() {
    // 6 lignes (rows), chaque ligne a 7 cases (cols)
    return Array.from({ length: 6 }, () => Array(7).fill(null))
}

export function getAvailableRow(board, x) {
    // On part du bas (ligne 5) et on remonte
    for (let y = board.length - 1; y >= 0; y--) {
        if (board[y][x] === null) return y
    }
    // Si aucune case libre → colonne pleine
    return null
}

export function dropPiece(board, x, player) {
    const y = getAvailableRow(board, x)
    if (y === null) return null // Colonne pleine

    return board.map((row, iy) =>
        row.map((cell, ix) => (ix === x && iy === y ? player : cell))
    )
}

export function nextPlayer(currentPlayer) {
    return currentPlayer === 1 ? 2 : 1
}

export function isBoardFull(board) {
    return board[0].every(cell => cell !== null)
}

const DIRECTIONS = [
    { dx: 1, dy: 0 },  // horizontal
    { dx: 0, dy: 1 },  // vertical
    { dx: 1, dy: 1 },  // diagonale ↘
    { dx: 1, dy: -1 },  // diagonale ↗
]

export function checkWinner(board) {
    const rows = board.length        // 6
    const cols = board[0].length     // 7

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {

            const player = board[y][x]

            // Si la case est vide, pas besoin de vérifier
            if (player === null) continue

            for (const { dx, dy } of DIRECTIONS) {
                const cells = []

                // On collecte 4 cases dans la direction (dx, dy)
                for (let i = 0; i < 4; i++) {
                    const nx = x + i * dx  // nouvelle position x
                    const ny = y + i * dy  // nouvelle position y

                    // On vérifie qu'on ne sort pas du plateau
                    if (nx < 0 || nx >= cols || ny < 0 || ny >= rows) break

                    // On vérifie que la case appartient au même joueur
                    if (board[ny][nx] !== player) break

                    // La case est valide, on l'ajoute
                    cells.push([nx, ny])
                }

                // Si on a collecté 4 cases → victoire !
                if (cells.length === 4) {
                    return { player, cells }
                }
            }
        }
    }

    // Aucune victoire trouvée
    return null
}

export function isWinningCell(winnerResult, x, y) {
    if (!winnerResult) return false
    return winnerResult.cells.some(([cx, cy]) => cx === x && cy === y)
}