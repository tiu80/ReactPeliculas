import { ErrorMessage, Field } from "formik";
import MostrarErrorCampo from "./MostarErrorCampo";

export default function ExportGroupText(props:formGroupTextProps){
    return(
        <>
            <div className="form-group">
                {props.label ? <label htmlFor={props.campo}>{props.label}</label> :null }
                <Field name={props.campo} className="form-control" placeholder={props.placeHolder}/>
                <ErrorMessage name={props.campo}>{mensaje =>
                   <MostrarErrorCampo mensaje={mensaje}/>
                }</ErrorMessage>
                </div>
        </>
    )
}

interface formGroupTextProps{
    campo:string;
    label?:string;
    placeHolder?:string;
}