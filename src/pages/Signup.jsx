import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/login.css';
import { Link } from "react-router-dom";

function Signup() {
    const [realname, setRealname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function createUser() {
        try {
            const response = await fetch('http://localhost:5062/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userName: realname, email: username, password })
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
                <input type="text" id='username' onChange={ (e) => setUsername(e.target.value) }
                value={username} placeholder="Correo" />
                <input type="password" id='user-password' onChange={ (e) => setPassword(e.target.value) }
                value={password} placeholder="Password" />
                <button type='submit'>Ingresar</button>
                <Link className="like-button t-info b-info" to="/login">Iniciar sesión</Link>
            </form>
        </div>
    );
}

export default Signup;