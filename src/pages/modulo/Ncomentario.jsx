import { useState } from "react";

function Ncomentario() {
    const [codigo, setCodigo] = useState('');
    const [contenido, setContenido] = useState('');

    const handleSubmitControl = async (e) => {
        e.preventDefault();

        await fetch(import.meta.env.VITE_Server + '/new/comentario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            contenido: contenido,
            usuarioId: window.localStorage.getItem('userId'),
            materiaId: codigo
        })});
        alert('Comentario guardado');
    };

    return (
        <form onSubmit={handleSubmitControl}>
            <input type="text" placeholder="id de la materia" id="codigo"
            onChange={(e) => setCodigo(e.target.value)} value={codigo}/>
            <textarea placeholder="Descripcion" id="materiaDesc"
            onChange={(e) => setContenido(e.target.value)} value={contenido} required></textarea>
            <div className="options-reverse">
                <button type="submit" className="btn-success">Guardar</button>
            </div>
        </form>
    );
}

export default Ncomentario;