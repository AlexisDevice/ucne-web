import { Outlet } from "react-router-dom";
import '../../styles/module.css';

function Modulo() {
    return (
        <div className="module-template">
            <div className="module-container">
                <header>
                    <h1>Registrar nuevo</h1>
                </header>
                <Outlet />
            </div>
        </div>
    );
}

export default Modulo;