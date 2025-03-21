import '../styles/login.css';
import { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className="login-bg">
            <form className={'login-box'}>
                <input type="text" id='username' onChange={ (e) => setUsername(e.target.value) }
                value={username} placeholder="Nombre de usuario" required />
                <input type="password" id='user-password' onChange={ (e) => setPassword(e.target.value) }
                value={password} placeholder="Password" required />
                <button type='submit'>Ingresar</button>
            </form>
        </div>
    )
}

export { Login };
