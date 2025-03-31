import '../styles/comentario.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

function Comentario() {
    const [comentarios, setComentarios] = useState([]);
    useEffect(() => {
        fetch(import.meta.env.VITE_Server + '/comentarios')
        .then(Response => Response.json()).then(data => setComentarios(data));
    }, []);

    return (
        <div className="module-template">
            <div className="module-container">
                <header>
                    <Link to={'/home'} className='like-button b-info'>Ir a home</Link>
                    <Link to={'/module/new/comentario'} className='like-button btn-success'>Nuevo comentario</Link>
                </header>
                <div className="list-comentarios">
                    {
                        comentarios.map((comentario) => (
                            <Card key={comentario.id} texto={comentario.contenido}
                            user_name={comentario.u_nombre} 
                            materia_name={comentario.m_nombre}
                            matricula={comentario.matricula} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export { Comentario };