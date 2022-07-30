import { Link } from "react-router-dom";

export default function InidiceCines(){
    return(
        <>
            <h3>Indice Cines</h3>
            <Link to="./crear" className="nav-link">Crear Cine</Link>
        </>

    )
}