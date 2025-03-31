import '../styles/login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function authUser() {
        try {
            const response = await fetch(import.meta.env.VITE_Server + '/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                const data = await response.json();
                window.localStorage.setItem('userId', data.user.id);
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
        const isAuth = await authUser();
        if (isAuth) {
            goto('/home');
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    };

    return (
        <div className="login-bg">
            <form onSubmit={handleSubmit} className={'login-box'}>
                <h1>Iniciar sesión</h1>
                <input type="text" id='username' onChange={ (e) => setEmail(e.target.value) }
                value={email} placeholder="Correo" />
                <input type="password" id='user-password' onChange={ (e) => setPassword(e.target.value) }
                value={password} placeholder="Password" />
                <button type='submit'>Ingresar</button>
                <Link className="like-button t-info b-info" to="/">Registrarse</Link>
            </form>
        </div>
    );
}

export { Login };
