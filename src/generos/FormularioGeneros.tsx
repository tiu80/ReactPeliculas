import { Form, Formik, FormikHelpers } from "formik";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";
import { generosCrearDTO } from "./generos.model";

export default function FormularioGeneros(props:formularioGenerosProps){
    return(
        <>
        <Formik initialValues={props.modelo}
            onSubmit={props.onSubmit}

            validationSchema={Yup.object({
                nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula()
            })}
        >
            {(formikProps) =>(
                <Form>
                
                    <FormGroupText campo="nombre" label="Nombre" placeHolder="Nombre" />

                    <Button disabled={formikProps.isSubmitting} 
                    type="submit">Salvar</Button>
                    <NavLink to="/generos" className="btn btn-secondary">Cancelar</NavLink>
                </Form>
            )}


        </Formik>
        </>
    )
}

interface formularioGenerosProps{
    modelo:generosCrearDTO,
    onSubmit(valores: generosCrearDTO,accion:FormikHelpers<generosCrearDTO>):void;
}