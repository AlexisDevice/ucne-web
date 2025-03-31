import '../styles/card.css';

function Card({texto, user_name, materia_name, matricula}) {
    return (
        <div className="card">
            <div className="card-header">
                <span className='f-med'>{user_name}</span>
                <span>{matricula}</span>
            </div>
            <div className="card-body">
                <span className='f-med'><strong>Materia:</strong> {materia_name}</span>
                <p>{texto}</p>
            </div>
        </div>
    );
}

export default Card;