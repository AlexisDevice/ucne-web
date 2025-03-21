import '../styles/login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const goto = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        goto('/home');
    }
    return (
        <div className="login-bg">
            <form onSubmit={handleSubmit} className={'login-box'}>
                <input type="text" id='username' onChange={ (e) => setUsername(e.target.value) }
                value={username} placeholder="Nombre de usuario" />
                <input type="password" id='user-password' onChange={ (e) => setPassword(e.target.value) }
                value={password} placeholder="Password" />
                <button type='submit'>Ingresar</button>
            </form>
        </div>
    )
}

export { Login };
