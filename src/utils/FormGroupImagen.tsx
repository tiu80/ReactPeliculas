import { useFormik, useFormikContext } from "formik";
import { resolve } from "path";
import { ChangeEvent, useState } from "react";

export default function FormGroupImagen(props: formGroupImagenProps){

    const divStyle = {marginTop:'10px'}
    const imgStyle = {width:'450px'}

    const [imagenBase64,setImagenbase64] = useState('');
    const [imagenURL,setImagenURL] = useState(props.imagenURL);
    const {values} = useFormikContext<any>();

    const ManejaronChange = (e:ChangeEvent<HTMLInputElement>) =>{
        if(e.currentTarget.files){
            const archivo = e.currentTarget.files[0];
            aBase64(archivo)
                .then ((valor:string) => setImagenbase64(valor))
                .catch(error => console.error(error))

              values [props.campo]= archivo;
              setImagenURL('');
        }
    }

    const aBase64 = (file:File) =>{
        return new Promise<string>((resolve,reject) =>{
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        })
    }

    return(
        <div className="form-group">
            <label>{props.label}</label>
            <div>
                <input type="file" accept=".jpg,.jpeg,.png" onChange={ManejaronChange} />
            </div>
            {imagenBase64 ? 
                <div>
                    <div style={divStyle}>
                        <img style={imgStyle} src={imagenBase64} alt="imagen seleccionada" />
                    </div>
                </div> : null
            }
            {imagenURL ? 
                <div>
                    <div style={divStyle}>
                        <img style={imgStyle} src={imagenURL} alt="imagen seleccionada" />
                    </div>
                </div> : null
            }
        </div>
    )
}

interface formGroupImagenProps{
    campo:string;
    label:string;
    imagenURL:string;
}

FormGroupImagen.defaultProps ={
    imagenURL:''
}