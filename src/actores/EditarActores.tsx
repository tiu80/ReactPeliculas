import FormularioActores from "./FormularioActores";

export default function EditarActores(){
    return(
        <>
            <h3>Editar Actores</h3>
            <FormularioActores
                modelo={{nombre:'Tom Holland',
                biografia:`# Tom
                 ha nacido **tom**`,
                fechaNacimiento:new Date('1996-06-01T00:00:00'),
                fotoURL:'https://www.cheatsheet.com/wp-content/uploads/2020/07/Tom-Holland-3.jpg'}}
                onSubmit={valores => console.log(valores)}
              />
        </>

    )
}
 