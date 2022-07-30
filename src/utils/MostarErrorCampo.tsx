export default function MostrarErrorCampo(props:mostarErrorCampoProps){
    return(
        <div className="text-danger">{props.mensaje}</div>
    )
}

interface mostarErrorCampoProps{
    mensaje:string;
}