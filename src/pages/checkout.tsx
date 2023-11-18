import { checkout } from "../interfaces/testcheckout";
import { user_response } from "../interfaces/testuser";
import { validarApellido, validarEmail, validarNombre, validarTelefono } from "../validadores/validadores";


//CODIGO EN PENDIENTE SE BEDE REVISAR 

function checkout() {

    const validarInputs = (inputForm: checkout) => {

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
            "calle": "san juan de PEPITO",
            "número": 742,
            "comuna": "san juan de PEPITO",
            "region": "san juan de PEPITO"
        }
        console.log(usuario)
        fetch(`https://api2-velo.lemichi.cl/api/users/signup`, {
            method: 'POST',
            body: JSON.stringify(usuario),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.status == 201) {
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
                                    <label htmlFor="nombre">Nombre*</label>
                                    <input type="text" name="nombre" id="nombre" value={form.nombre} onChange={handleChange} />
                                    {error.nombre && <span className='error'>Ingresa un nombre, solo letras</span>}
                                </div>
                                <div className='input-label-lastname'>
                                    <label htmlFor="apellido">Apellido*</label>
                                    <input type="text" name="apellido" id="apellido" value={form.apellido} onChange={handleChange} />
                                    {error.apellido && <span className='error'>Ingresa un apellido, solo letras</span>}
                                </div>
                            </div>
                            <div className='conteiner-rut-fono'>
                                <div className='input-label-rut'>
                                    <label htmlFor="rut">Rut*</label>
                                    <input type="any" name="rut" id="rut" value={form.rut} onChange={handleChange} />
                                    {error.nombreusuario && <span className='error'>Ingrese rut valido</span>}
                                </div>
                                <div className='input-label-telefono'>
                                    <label htmlFor="telefono">Número de teléfono</label>
                                    <input type="number" name="telefono" id="telefono" placeholder="987654321" value={form.telefono!} onChange={handleChange} />
                                    {error.telefono && <span className='error'> El telefono debe tener 9 dígitos</span>}
                                </div>
                            </div>
                            <div>
                                <h2 className='title-personal-information'>Datos personales</h2>
                                <div className='input-label-direccion'>
                                    <label htmlFor="direccion">Dirección</label>
                                    <input type="text" name="direccion" id="direccion" value={form.direccion} onChange={handleChange} />
                                    {error.direccion && <span className='error'>Ingrese mayusuculas, mínusculas y números</span>}
                                </div>
                                <div className='input-label-calle'>
                                    <label htmlFor="calle">Calle y número</label>
                                    <input type="text" name="calle" id="calle" value={form.calle} onChange={handleChange} />
                                    {error.calle && <span className='error'>Ingrese mayusuculas, mínusculas y números</span>}
                                </div>
                                <div className='input-label-ciudad'>
                                    <label htmlFor="ciudad">Ciudad</label>
                                    <input type="text" name="ciudad" id="ciudad" value={form.ciudad} onChange={handleChange} />
                                    {error.ciudad && <span className='error'>Ingrese mayusuculas, mínusculas y números</span>}
                                </div>
                            </div>
                            <div className='input-label'>
                                <label htmlFor="correo">Correo electrónico</label>
                                <input type="text" name="correo" id="correo" value={form.correo} onChange={handleChange} />
                                {error.correo && <span className='error'>Debe ingresar correo válido</span>}
                            </div>

                            <input type="submit" value="Crear cuenta" className="entrar-link" />

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}