import '../styles/maestro.css';
import logo from '../assets/logoUCNE.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Maestros() {
    const [maestros, setMaestros] = useState([]);

    /* obtener maestros desde la api */
    useEffect(() => {
        fetch(import.meta.env.VITE_Server + '/profesores')
            .then(response => response.json())
            .then(data => setMaestros(data));
    }, []);

    return (
        <div className="maestros-container">
            <div className="maestros-box">
                <div className="maestros-header">
                    <Link to={'/home'} className='like-button b-info'>Ir al home</Link>
                    <img 
                        src={logo}
                        alt="UCNE Logo" 
                        className="maestros-logo"
                    />
                    <h1 className="maestros-title">
                        Maestros
                        <br />
                         de la UCNE
                    </h1>
                </div>
                <div className="maestros-list">
                    {maestros.map((maestro) => (
                        <div key={maestro.profesorId} className="maestro-item">
                            <span>{maestro.nombre + " " + maestro.apellido}</span>
                            <span>{maestro.correo}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Maestros;
