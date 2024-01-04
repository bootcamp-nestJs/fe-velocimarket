import './signup.css'
import iconfb from '../assets/icon/logos_facebook.svg'
import iconG from '../assets/icon/flat-color-icons_google.svg'
import { useEffect, useState } from 'react';
import { signUp } from '../interfaces/create-sign-up/sign-up'
import { Link, useNavigate } from "react-router-dom";
import { validarApellido, validarContrasena, validarEmail, validarNombre, validarTelefono, validarUsuario } from '../validadores/validadores';
import { user_response } from '../interfaces/testuser';
import { Region } from '../interfaces/testregiones.ts'
import { Md5 } from "ts-md5";

function SignUp() {

    

    const [form, setForm] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        nombreusuario: "",
        contrasena: "",
        telefono: undefined, //preguntar como poder hacer que quede vacio y pueda ver solo lo que indica el placeholder
        comuna: "",
        region: ""
    } as signUp);
    const navigate = useNavigate();
    const [regcom, setRegCom] = useState<Region[]>([]);

    useEffect(() => {
        fetch(`https://api2-velo.lemichi.cl/api/common/regions`, {
            method: 'GET',
        }).then(response => {
            return response.json() as Promise<Region[]>;
        }).then(json => {
            console.log(json);
            setRegCom(json);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    const [error, setError] = useState({
        nombre: false,
        apellido: false,
        correo: false,
        nombreusuario: false,
        contrasena: false,
        telefono: false,
        comuna: false,
        region: false
    });

    //Al parecer no tiene un uso practico para un formulario, quizas es mejor para fecth data en la seccion de productos para actualizar las nuevas cards del feed.

    // useEffect(() => {
    //     // (Object.values(validarInputs(form)).includes(true)) ? console.log("existen errores, revise que completo correctamente todos los campos") : enviarFormulario(), [error]
    //     Object.values(validarInputs(form)).includes(true)
    // })

    const validarInputs = (inputForm: signUp) => {

        const erroresFormulario = {
            nombre: false,
            apellido: false,
            correo: false,
            nombreusuario: false,
            contrasena: false,
            telefono: false,
            comuna: false,
            region: false
        };

        /*  validar nombre */
        erroresFormulario.nombre = validarNombre(inputForm.nombre);
        /*  validar apellido*/

        erroresFormulario.apellido = validarApellido(inputForm.apellido);

        /*  validar correo */

        erroresFormulario.correo = validarEmail(inputForm.correo)

        /*  validar nombreusuario */
        erroresFormulario.nombreusuario = validarUsuario(inputForm.nombreusuario);

        /*  validar contraseña */
        erroresFormulario.contrasena = validarContrasena(inputForm.contrasena);

        /*  validar telefono */

        erroresFormulario.telefono = validarTelefono(inputForm.telefono);

        erroresFormulario.comuna = inputForm.comuna.length === 0 ? true : false;
        erroresFormulario.region = inputForm.region.length === 0 ? true : false;

        return erroresFormulario

    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(validarInputs(form));
        Object.values(validarInputs(form)).includes(true) ? console.log("Error en formulario") : enviarFormulario();

    }

    const enviarFormulario = () => {
        let regId=0;
        let comId=0;
        for (let i=0;i<regcom.length; i++){
            if(regcom[i].region === form.region){
                regId = regcom[i].id;
                for(let j = 0; j < regcom[i].comunas.length; j++){
                    if(regcom[i].comunas[j]===form.comuna){
                        comId = j;
                    }
                }
            }
        }

        const passwordEncriptado = Md5.hashStr(form.contrasena)
        // const passwordEncriptado = form.contrasena


        const usuario = {
            "nombre": form.nombre,
            "apellido": form.apellido,
            "mail": form.correo,
            "user": form.nombreusuario,
            "password": passwordEncriptado,
            "telefono": form.telefono,
            "calle": "edita tu calle",
            "numero": 111,
            "comuna": comId,
            "region": regId
        }

        fetch(`https://api2-velo.lemichi.cl/api/users/signup`, {
            method: 'POST',
            body: JSON.stringify(usuario),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                return response.json() as Promise<user_response>;
            } else {
                console.log(response.json())
                throw new Error('algo salio mal al crear el usuario en el backend');
            }
        }).then(json => {

            console.log('formulario enviado con exito');
            console.log(form);
            console.log(json);
            navigate("/signIn")

        }).catch(error => {
            console.error(error);
        });

    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }



    return (
        <>
            <div className="Register">
                <aside className='imagenAsideRegister'></aside>
                <div className="login_section">
                    <div className="container">
                        <h2 className='tituloUp'>Regístrate</h2>

                        <form onSubmit={handleSubmit}>
                            <div className='conteiner-name-lastname'>
                                <div className='input-label-name'>
                                    <label htmlFor="nombre">Nombre</label>
                                    <input type="text" name="nombre" id="nombre" value={form.nombre} onChange={handleChange} />
                                    {error.nombre && <span className='error'>Ingresa un nombre, solo letras</span>}
                                </div>
                                <div className='input-label-lastname'>
                                    <label htmlFor="apellido">Apellido</label>
                                    <input type="text" name="apellido" id="apellido" value={form.apellido} onChange={handleChange} />
                                    {error.apellido && <span className='error'>Ingresa un apellido, solo letras</span>}
                                </div>
                            </div>
                            <div className='input-label'>
                                <label htmlFor="correo">Correo electrónico</label>
                                <input type="text" name="correo" id="correo" value={form.correo} onChange={handleChange} />
                                {error.correo && <span className='error'>Debe ingresar correo válido</span>}
                            </div>
                            <div className='input-label'>
                                <label htmlFor="nombreusuario">Nombre de Usuario</label>
                                <input type="text" name="nombreusuario" id="nombreusuario" value={form.nombreusuario} onChange={handleChange} />
                                {error.nombreusuario && <span className='error'>Ingresar Nombre de Usuario max 20 caracteres</span>}
                            </div>
                            <div className='conteiner-contrasena-telefono'>
                                <div className='input-label-contrasena'>
                                    <label htmlFor="contrasena">Contraseña</label>
                                    <input type="password" name="contrasena" id="contrasena" value={form.contrasena} onChange={handleChange} />
                                    {error.contrasena && <span className='error'> contraseña miníma de 8 a 12 dígitos, contener al menos una mayúscula, un número y un caracter especial (@#$%^&+=)</span>}
                                </div>
                                <div className='input-label-telefono'>
                                    <label htmlFor="telefono">Número de teléfono</label>
                                    <input type="tel" name="telefono" id="telefono" placeholder="987654321" value={form.telefono!} onChange={handleChange} />
                                    {error.telefono && <span className='error'> El telefono debe tener 9 dígitos</span>}
                                </div>
                            </div>
                            <div className='contenedorUbicacion'>
                                <div className='input-label'>
                                    <label htmlFor="region">Región</label>
                                    <select className="regionComuna" name="region" id="region" onChange={handleChange} value={form.region}>
                                        <option value="">Selecciona una Región</option>
                                        {regcom.map((region) => (
                                            <option key={region.region} value={region.region}>
                                                {region.region}
                                            </option>
                                        ))}
                                    </select>
                                    {error.region && <span className='error'>Debes seleccionar una región</span>}
                                </div>
                                <div className='input-label'>
                                    <label htmlFor="comuna">comuna</label>
                                    <select className="regionComuna" name="comuna" id="comuna" onChange={handleChange} value={form.comuna}>
                                        <option value="">Selecciona una Comuna</option>
                                        {regcom
                                            .find((region) => region.region === form.region)
                                            ?.comunas.map((comuna) => (
                                                <option key={comuna} value={comuna}>
                                                    {comuna}
                                                </option>
                                            ))}
                                    </select>
                                    {error.comuna && <span className='error'>Debes seleccionar una comuna</span>}
                                </div>
                            </div>

                            <input type="submit" value="Crear cuenta" className="entrar-link" />

                        </form>

                        <p className='Text-up'>
                            ¿Ya tienes cuenta? <Link to="/signIn" style={{ textDecoration: "none" }}>haz click acá</Link>
                        </p>

                        <div className="separator">
                            <hr />
                            <span>O</span>
                        </div>

                        <div className="login_buttons">
                            <button>
                                <img className="icon-singup" src={iconfb} alt="" />
                                Facebook
                            </button>
                            <button className='buttonG'>
                                <img className="icon-singup" src={iconG} alt="" />
                                Google
                            </button>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default SignUp