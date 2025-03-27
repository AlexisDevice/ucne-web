import { useState, useEffect } from "react";
import logo from '../assets/logoUCNE.png';

function Materia() {
    const [materias, setMaterias] = useState([]);
    
        /* obtener maestros desde la api */
        useEffect(() => {
            fetch('http://localhost:5062/api/Materias')
                .then(response => response.json())
                .then(data => setMaterias(data));
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
                            Materias
                            <br />
                             de la UCNE
                        </h1>
                    </div>
                    <div className="maestros-list">
                        {materias.map((materia) => (
                            <div key={materia.materiaId} className="maestro-item">
                                <span>{materia.nombre}</span>
                                <span>{carrera.codigo}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
}

export default Materia;