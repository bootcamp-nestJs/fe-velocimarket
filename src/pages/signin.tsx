import { Link, useNavigate } from "react-router-dom";
import "./signin.css"
import iconfb from '../assets/icon/logos_facebook.svg'
import iconG from '../assets/icon/flat-color-icons_google.svg'
import { signIn } from "../interfaces/create-sign-in/sign-in";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../redux/userSlice";
import { Md5 } from "ts-md5";
import { jwtDecode } from 'jwt-decode' // import dependency

interface LoginRespose {
    id:number,
    isAuthenticated: boolean,
    user_name: string,
    mail: string,
    role: string,
    iat: number
}
interface AccessToken {
    access_token: string
}

export default function SignIn() {

    const dispatch = useDispatch(); // el dispatch me permite despachar el reducer
    const navigate = useNavigate();

    const [error, setError] = useState({
        nombreusuario: false,
        contrasena: false,
    });

    const [form, setForm] = useState({
        nombreusuario: "",
        contrasena: ""
    } as signIn);

    const validarLogin = () => {

        // encriptación de contraseña
        //DESCOMENTAR CUANDO BACKEND ARREGLE
        const passwordEncriptado = Md5.hashStr(form.contrasena)
        // const passwordEncriptado = form.contrasena
        /* agregar fetch */

        fetch(`https://api2-velo.lemichi.cl/api/signin`, {
            method: 'POST',
            body: JSON.stringify({
                "user_name": form.nombreusuario,
                "password": passwordEncriptado,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                return response.json() as Promise<AccessToken>;
            }
            else {
                alert("Usuario o contraseña incorrectos")
                throw new Error('algo salio mal al loguear en el backend');
            }
        }).then(json => {
            alert("Ingresando");
            console.log(json);
            const token = json.access_token 
            const user_data = jwtDecode(token) as LoginRespose
            console.log(user_data)
            dispatch(login({  //preguntar si lo que se guarda aca es en realidad el token el profe envia una estructura json pero a mi me devuelven un token
                id:user_data.id,
                user_name: user_data.user_name,
                email: user_data.mail,
                isAuth: true,
                role: user_data.role,
                iat:user_data.iat,
                access_token: token
            }))

            navigate(-1);
        }).catch(error => {
            console.error(error);
            dispatch(logout())
        });
    }

    const validarInputs = (inputForm: signIn) => {

        const erroresFormulario = {
            nombreusuario: false,
            contrasena: false,
        }
        if (inputForm.nombreusuario.length === 0) {
            erroresFormulario.nombreusuario = true;
        }
        if (inputForm.contrasena!.length === 0) {
            erroresFormulario.contrasena = true;
        }

        return (erroresFormulario)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(validarInputs(form))
        console.log(Object.values(validarInputs(form)).includes(true));

        validarLogin();
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    return (
        <div className="signIn">
            <aside className="imagenAside"></aside>
            <div className="login_section">
                <div className="container">
                    <h2 className="tituloin">Inicio de sesión</h2>

                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Nombre de usuario</label>
                        <input type="text" name="nombreusuario" id="name" onChange={handleChange} />
                        {error.nombreusuario && <span className='error'>Ingrese usuario</span>}
                        <label htmlFor="password">Contraseña</label>
                        <input type="text" name="contrasena" id="password" onChange={handleChange} />
                        {error.contrasena && <span className='error'>Ingrese contraseña</span>}
                        <input type="submit" value={'\u2713 Entrar'} className="entrar-link" />
                    </form>

                    <p className="Text-In">
                        ¿No tienes cuenta? <Link to="/signUp" style={{ textDecoration: "none" }}>regístrate acá</Link>
                    </p>

                    <div className="separator">
                        <hr />
                        <span>O</span>
                    </div>

                    <div className="login_buttons">
                        <button>
                            <img className="icon-singIn" src={iconfb} alt="" />
                            Facebook
                        </button>
                        <button>
                            <img className="icon-singIn" src={iconG} alt="" />
                            Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
