import { useState } from "react";

function Ncarrera() {
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [desc, setDesc] = useState('');
    const [carrera, setCarrera] = useState({});


    const handleSubmitControl = async (e) => {
        e.preventDefault();
        setCarrera({
            nombre: name,
            codigo: code,
            descripcion: desc
        });

        await fetch('http://localhost:5062/api/Carreras', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(carrera)});
        alert('Carrera guardada');
    };

    return (
        <form onSubmit={handleSubmitControl}>
            <input type="text" placeholder="Nombre de la carrera" id="materaName"
            onChange={(e) => setName(e.target.value)} required />
            <input type="text" placeholder="Codigo" id="materiaCode"
            onChange={(e) => setCode(e.target.value)} />
            <textarea placeholder="Descripcion" id="materiaDesc"
            onChange={(e) => setDesc(e.target.value)} required></textarea>
            <div className="options-reverse">
                <button type="submit" className="btn-success">Guardar</button>
            </div>
        </form>
    );
}

export default Ncarrera;