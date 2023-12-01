import Header from "../components/header"
import ProfileCard from "../components/Profilefile"
import Footer from "../components/footer"
import confirm from "../assets/confirm-white.svg"
import imagen from "../assets/img/bicicleta1.png"
import './cart.css'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"


export default function Cart(/* {productInfo, checkoutInfo }: CartProps */) {
    
    const user = useSelector((state: RootState) => state.user)

    return (
        <>
            <div>
                {user.isAuth && <Header />}
                <div className="cont-cart">
                    <div className="title-cart">
                        Resumen de tu compra
                    </div>
                    <div className="cont-profile">
                        <div className="cont-profile-cart">
                            <ProfileCard name={"Nombre de usuario propio"} location="Locación" rate={0} />
                        </div>
                    </div>
                    <div className="container-product-cart">
                        <div className="cart-ini">
                            <div className="cart-second">
                                <div className="product_view_cart">
                                    <div className="product_img_cart">
                                        <img src={imagen} alt="Producto_cart" />
                                    </div>
                                </div>
                                <div className="product_information_cart">
                                    <h3 className="section-information-cart">Bicicleta de ruta Giant Defy Advanced{/* {Título} */}</h3>
                                    <h3 className="information-value-cart">$1000000{/* {Valorproducto} */}</h3>
                                </div>
                            </div>
                            <div>Vendo mi bicicleta Giant defy Advanced de carbono, ideal para rutas largas. Tiene poco uso{/* {Descripción} */}</div>
                        </div>
                        <div className="checkout-cart">
                            <div className="checkout-list">
                                <div className="checkout-item">
                                    <label className="label">Producto:</label>
                                    <div className="text">hola{/* {Valorproducto} */}</div>
                                </div>
                                <div className="checkout-item">
                                    <label className="label">Envío:</label>
                                    <div className="text">hola{/* {Valorenvio} */}</div>
                                </div>
                                <div className="checkout-item">
                                    <label className="label">Total:</label>
                                    <div className="text">hola{/* {Valorcompra} */}</div>
                                </div>
                            </div>

                            <Link to="/checkout" style={{ textDecoration: "none" }}>
                                <button className="blue-button-cart">
                                    <img className="icon-cart" src={confirm}></img>
                                    Comprar
                                </button>
                            </Link>
                        </div>
                    </div >
                </div >
                <Footer />
            </div >
        </>
    );

}