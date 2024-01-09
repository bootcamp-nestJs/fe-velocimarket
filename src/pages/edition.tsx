import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Header from "../components/header";
import Footer from "../components/footer";
import ImageAvatarUploader from "../components/avatarUploader";
import "./edition.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/userSlice";
import { validarContrasena } from "../validadores/validadores";
/* import { Md5 } from "ts-md5"; */

interface UserState {
    id: number;
    user_name: string;
    email: string;
    isAuth: boolean;
    role: string;
    iat: number;
    access_token: string;
    user_avatar: string
}
interface UserEdit {
    id: number;
    nombre: string;
    apellido: string;
    user_name: string;
    user_avatar: string;
    mail: string;
    telefono: string;
    calle: string;
    comuna: number;
    numero: number;
    region: number;
    valoracion: number;
}

export default function Edition() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user) as UserState;
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [userData, setUserData] = useState({
        id: user.id,
        nombre: "",
        apellido: "",
        user_name: user.user_name,
        user_avatar: "",
        mail: user.email,
        telefono: "",
        calle: "",
        comuna: 0,
        numero: 0,
        region: 0,
        valoracion: 0
    } as UserEdit);

    const [form, setForm] = useState({
        user: user.user_name,
        correo: user.email,
        telefono: userData.telefono,
        avatar: userData.user_avatar
    })
    const [formPasswd, setFormPasswd] = useState({
        confContrasena: "",
        nuevaContrasena: ""
    });


    const handleImageChange = (image: File | null) => {
        setSelectedImage(image);
    };

    const formData = new FormData();

    if (selectedImage) {
        formData.append(`avatar`, selectedImage);
    }

    useEffect(() => {
        fetch(`https://api2-velo.lemichi.cl/api/users/user?id=${user.id}`, {
            method: 'GET',
        }).then(response => {
            return response.json() as Promise<UserEdit>;
        }).then(json => {
            console.log(json);
            setUserData(json);
            setForm({
                user: user.user_name,
                correo: user.email,
                telefono: json.telefono,
                avatar: json.user_avatar
            })
            dispatch(login({ // estado inicial 
                id: json.id,
                user_name: json.user_name,
                email: json.mail,
                isAuth: user.isAuth,
                role: user.role,
                iat: user.iat,
                access_token: user.access_token,
                user_avatar: json.user_avatar
            }))
        }).catch(error => {
            console.error(error);
        });
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert("ENVIANDO CAMBIOS DE PERFIL")
        const datosModificados = {
            user: form.user,
            mail: form.correo,
            telefono: form.telefono
        }
        fetch(`https://api2-velo.lemichi.cl/api/users?id=${user.id}`, {
            method: 'PATCH',
            body: JSON.stringify(datosModificados),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                return response.text() as Promise<string>;
            } else {
                console.log(response.text())
                throw new Error('algo salio mal al mnodificar el usuario en el backend');
            }
        }).then(text_resp => {
            console.log('Cambios en datos enviados con exito');
            console.log(datosModificados);
            console.log(text_resp);
            if (selectedImage) {
                console.log("Enviando Avatar")
                const formData = new FormData;
                formData.append('avatar', selectedImage)
                fetch(`https://api2-velo.lemichi.cl/api/users/avatar`, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        Authorization: `Bearer ${user.access_token}`
                    }
                }).then(response => {
                    if (response.ok) {
                        return response.text() as Promise<string>;
                    } else {
                        console.log(response.text())
                        throw new Error('Algo salio mal al subir el avatar del usuario en el backend');
                    }
                }).then(textAvatar => {
                    console.log('Avatar Subido con éxito');
                    console.log(textAvatar);
                    console.log("Actualizamos User Redux")
                    dispatch(login({ // estado inicial 
                        id: user.id,
                        user_name: datosModificados.user,
                        email: datosModificados.mail,
                        isAuth: user.isAuth,
                        role: user.role,
                        iat: user.iat,
                        access_token: user.access_token,
                        user_avatar: userData.user_avatar
                    }))
                    alert("Datos Modificados con Exito")
                }).catch(error => {
                    console.error(error);
                });
            }
        }).then(() => {
            console.log("Actualizamos User Redux")
            dispatch(login({ // estado inicial 
                id: user.id,
                user_name: datosModificados.user,
                email: datosModificados.mail,
                isAuth: user.isAuth,
                role: user.role,
                iat: user.iat,
                access_token: user.access_token,
                user_avatar: userData.user_avatar
            }))
            alert("Datos Modificados con Exito")
        }).then(() => navigate(0)
        ).catch(error => {
            console.error(error);
        });
    }

    const handleSubmitPassword = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formPasswd.confContrasena,formPasswd.confContrasena)
        if(formPasswd.nuevaContrasena === formPasswd.confContrasena){
            if(!validarContrasena(formPasswd.nuevaContrasena)){
               
                alert("Cambiando Password!")
                
                //NO SE REALIZA CAMBIO AL FECTH YA QUE ESTA SECCIÓN NO ESTA LISTA EN BACKEND AÚN

                /* fetch(`https://api2-velo.lemichi.cl/api/users?id=${user.id}`, {
                    method: 'PATCH',
                    body: JSON.stringify(
                        {password:  Md5.hashStr(formPasswd.confContrasena)}
                    ),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(response => {
                    if (response.ok) {
                        return response.text() as Promise<string>;
                    } else {
                        console.log(response.text())
                        throw new Error('algo salio mal al cambiar contraseña del usuario en el backend');
                    }
                }).catch(
                    error=>console.log(error)
                )
            }            
            else{
                alert("PONER TEXTO ENROJITO ")
            } 
        }
        else{
            alert("Contreseñas no coinciden")*/
        }
        
    }}
    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormPasswd({
            ...formPasswd,
            [event.target.name]: event.target.value
        });
    }


    return (
        <div className="edition">
            <Header />
            <div className="titleEdition">
                <h2 className="titleh2edition">Editar tu perfil</h2>
            </div>
            <section className="conteiner-general-edition">
                <div className="img_avatar_edition">
                    <ImageAvatarUploader setAvatar={handleImageChange} />
                </div>
                <form className="conteiner-form-edition" onSubmit={handleSubmit}>
                    <h4 className="title-section-Edition">Cambiar foto perfil</h4>
                    <div className="inputedition">
                        <label htmlFor="user">Nombre de usuario*</label>
                        <input type="text" name="user" id="user" value={form.user} onChange={handleChange} />
                    </div>
                    <div className="inputedition">
                        <label htmlFor="correo">Correo electrónico</label>
                        <input type="text" name="correo" id="correo" value={form.correo} onChange={handleChange} />
                    </div>
                    <div className="inputedition">
                        <label htmlFor="telefono">Número de teléfono</label>
                        <input
                            type="tel"
                            name="telefono"
                            id="telefono"
                            // placeholder="987654321"
                            value={form.telefono}
                            onChange={handleChange}
                        />
                    </div>
                    <input className="bluebutton-edition" type="submit" value={"Guardar cambios"} />
                </form>
                <form className="conteiner-form-edition" onSubmit={handleSubmitPassword}>

                    {/* <div className="inputedition">
                        <label htmlFor="contrasena_actual">Contraseña Actual</label>
                        <input type="password" name="contrasena" id="contrasena" />
                    </div> */}
                    <div className="inputedition">
                        <label htmlFor="nuevaContrasena">Nueva Contraseña</label>
                        <input type="password" name="nuevaContrasena" id="nuevaContrasena"onChange={handleChangePassword} value={formPasswd.nuevaContrasena} />
                    </div>
                    <div className="inputedition">
                        <label htmlFor="confContrasena">Confirmar Contraseña</label>
                        <input type="password" name="confContrasena" id="confContrasena" onChange={handleChangePassword} value={formPasswd.confContrasena}/>
                    </div>
                    <input className="bluebutton-edition" type="submit" value={"Cambiar contraseña"} />
                </form>
                <Footer />
            </section>
        </div>
    );
}
