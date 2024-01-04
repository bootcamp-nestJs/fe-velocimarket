import Header from "../components/header"
import ProfileCard from "../components/Profilefile"
import Footer from "../components/footer"
import confirm from "../assets/icon/Truck.svg"
import imagen1 from "../assets/img/bicicleta1.png"
import imagen2 from "../assets/img/Tricota_Jumbo_visma_2023_manga_corta_nueva_talla_M.png"
import imagen3 from "../assets/img/Casco_giro_Aether_MIPS.png"
import './historialCompras.css'
import { useSelector } from "react-redux"
import { useNavigate, /*  useLocation  */ } from "react-router-dom";
import { RootState } from "../redux/store"


export default function Historial(/* {productInfo, checkoutInfo }: CartProps */) {

    const navigate = useNavigate();

    const user = useSelector((state: RootState) => state.user)

    const handleSeguimiento = () => {
        navigate("/Seguimiento")
    }


    return (
        <>
            <div>
                {user.isAuth && <Header />}
                <div className="cont-historial">
                    <div className="title-historial">
                        Historial de compras
                    </div>

                    <div className="container-product-historial">
                        <div className="container_1">
                            <div className="cont-profile">
                                <div className="cont-profile-historial">
                                    <ProfileCard name={"alan_2122"} location="vitacura" rate={0} />
                                </div>
                            </div>
                            <div className="historial-ini">
                                <div className="historial-second">
                                    <div className="product_view_historial">
                                        <div className="product_img_historial">
                                            <img src={imagen1} alt="Producto_historial" />
                                        </div>
                                    </div>
                                    <div className="product_information_historial">
                                        <h3 className="section-information-historial">Bicicleta de ruta Giant Defy Advanced{/* {Título} */}</h3>
                                        <h3 className="information-value-historial">$1000000{/* {Valorproducto} */}</h3>
                                        <h3 className="section-date-historial">Fecha compra: 12/12/2023{/* {Valorproducto} */}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="container-button-historial">
                                <button className="blue-button-historial" onClick={handleSeguimiento}>
                                    <img className="icon-historial" src={confirm}></img>
                                    Seguimiento
                                </button>
                            </div>
                        </div>
                        <div className="container_1">
                            <div className="cont-profile">
                                <div className="cont-profile-historial">
                                    <ProfileCard name={"denis_01"} location="Las condes" rate={0} />
                                </div>
                            </div>
                            <div className="historial-ini">
                                <div className="historial-second">
                                    <div className="product_view_historial">
                                        <div className="product_img_historial">
                                            <img src={imagen2} alt="Producto_historial" />
                                        </div>
                                    </div>
                                    <div className="product_information_historial">
                                        <h3 className="section-information-historial">Bicicleta de ruta Giant Defy Advanced{/* {Título} */}</h3>
                                        <h3 className="information-value-historial">$35000{/* {Valorproducto} */}</h3>
                                        <h3 className="section-date-historial">Fecha compra: 12/12/2023{/* {Valorproducto} */}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="container-button-historial">
                                <button className="blue-button-historial" onClick={handleSeguimiento}>
                                    <img className="icon-historial" src={confirm}></img>
                                    Seguimiento
                                </button>
                            </div>
                        </div>
                        <div className="container_1">
                            <div className="cont-profile">
                                <div className="cont-profile-historial">
                                    <ProfileCard  name={"seba_001"} location="Santiago" rate={0} />
                                </div>
                            </div>
                            <div className="historial-ini">
                                <div className="historial-second">
                                    <div className="product_view_historial">
                                        <div className="product_img_historial">
                                            <img src={imagen3} alt="Producto_historial" />
                                        </div>
                                    </div>
                                    <div className="product_information_historial">
                                        <h3 className="section-information-historial">Bicicleta de ruta Giant Defy Advanced{/* {Título} */}</h3>
                                        <h3 className="information-value-historial">$40000{/* {Valorproducto} */}</h3>
                                        <h3 className="section-date-historial">Fecha compra: 12/12/2023{/* {Valorproducto} */}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="container-button-historial">
                                <button className="blue-button-historial" onClick={handleSeguimiento}>
                                    <img className="icon-historial" src={confirm}></img>
                                    Seguimiento
                                </button>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
            <Footer />
        </>
    );

}