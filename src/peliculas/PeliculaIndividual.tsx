import { pelicula } from "./peliculas.model";
import '../index.css';

export default function PeliculaIndividual(props:peliculaIndividualProps){

    const construirLink = ()=> `/pelicula/${props.pelicula.id}`

    return(
        <div className="divPel">
            <a href={construirLink()}>
                <img src={props.pelicula.poster} alt="poster" />
            </a>
            <p>
                <a href={construirLink()}>{props.pelicula.titulo}</a>
            </p>
        </div>
    )
}

interface peliculaIndividualProps{
    pelicula: pelicula;
}