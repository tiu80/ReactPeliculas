import { Link } from "react-router-dom";

export default function IndiceActores(){
    return(
        <>
            <h3>Indice Actores</h3>
            <Link to="./crear" className="nav-link">Crear Actor</Link>
        </>

    )
}