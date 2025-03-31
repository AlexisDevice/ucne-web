import '../styles/perfil.css';
import { useState, useEffect } from 'react';

function Perfil() {
    const [user, setUser] = useState({})

    useEffect(() => {
            fetch(import.meta.env.VITE_Server + '/usuario/' + localStorage.getItem('userId'))
                .then(response => response.json())
                .then(data => setUser(data[0]));
        }, []);

    return (
        <div className="perfil-container">
            <div className="perfil-box">
                <span>{user.nombre}</span>
                <span>{user.matricula}</span>
                <span>{user.email}</span>
            </div>
        </div>
    );
}

export { Perfil };