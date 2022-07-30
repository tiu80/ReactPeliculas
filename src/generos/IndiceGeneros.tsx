import { Link } from "react-router-dom";

export default function IndiceGeneros(){

    console.log("entro a componente");

    return(
        <>
            <h3>Indice Géneros</h3>
            <Link to="./crear" className="nav-link">Crear Géneros</Link>
        </>
    )
}