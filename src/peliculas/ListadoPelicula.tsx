import PeliculaIndividual from "./PeliculaIndividual";
import { pelicula } from "./peliculas.model";
import '../index.css';
import Cargando from "../utils/Cargando";
import ListadoGenerico from "../utils/ListadoGenerico";

export default function ListadoPelicula(props:listadoPeliculaProps){

        return(
            <ListadoGenerico listado={props.peliculas}>
                    <div className="divListPel">
                        {props.peliculas?.map(pelicula => 
                            <PeliculaIndividual pelicula={pelicula} 
                                        key={pelicula.id}
                            />)}
                    </div>
            </ListadoGenerico>       
        )
}

interface listadoPeliculaProps{
    peliculas?: pelicula[];
}