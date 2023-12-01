import Header from "../components/header"
import ProfileCard from "../components/Profilefile"
import Footer from "../components/footer"
import confirm from "../assets/confirm-white.svg"
import camion from "../assets/icon/Envíos.svg"
import posterior from "../assets/icon/Más adelante.svg"
import seguir from "../assets/icon/Carrito.svg"
import imagen from "../assets/img/product.png"
import './calification.css'
import { Link } from "react-router-dom"

export default function Calification() {
    return (
        <>
            <div>
                <Header />
                <div className="cont-calification">
                    <div className="title-calification">
                        Califica tu experiencia
                    </div>
                    <div className="container-product-calification">
                        <div className="preview-calification">
                            <div className="product_view_calification">
                                <div className="product_img_calification">
                                    <img src={imagen} alt="Producto_calification" />
                                </div>
                            </div>
                            <div className="product_information_calification">
                                <h3 className="section-information-calification">Título del producto que se va a comprar</h3>{/* realizar js */}
                                <h3 className="information-value-calification">VALOR DEL PRODUCTO</h3>{/* realizar js */}
                                <div className="text-description-calification">Vendo mi bicicleta Giant defy Advanced de carbono, ideal para rutas largas. TIene poco uso</div>{/* realizar js */}
                            </div>
                        </div>
                        <div className="buttons-calification">
                            <ProfileCard name="Nombre de usuario propio" location="Locación" rate={5} />
                            <button className="blue-button-calification">
                                <img className="icon-calification" src={confirm}></img>{/* realizar js */}
                                Enviar calificación
                            </button>
                            <button className="white-button-calification">
                                <img className="icon-calification" src={camion}></img>{/* realizar js */}
                                Seguimiento
                            </button>
                            <button className="white-button-calification">
                                <img className="icon-calification" src={posterior}></img>{/* realizar js */}
                                calificar más adelante
                            </button>
                            <Link to="/home" style={{ textDecoration: "none" }}>
                            <button className="white-button-calification">
                                <img className="icon-calification" src={seguir}></img>{/* realizar js */}
                                Seguir comprando
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}