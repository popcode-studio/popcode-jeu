import Grid from '../../engine/Grid'
import CellPuissance4 from './CellPuissance4'

function Board({ board, onColumnClick, isWinningCell }) {
    return (
        // Ce div masque les jetons qui dépassent au-dessus du plateau
        <div style={{
            overflow: 'hidden',
            position: 'relative',
            // padding-top pour laisser de la place à l'animation avant d'être masquée
            paddingTop: '8px',
            borderRadius: '8px',
        }}>
            <Grid
                cols={7}
                rows={6}
                cellWidth={100}
                cellHeight={100}
                gap={8}
                renderCell={(x, y) => (
                    <CellPuissance4
                        value={board[y][x]}
                        onClick={() => onColumnClick(x)}
                        isWinner={isWinningCell(x, y)}
                        y={y}
                    />
                )}
            />
        </div>
    )
}

export default Board