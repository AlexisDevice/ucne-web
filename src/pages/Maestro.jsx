import '../styles/maestro.css';
import logo from '../assets/logoUCNE.png';
import { useEffect, useState } from 'react';

function Maestros() {
    const [maestros, setMaestros] = useState([]);

    /* obtener maestros desde la api */
    useEffect(() => {
        fetch('http://localhost:5062/api/maestros')
            .then(response => response.json())
            .then(data => setMaestros(data));
    }, []);

    return (
        <div className="maestros-container">
            <div className="maestros-box">
                <div className="maestros-header">
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
                    {maestros.map((maestro, index) => (
                        <div key={index} className="maestro-item">
                            <span>{maestro.nombre}</span>
                            <span>{maestro.carrera}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Maestros;
