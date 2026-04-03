function Grid({ cols, rows, cellWidth, cellHeight, gap, renderCell }) {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${cols}, ${cellWidth}px)`,
                gridTemplateRows: `repeat(${rows}, ${cellHeight}px)`,
                gap: `${gap}px`,
            }}
        >
            {Array.from({ length: rows }, (_, y) =>
                Array.from({ length: cols }, (_, x) => (
                    <div key={`${x}-${y}`}>
                        {renderCell(x, y)}
                    </div>
                ))
            )}
        </div>
    )
}

export default Grid