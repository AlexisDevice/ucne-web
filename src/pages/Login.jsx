import '../styles/login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function authUser() {
        try {
            const response = await fetch('http://localhost:5062/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: username, password })
            });

            if (response.ok) {
                const data = await response.json();
                window.localStorage.setItem('token', data.token);
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
                <input type="text" id='username' onChange={ (e) => setUsername(e.target.value) }
                value={username} placeholder="Correo" />
                <input type="password" id='user-password' onChange={ (e) => setPassword(e.target.value) }
                value={password} placeholder="Password" />
                <button type='submit'>Ingresar</button>
            </form>
        </div>
    );
}

export { Login };
