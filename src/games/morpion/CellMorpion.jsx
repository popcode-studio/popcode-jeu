import './Morpion.css'

// Affichage d'une case individuelle du Morpion
// Reçoit : value, onClick, isWinner (case gagnante ?), shaking (erreur de clic ?)
function CellMorpion({ value, onClick, isWinner, shaking }) {
    return (
        <div
            className={`${shaking ? 'shake' : ''} ${isWinner ? 'winner' : ''}`}
            style={{
                width: '100%',
                height: '100%',
                border: '2px solid #333',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: value ? 'default' : 'pointer',
                fontSize: '2rem',
                // La couleur de fond dépend de l'état — winner laisse le CSS gérer via la classe
                backgroundColor: isWinner ? undefined : '#f0f0f0',
            }}
            onClick={onClick}
        >
            {/* La classe piece déclenche l'animation d'apparition */}
            {value && <span className="piece">{value}</span>}
        </div>
    )
}

export default CellMorpion