import Header from "../components/header"
import ProfileCard from "../components/Profilefile"
import Footer from "../components/footer"
import confirm from "../assets/confirm-white.svg"
import imagen from "../assets/img/product.png"
import './cart.css'

export default function Cart() {
    return (
        <>
        <div>
            <Header />
            <div className="cont-cart">
                <div className="title-cart">
                    Resumen de tu compra
                </div>    
                <ProfileCard name="Nombre de usuario propio" location="Locación" rate={0} />
                <div className="container-product-cart">
                    <div className="product_view_cart">
                        <div className="product_img_cart">
                            <img src={imagen} alt="Producto_cart" />
                        </div>
                    </div>
                    <div className="product_information_cart">
                        <h3 className="section-information-cart">Título del producto que se va a comprar</h3>{/* realizar js */}
                        <h3 className="information-value-cart">VALOR DEL PRODUCTO</h3>{/* realizar js */}
                        <div>Descripción</div>{/* realizar js */}
                    </div>
                    <div className="checkout">
                        <div className="checkout-list">
                            <div className="checkout-item">
                                <div className="label">Producto:</div>
                                <div className="label">Envío:</div>
                                <div className="label">Total:</div>
                            </div>
                            <div className="checkout-result">
                                <div className="text">Valor del producto</div> {/* realizar js */}
                                <div className="text">Valor del envío</div>{/* realizar js */}
                                <div className="text">Valor total de la compra</div>{/* realizar js */}
                            </div>
                        </div>
                        <button className="blue-button-cart">
                            <img className="icon-cart" src={confirm}></img>{/* realizar js */}
                            Comprar
                        </button>
                    </div>
                </div>
            </div>

            
            <Footer />
        </div>
     </>
    )
}