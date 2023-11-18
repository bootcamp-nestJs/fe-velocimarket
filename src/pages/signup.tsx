import './signup.css'
import { useState } from 'react';
import { signUp } from '../interfaces/create-sign-up/sign-up'
import { Link, useNavigate } from "react-router-dom";
import { validarApellido, validarContrasena, validarEmail, validarNombre, validarTelefono, validarUsuario } from '../validadores/validadores';
import { user_response } from '../interfaces/testuser';

function SignUp() {
 
    const navigate = useNavigate();

    const [form, setForm] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        nombreusuario: "",
        contrasena: "",
        telefono: null, //preguntar como poder hacer que quede vacio y pueda ver solo lo que indica el placeholder
    } as signUp);

    const [error, setError] = useState({
        nombre: false,
        apellido: false,
        correo: false,
        nombreusuario: false,
        contrasena: false,
        telefono: false,
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

        return erroresFormulario

    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(validarInputs(form));
        Object.values(validarInputs(form)).includes(true) ? console.log("Error en formulario") : enviarFormulario();

    }

    const enviarFormulario = () => {
        const usuario = {
            "nombre": form.nombre,
            "apellido": form.apellido,
            "mail": form.correo,
            "user": form.nombreusuario,
            "password": form.contrasena,
            "telefono": form.telefono,
            "calle": "edita tu calle",
            "número": 111,
            "comuna": "elige una comuna",
            "region": "elige una región"
        }
        console.log(usuario)
        fetch(`https://api2-velo.lemichi.cl/api/users/signup`, {
            method: 'POST',
            body: JSON.stringify(usuario),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.status==201) {
                return response.json() as Promise<user_response>;
            } else {
                console.log(response.json())
                throw new Error('algo salio mal al crear el usuario en el backend');
            }
        }).then(json => {
            console.log(json);
        }).catch(error => {
            console.error(error);
        });
        
        console.log('formulario enviado con exito');
        console.log(form);

         navigate("/signIn")
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
                                <input type="any" name="nombreusuario" id="nombreusuario" value={form.nombreusuario} onChange={handleChange} />
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
                                    <input type="number" name="telefono" id="telefono" placeholder="987654321" value={form.telefono!} onChange={handleChange} />
                                    {error.telefono && <span className='error'> El telefono debe tener 9 dígitos</span>}
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
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.6667 3.41671C14.6667 3.3062 14.6228 3.20022 14.5446 3.12208C14.4665 3.04394 14.3605 3.00004 14.25 3.00004H12.1667C11.1176 2.94779 10.0905 3.31287 9.30977 4.01553C8.52904 4.71818 8.05815 5.70129 8 6.75004V9.00004H5.91667C5.80616 9.00004 5.70018 9.04394 5.62204 9.12208C5.5439 9.20022 5.5 9.3062 5.5 9.41671V11.5834C5.5 11.6939 5.5439 11.7999 5.62204 11.878C5.70018 11.9561 5.80616 12 5.91667 12H8V17.5834C8 17.6939 8.0439 17.7999 8.12204 17.878C8.20018 17.9561 8.30616 18 8.41667 18H10.9167C11.0272 18 11.1332 17.9561 11.2113 17.878C11.2894 17.7999 11.3333 17.6939 11.3333 17.5834V12H13.5167C13.6093 12.0014 13.6998 11.9718 13.7737 11.9159C13.8477 11.8601 13.9009 11.7812 13.925 11.6917L14.525 9.52504C14.5416 9.46348 14.5438 9.39893 14.5315 9.33637C14.5192 9.27381 14.4927 9.2149 14.4541 9.16419C14.4155 9.11347 14.3657 9.0723 14.3086 9.04384C14.2516 9.01539 14.1888 9.0004 14.125 9.00004H11.3333V6.75004C11.3541 6.54378 11.4509 6.35264 11.605 6.21396C11.7591 6.07527 11.9594 5.99901 12.1667 6.00004H14.25C14.3605 6.00004 14.4665 5.95615 14.5446 5.87801C14.6228 5.79987 14.6667 5.69388 14.6667 5.58338V3.41671Z" fill="#231F20" />
                                </svg>
                                Facebook
                            </button>
                            <button>
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.0834 12.1666C14.8395 13.0153 14.356 13.7756 13.6909 14.3565C13.0257 14.9374 12.2072 15.3141 11.3334 15.4416C10.6501 15.5407 9.95384 15.5008 9.28636 15.3241C8.61888 15.1475 7.99398 14.8378 7.44917 14.4136C6.90436 13.9894 6.45088 13.4595 6.11595 12.8557C5.78102 12.2519 5.57155 11.5867 5.50012 10.8999C5.44478 10.2105 5.53309 9.51706 5.75946 8.86348C5.98584 8.2099 6.34536 7.6104 6.81528 7.10288C7.28521 6.59536 7.85533 6.19086 8.48958 5.91495C9.12384 5.63904 9.80845 5.49773 10.5001 5.49995C11.1482 5.50086 11.7903 5.6253 12.3918 5.86661C12.4865 5.90914 12.5937 5.91477 12.6923 5.8824C12.791 5.85003 12.874 5.78199 12.9251 5.69161L14.1251 3.48328C14.1509 3.43242 14.1665 3.37695 14.1708 3.32007C14.1752 3.26319 14.1682 3.20601 14.1504 3.15181C14.1326 3.09761 14.1043 3.04747 14.067 3.00424C14.0298 2.96102 13.9844 2.92558 13.9334 2.89995C12.6449 2.31654 11.229 2.07073 9.8192 2.18567C8.4094 2.30061 7.05204 2.77252 5.87499 3.55694C4.69794 4.34136 3.73993 5.41249 3.09118 6.66943C2.44244 7.92637 2.12432 9.32776 2.16678 10.7416C2.2489 12.8415 3.11209 14.8351 4.58726 16.3319C6.06243 17.8286 8.04328 18.7207 10.1418 18.8333C12.3401 18.9308 14.4877 18.1548 16.116 16.6748C17.7443 15.1948 18.7212 13.1308 18.8334 10.9333C18.8334 10.7666 18.8334 9.80828 18.8334 9.26661C18.8313 9.15678 18.7867 9.05203 18.709 8.97435C18.6314 8.89666 18.5266 8.85208 18.4168 8.84995H10.9168C10.8063 8.84995 10.7003 8.89385 10.6222 8.97199C10.544 9.05013 10.5001 9.15611 10.5001 9.26661V11.7666C10.5001 11.8771 10.544 11.9831 10.6222 12.0612C10.7003 12.1394 10.8063 12.1833 10.9168 12.1833H15.0834" fill="#231F20" />
                                </svg>
                                Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp