import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";
import { actorCreacionDTO } from "./actores.model";
import * as Yup from 'yup'
import FormGroupFecha from "../utils/FormGroupFecha";
import FormGroupImagen from "../utils/FormGroupImagen";
import FormGroupMarkdown from "../utils/FormGroupMarkdown";

export default function FormularioActores(props:formarioActoresProps){
    return(
        <Formik
        initialValues={props.modelo}
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({
            nombre:Yup.string().required('Este campo es requerido').primeraLetraMayuscula(),
            FechaNacimiento:Yup.date().nullable().required('Este campo es requerido')
        })}
        >

        {(formikProps)=>(
            <Form>
                <FormGroupText campo="nombre" label="Nombre"/>
                <FormGroupFecha label="Fecha Nacimiento" campo="FechaNacimiento"/>
                <FormGroupImagen campo="foto" label="Foto" imagenURL={props.modelo.fotoURL}/>
                <FormGroupMarkdown campo="biografia" label="biografia"/>

                <Button disabled={formikProps.isSubmitting}
                   type="submit" >Salvar
                </Button>
                <Link className="btn btn-secondary" to="/actores">Cancelar</Link>
            </Form>
        )}
        </Formik>
    )
}

interface formarioActoresProps{
    modelo:actorCreacionDTO;
    onSubmit(valores:actorCreacionDTO,acciones:FormikHelpers<actorCreacionDTO>):void
}