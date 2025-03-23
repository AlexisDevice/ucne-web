import { useState } from "react";

function Nprofesor() {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [profesor, setProfesor] = useState({
        nombre: '',
        apellido: '',
        correo: ''
    });

    const handleSubmitControl = async (e) => {
        e.preventDefault();
        setProfesor({
            name: name,
            apellido: lastName,
            correo: email
        });

        await fetch('http://localhost:5062/api/profesors', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(profesor)});
    }
    
    return (
        <form onSubmit={handleSubmitControl}>
            <input type="text" placeholder="Nombre del profesor" id="profesorName"
            onChange={(e) => setName(e.target.value)} required />
            <input type="text" placeholder="Apellido del profesor" id="profesorLastName"
            onChange={(e) => setLastName(e.target.value)} required />
            <input type="text" placeholder="Correo del profesor" id="profesorEmail"
            onChange={(e) => setEmail(e.target.value)} required />
            <div className="options-reverse">
                <button type="submit" className="btn-success">Guardar</button>
            </div>
        </form>
    );
}

export default Nprofesor;