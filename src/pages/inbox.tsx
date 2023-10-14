import Header from "../components/header"
import Footer from "../components/footer"
import imgMessage from "../assets/img/imagen message.png"
import paperplane from "../assets/paper-plane.svg"
import bici from "../assets/img/product.png"
import './cart.css'
import './inbox.css'

export default function Inbox() {
    return (
        <>
            <div className="inbox-page-cont">
                <Header />
                <div className="title-inbox">
                    <h2>Bandeja de Mensajes</h2>
                </div>
                <div className="cont-inbox">
                    <div className="cont-messages">
                        <div className="message">
                            <img className="avatar-inbox" /* src={avatarinbox} */></img>
                            <div className="user-message">
                                <h5>Nombre usuario</h5>
                                <a className="location-message">Location</a>
                            </div>
                        </div>
                        <div className="message">
                            <img className="avatar-inbox" /* src={avatarinbox} */></img>
                            <div className="user-message">
                                <h5>Nombre usuario</h5>
                                <a className="location-message">Location</a>
                            </div>
                        </div>
                        <div className="message">
                            <img className="avatar-inbox" /* src={avatarinbox} */></img>
                            <div className="user-message">
                                <h5>Nombre usuario</h5>
                                <a className="location-message">Location</a>
                            </div>
                        </div>
                        <div className="message">
                            <img className="avatar-inbox" /* src={avatarinbox} */></img>
                            <div className="user-message">
                                <h5>Nombre usuario</h5>
                                <a className="location-message">Location</a>
                            </div>
                        </div>
                        <div className="message">
                            <img className="avatar-inbox" /* src={avatarinbox} */></img>
                            <div className="user-message">
                                <h5>Nombre usuario</h5>
                                <a className="location-message">Location</a>
                            </div>
                        </div>
                    </div>

                    <div className="message-view-zone">
                        <div>
                        <img className="img-message" src={imgMessage}></img>
                        <h5>comienza tu conversación</h5>
                        </div>
                        <div className="send-text">
                            <input type="text" className="input-message" placeholder="Escribe tu mensaje" />
                            <img className="icon-message-zone" src={paperplane} />
                        </div>
                    </div>
                    <div className="message-product-view">
                        <img className="img-product-message"src={bici}/>
                        <div className="precio-message">Precio</div>
                        <div className="text-product-message">Título de producto para la venta del producto en mucho</div>
                    </div>
                </div>
                <div className="footer-inbox">
                <Footer />
                </div>
            </div>
        </>
    )
}