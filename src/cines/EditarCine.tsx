import FormularioCines from "./FomularioCines";

export default function EditarCine(){
    return(
        <>
            <h3>Editar Cine</h3>
            <FormularioCines
                modelo={{ nombre: 'Prueba editar' }}
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}