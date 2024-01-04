import ProfileCard from "../components/Profilefile"
import Footer from "../components/footer";
import Header from "../components/header";
import confirm from "../assets/confirm-white.svg"
import imagen from "../assets/img/product.png"
import "./checkout.css"
import { Link } from "react-router-dom";


//CODIGO EN PENDIENTE SE BEDE REVISAR 

export function Checkout() {

    return (
        <>
            <Header />
            <div className="checkout-checkout">
                <aside className='Asidecheckout'>
                    <div className='tituloUp-checkout'>
                        <h2>Resumen de tu compra</h2>
                    </div>
                    <form /* onSubmit={handleSubmit} */ className="conteiner-form">
                        <h4 className='title-section-checkout'>Métodos de pago</h4>
                        <div className="container-pay">
                            <div className="radio-button">
                                <input type="radio" name="1" id="1" /* value={form.apellido} onChange={handleChange} */ />
                                <img src="src/assets/img/pago/google.png" alt="" />
                            </div>
                            <div className="radio-button">
                                <input type="radio" name="1" id="1" /* value={form.apellido} onChange={handleChange} */ />
                                <img src="src/assets/img/pago/mastercard.png" alt="" />
                            </div>
                            <div className="radio-button">
                                <input type="radio" name="1" id="1" /* value={form.apellido} onChange={handleChange} */ />
                                <img src="src/assets/img/pago/paypal.png" alt="" />
                            </div>
                            <div className="radio-button">
                                <input type="radio" name="1" id="1" /* value={form.apellido} onChange={handleChange} */ />
                                <img src="src/assets/img/pago/visa.png" alt="" />
                            </div>
                        </div>

                        <h4 className='title-section-checkout'>Datos personales</h4>
                        <div className='conteiner-generico'>
                            <div className='input-checkout'>
                                <label htmlFor="nombre">Nombre*</label>
                                <input type="text" name="nombre" id="nombre" /* value={form.nombre} onChange={handleChange}  */ />
                                {/* {error.nombre && <span className='error'>Ingresa un nombre, solo letras</span>} */}
                            </div>
                            <div className='input-checkout'>
                                <label htmlFor="apellido">Apellido*</label>
                                <input type="text" name="apellido" id="apellido" /* value={form.apellido} onChange={handleChange} */ />
                                {/* {error.apellido && <span className='error'>Ingresa un apellido, solo letras</span>} */}
                            </div>
                        </div>
                        <div className='conteiner-generico'>
                            <div className='input-checkout'>
                                <label htmlFor="rut">Rut*</label>
                                <input type="any" name="rut" id="rut" /* value={form.rut} onChange={handleChange} */ />
                                {/* {error.nombreusuario && <span className='error'>Ingrese rut valido</span>} */}
                            </div>
                            <div className='input-checkout'>
                                <label htmlFor="telefono">Número de teléfono</label>
                                <input type="tel" name="telefono" id="telefono" placeholder="987654321" /* value={form.telefono!} onChange={handleChange} */ />
                                {/* {error.telefono && <span className='error'> El telefono debe tener 9 dígitos</span>} */}
                            </div>
                        </div>
                        <div className="container-envio">
                            <h4 className='title-section-checkout'>Datos para envio</h4>
                            <div className='input-checkout'>
                                <label htmlFor="direccion">Dirección</label>
                                <input type="text" name="direccion" id="direccion" /* value={form.direccion} onChange={handleChange}  */ />
                                {/*   {error.direccion && <span className='error'>Ingrese mayusuculas, mínusculas y números</span>} */}
                            </div>
                            <div className='input-checkout'>
                                <label htmlFor="calle">Departamento o piso (opcional)</label>
                                <input type="text" name="calle" id="calle" /* value={form.calle} onChange={handleChange} */ />
                                {/*  {error.calle && <span className='error'>Ingrese mayusuculas, mínusculas y números</span>} */}
                            </div>
                            <div className='input-checkout'>
                                <label htmlFor="ciudad">Ciudad</label>
                                <input type="text" name="ciudad" id="ciudad" /* value={form.ciudad} onChange={handleChange}  */ />
                                {/* {error.ciudad && <span className='error'>Ingrese mayusuculas, mínusculas y números</span>} */}
                            </div>
                            <div className="conteiner-generico">
                                <div className='input-checkout'>
                                    <label htmlFor="comuna">Comuna</label>
                                    <input type="text" name="comuna" id="comuna" /* value={form.ciudad} onChange={handleChange}  */ />
                                    {/* {error.ciudad && <span className='error'>Ingrese mayusuculas, mínusculas y números</span>} */}
                                </div>
                                <div className='input-checkout'>
                                    <label htmlFor="region">Región</label>
                                    <input type="text" name="region" id="region" /* value={form.ciudad} onChange={handleChange}  */ />
                                    {/* {error.ciudad && <span className='error'>Ingrese mayusuculas, mínusculas y números</span>} */}
                                </div>
                            </div>
                        </div>
                        <div className='input-checkout'>
                            <label htmlFor="correo">Correo electrónico</label>
                            <input type="text" name="correo" id="correo" /* value={form.correo} onChange={handleChange} */ />
                            {/* {error.correo && <span className='error'>Debe ingresar correo válido</span>} */}
                        </div>
                    </form>
                </aside>

                <div className="checkout-product-calification">
                    <ProfileCard name="Nombre de usuario propio" location="Locación" rate={0} />
                    <div className="checkout-calification">
                        <div className="content-check">
                            <div className="checkout_view_calification">
                                <div className="checkout_img_calification">
                                    <img src={imagen} alt="Producto_calification" />
                                </div>
                            </div>
                            <div className="checkout_information_calification">
                                <h3 className="checkout-calification">Bicicleta de ruta Giant Defy Advanced</h3>{/* realizar js */}
                                <h3 className="checkout-value-calification">$1.000.000</h3>{/* realizar js */}
                            </div>
                        </div>
                        <div className="check-list2">
                            <div className="check-item2">
                                <label className="label">Producto:</label>
                                <div className="text">$1.000.000{/* {Valorproducto} */}</div>
                            </div>
                            <div className="check-item2">
                                <label className="label">Envío:</label>
                                <div className="text">$0{/* {Valorenvio} */}</div>
                            </div>
                            <div className="check-item2">
                                <label className="label">Total:</label>
                                <div className="text">$1.000.000{/* {Valorcompra} */}</div>
                            </div>
                        </div>
                        <Link to="/Calification" style={{ textDecoration: "none" }}>
                        <button className="blue-button-check">
                            <img className="icon-check" src={confirm}></img>
                            Comprar
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}