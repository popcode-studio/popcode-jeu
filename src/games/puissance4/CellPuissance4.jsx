import './Puissance4.css'

// Retourne la couleur du cercle selon le joueur
function getColor(value) {
    if (value === 1) return '#e74c3c' // rouge joueur 1
    if (value === 2) return '#f1c40f' // jaune joueur 2
    return '#ccc'                     // gris case vide
}

function CellPuissance4({ value, onClick, isWinner, y }) {
    return (
        // Carré bleu — fond du plateau
        <div
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#3498db',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: value ? 'default' : 'pointer',
            }}
            onClick={onClick}
        >
            {/* Cercle coloré — le jeton */}
            <div
                className={`jeton ${value ? 'visible' : ''} ${isWinner ? 'winner' : ''}`}
                style={{
                    width: '80%',
                    height: '80%',
                    borderRadius: '50%',
                    backgroundColor: getColor(value),
                    // La distance de chute dépend de la position y de la case
                    '--fall-distance': `${-(y + 1) * 108}px`,
                }}
            />
        </div>
    )
}

export default CellPuissance4