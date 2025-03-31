import { useState, useEffect } from "react";
import logo from '../assets/logoUCNE.png';
import { Link } from "react-router-dom";

function Carrera() {
    const [carreras, setCarreras] = useState([]);

    /* obtener maestros desde la api */
    useEffect(() => {
        fetch(import.meta.env.VITE_Server + '/carreras')
            .then(response => response.json())
            .then(data => setCarreras(data));
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
                        Carreras
                        <br />
                         de la UCNE
                    </h1>
                </div>
                <div className="maestros-list">
                    {carreras.map((carrera) => (
                        <div key={carrera.id} className="maestro-item">
                            <span>{carrera.nombre}</span>
                            <span>{carrera.descripcion}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Carrera;