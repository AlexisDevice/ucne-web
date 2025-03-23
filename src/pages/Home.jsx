import { Link, useNavigate } from "react-router-dom";
import '../styles/home.css';
import comentarioLogo from '../assets/chat-right-text.svg';
import asignaturaLogo from '../assets/card-heading.svg';
import maestroLogo from '../assets/person-workspace.svg';
import carrerasLogo from '../assets/award-fill.svg';
import personLogo from '../assets/person.svg';
import ucneLogo from '../assets/logoUCNE.png';

function Home() {
    return (
        <div className="home-layout">
            <nav className="navbar">
                <div className="nav-content">
                    <img
                        src={ucneLogo}
                        alt="UCNE Logo"
                        className="logo"
                    />
                    <span className="title">UCNE Guia</span>
                </div>
            </nav>

            <div className="container">
                <Link to={'/comentarios'} className="cuadro">
                    <img src={comentarioLogo} alt="Comentarios" className="cuadro-img" />
                    <p>Comentarios</p>
                </Link>

                <Link to={'/asignaturas'} className="cuadro">
                    <img src={asignaturaLogo} alt="Asignaturas" className="cuadro-img" />
                    <p>Asignaturas</p>
                </Link>

                <Link to={'/maestros'} className="cuadro">
                    <img src={maestroLogo} alt="Maestros y Facultades" className="cuadro-img" />
                    <p>Maestros</p>
                </Link>

                <Link to={'/carreras'} className="cuadro">
                    <img src={carrerasLogo} alt="Carreras" className="cuadro-img" />
                    <p>Carreras</p>
                </Link>

                <Link to={'/perfil'} className="cuadro">
                    <img src={personLogo} alt="Perfil" className="cuadro-img" />
                    <p>Perfil</p>
                </Link>
            </div>
        </div>
    );
}

export { Home };
