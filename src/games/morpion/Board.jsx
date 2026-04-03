import Grid from '../../engine/Grid'
import CellMorpion from './CellMorpion'

// Reçoit maintenant isWinningCell et isShakingCell en plus
function Board({ board, onCellClick, isWinningCell, isShakingCell }) {
    return (
        <Grid
            cols={3}
            rows={3}
            cellWidth={100}
            cellHeight={100}
            gap={8}
            renderCell={(x, y) => (
                <CellMorpion
                    value={board[y][x]}
                    onClick={() => onCellClick(x, y)}
                    isWinner={isWinningCell(x, y)}
                    shaking={isShakingCell(x, y)}
                />
            )}
        />
    )
}

export default Board