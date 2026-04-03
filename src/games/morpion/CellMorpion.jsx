// Affichage d'une case individuelle du Morpion
// Reçoit : la valeur à afficher (null, 'X' ou 'O') et le gestionnaire de clic
// Ne contient aucune logique de jeu — uniquement du visuel
function CellMorpion({ value, onClick }) {
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
                cursor: value ? 'default' : 'pointer', // curseur main seulement si case vide
                fontSize: '2rem',
            }}
            onClick={onClick}
        >
            {/* Affiche X, O ou rien si la case est vide */}
            {value}
        </div>
    )
}

export default CellMorpion