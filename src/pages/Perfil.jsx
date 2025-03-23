import '../styles/perfil.css';

/*
    ToDo: Aqui debemos de reemplazar los valores estaticos por los que se recibira por la api
*/
function Perfil() {
    return (
        <div className="perfil-container">
            <div className="perfil-box">
                <span>Alexis Melendez</span>
                <span>2017 - 0294</span>
                <span>Ingenieria en sistemas</span>
                <span>Alexis_Melendez@ucne.edu.do</span>
            </div>
        </div>
    );
}

export { Perfil };