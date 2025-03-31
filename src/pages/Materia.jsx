import { useState, useEffect } from "react";
import logo from '../assets/logoUCNE.png';
import { Link } from "react-router-dom";

function Materia() {
    const [materias, setMaterias] = useState([]);
    
        useEffect(() => {
            fetch(import.meta.env.VITE_Server + '/materias')
                .then(response => response.json())
                .then(data => setMaterias(data));
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
                            Materias
                            <br />
                             de la UCNE
                        </h1>
                    </div>
                    <div className="maestros-list">
                        {materias.map((materia) => (
                            <div key={materia.materiaId} className="maestro-item">
                                <span>{materia.materiaId}</span>
                                <span>{materia.nombre}</span>
                                <span>{materia.codigo}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
}

export default Materia;