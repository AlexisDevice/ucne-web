import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/login.css';
import { Link } from "react-router-dom";

function Signup() {
    const [realname, setRealname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [matricula, setMatricula] = useState('');

    async function createUser() {
        try {
            const response = await fetch(import.meta.env.VITE_Server + '/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user_name: realname, matricula, email, password })
            });

            if (response.ok) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error(error);
        }
    }

    const goto = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isAuth = await createUser();
        if (isAuth) {
            goto('/login');
        } else {
            alert('Debe de haber mayusculas, minusculas, numeros y caracteres especiales');
        }
    };

    return (
        <div className="login-bg">
            <form onSubmit={handleSubmit} className={'login-box'}>
                <h1>Registrarse</h1>
                <input type="text" id="realname" onChange={ (e) => setRealname(e.target.value) }
                value={realname} placeholder="Nombre completo" />
                <input type="text" id="matricula" onChange={ (e) => setMatricula(e.target.value) }
                value={matricula} placeholder="Matricula" />
                <input type="text" id='username' onChange={ (e) => setEmail(e.target.value) }
                value={email} placeholder="Correo" />
                <input type="password" id='user-password' onChange={ (e) => setPassword(e.target.value) }
                value={password} placeholder="Password" />
                <button type='submit'>Registrarse</button>
                <Link className="like-button t-info b-info" to="/login">Iniciar sesión</Link>
            </form>
        </div>
    );
}

export default Signup;