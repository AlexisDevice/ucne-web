import { Outlet } from "react-router-dom";
import '../../styles/module.css';
import { Link } from "react-router-dom";

function Modulo() {
    return (
        <div className="module-template">
            <div className="module-container">
                <header>
                    <h2>Registrar nuevo</h2>
                    <Link to={'/home'} className='like-button b-info'>Ir a home</Link>
                </header>
                <Outlet />
            </div>
        </div>
    );
}

export default Modulo;