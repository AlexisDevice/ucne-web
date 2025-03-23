import React from "react";
import '../styles/maestro.css';

function Maestros() {
    const maestros = [
        { nombre: "Gregory Suarez", carrera: "Ingeniería" },
        { nombre: "Enel Almonte", carrera: "Ingeniería" },
        { nombre: "Miguel Jimenez", carrera: "Ingeniería" }
    ];

    return (
        <div className="maestros-container">
            <div className="maestros-box">
                <div className="maestros-header">
                    <img 
                        src="https://imgs.search.brave.com/SjOU17rbC7c3J8zYDemaJgjFzan7mP6tGEBpID9gqj4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91Y25l/dmlydHVhbC51Y25l/LmVkdS5kby9wbHVn/aW5maWxlLnBocC8x/L3RoZW1lX2Jvb3N0/X3VuaW9uL2xvZ29j/b21wYWN0LzMwMHgz/MDAvLTEvZXNjdWRv/JTIwdWNuZS5wbmc"
                        alt="UCNE Logo" 
                        className="maestros-logo"
                    />
                    <h1 className="maestros-title">Maestros de la UCNE</h1>
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
