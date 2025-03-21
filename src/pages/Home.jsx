import { useNavigate } from "react-router-dom";
import '../styles/home.css';
import { Link } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const redireccionar = (ruta) => {
        navigate(ruta);
    };

    return (
        <div className="home-layout">
            <nav className="navbar">
                <div className="nav-content">
                    <img
                        src="https://imgs.search.brave.com/SjOU17rbC7c3J8zYDemaJgjFzan7mP6tGEBpID9gqj4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91Y25l/dmlydHVhbC51Y25l/LmVkdS5kby9wbHVn/aW5maWxlLnBocC8x/L3RoZW1lX2Jvb3N0/X3VuaW9uL2xvZ29j/b21wYWN0LzMwMHgz/MDAvLTEvZXNjdWRv/JTIwdWNuZS5wbmc"
                        alt="UCNE Logo"
                        className="logo"
                    />
                    <span className="title">UCNE Guiaden</span>
                </div>
            </nav>

            <div className="container">
                <div className="cuadro" onClick={() => redireccionar("/comentarios")}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1380/1380338.png" alt="Comentarios" className="cuadro-img" />
                    <p>Comentarios</p>
                </div>

                <div className="cuadro" onClick={() => redireccionar("/asignaturas")}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1177/1177464.png" alt="Asignaturas" className="cuadro-img" />
                    <p>Asignaturas</p>
                </div>

                <div className="cuadro" onClick={() => redireccionar("/maestros")}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTkZ35h9OnwZiaqCymLUeXOGWaw6JrHEh_Ng&s" alt="Maestros y Facultades" className="cuadro-img" />
                    <p>Maestros y Facultades</p>
                </div>

                <div className="cuadro" onClick={() => redireccionar("/carreras")}>
                    <img src="https://utel.mx/blog/wp-content/uploads/2015/03/shutterstock_234044557-1.jpg" alt="Carreras" className="cuadro-img" />
                    <p>Carreras</p>
                </div>

                <div className="cuadro" onClick={() => redireccionar("/perfil")}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="Perfil" className="cuadro-img" />
                    <p>Perfil</p>
                </div>
            </div>

        </div>
    );
}
// <Link to={aqui va la ruta}>texto del link</Link>

export { Home };
