import '../styles/home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home-layout">
            <h1 className="saludo">Home</h1>
            <p>Bienvenido a la página de inicio</p>
        </div>
    );
}
// <Link to={aqui va la ruta}>texto del link</Link>

export { Home };