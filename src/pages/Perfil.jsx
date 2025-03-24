import '../styles/perfil.css';

function Perfil() {
    return (
        <div className="perfil-container">
            <div className="perfil-box">
                <span>{window.localStorage.getItem('user')}</span>
                <span>{window.localStorage.getItem('email')}</span>
            </div>
        </div>
    );
}

export { Perfil };