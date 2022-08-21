import FormularioCines from "./FomularioCines";

export default function CrearCine() {
    return (
        <>
            <h3>Crear Cine</h3>
            <FormularioCines
                modelo={{ nombre: '' }}
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}