import Grid from '../../engine/Grid'

function CellMorpion({ x, y }) {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#f0f0f0',
                border: '2px solid #333',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '2rem',
            }}
            onClick={() => console.log(`Case ${x},${y} cliquée`)}
        />
    )
}

function Board() {
    return (
        <Grid
            cols={3}
            rows={3}
            cellWidth={100}
            cellHeight={100}
            gap={8}
            renderCell={(x, y) => <CellMorpion x={x} y={y} />}
        />
    )
}

export default Board