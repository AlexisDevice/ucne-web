import { useState } from "react";

function Nmateria() {
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [desc, setDesc] = useState('');
    const [materia, setMateria] = useState({
        nombre: '',
        codigo: '',
        descripcion: ''
    });

    const handleSubmitControl = async (e) => {
        e.preventDefault();
        setMateria({
            nombre: name,
            codigo: code,
            descripcion: desc
        });

        await fetch('http://localhost:5062/api/materias', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(materia)});
    };
    return (
        <form onSubmit={handleSubmitControl}>
            <input type="text" placeholder="Nombre de la materia" id="materaName"
            onChange={(e) => setName(e.target.value)} required />
            <input type="text" placeholder="Codigo de la materia" id="materiaCode"
            onChange={(e) => setCode(e.target.value)} required />
            <textarea placeholder="Descripcion" id="materiaDesc"
            onChange={(e) => setDesc(e.target.value)} required></textarea>
            <div className="options-reverse">
                <button type="submit" className="btn-success">Guardar</button>
            </div>
        </form>
    )
}

export default Nmateria;