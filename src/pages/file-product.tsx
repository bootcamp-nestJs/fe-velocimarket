import Header from "../components/header"
import Item from "../components/Item"
import Footer from "../components/footer"
import product_img from "../assets/preview.png"
import ProfileCard from "../components/Profilefile"
import paperplane from "../assets/paper-plane.svg"
import heart from "../assets/heart.svg"
import car from "../assets/car-market-white.svg"
import './home.css'
import './file-product.css'


export default function FileProduct() {
    return (
        <>
            <Header />
            <div className="Profile">
                <div className="container-product-file">
                    <div className="product_view">
                        <div className="product_img">
                            <img src={product_img} alt="Producto" />
                        </div>
                        <div className="product_variants">
                            <div className="product_variant_img">
                                <img className="imagen-producto" src={product_img} alt="Producto" />
                            </div>
                            <div className="product_variant_img">
                                <img className="imagen-producto" src={product_img} alt="Producto" />
                            </div>
                            <div className="product_variant_img">
                                <img className="imagen-producto" src={product_img} alt="Producto" />
                            </div>
                            <div className="product_variant_img">
                                <img className="imagen-producto" src={product_img} alt="Producto" />
                            </div>
                            <div className="product_variant_img">
                                <img className="imagen-producto" src={product_img} alt="Producto" />
                            </div>
                            <div className="product_variant_img">
                                <img className="imagen-producto" src={product_img} alt="Producto" />
                            </div>
                            <div className="product_variant_img">
                                <img className="imagen-producto" src={product_img} alt="Producto" />
                            </div>
                            <div className="product_variant_img">
                                <img className="imagen-producto" src={product_img} alt="Producto" />
                            </div>
                        </div>
                    </div>
                    <div className="product_information">
                        <h4 className="section-information">Categorias - Categorias - Categorias</h4>{/* esto debe ser dinamico */}
                        <h3 className="section-information">Título del producto que se está vendiendo on poco detalle</h3>
                        <h3 className="information-value">VALOR DEL PRODUCTO</h3>
                        <ProfileCard name="Nombre de usuario propio" location="Locación" rate={4} />
                        <div className="buttons-file">
                            <button className="blue-button">
                                <img className="icon-car" src={car}></img>
                                Añadir al carrito
                            </button>
                            <div className="second-buttons-file">
                                <button className="trs-button">
                                    <img className="icon-fileProduct" src={paperplane}></img>
                                    Contactar
                                </button>
                                <button className="trs-button">
                                    <img className="icon-fileProduct" src={heart}></img>
                                    Añadir a favoritos
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="information">
                    <div className="description">
                        <h3 className="title-description">Descripción del producto</h3>
                        <div className="description-paragraph">
                            <p className="text-description">Lorem ipsum dolor sit amet consectetur. Integer ornare sed imperdiet ullamcorper vel interdum quam lectus. Netus ut aenean aliquet posuere a eu. Sed netus aliquam viverra morbi viverra imperdiet augue. Pellentesque imperdiet tortor fusce dolor molestie aenean at libero. Vitae sit non diam eu. Diam facilisi.</p>
                        </div>
                    </div>
                    <div className="additional-Information">
                        <h3>Información adicional</h3>
                        <div className="section-information">
                            <span>Tamaño/Talla</span>
                            <span>{/* {valorvariable} */}----------------</span>
                        </div>
                        <div className="section-information">
                            <span>Estado</span>
                            <span>{/* {valorvariable} */}----------------</span>
                        </div>
                        <div className="section-information">
                            <span>Categoría</span>
                            <span>{/* {valorvariable} */}----------------</span>
                        </div>
                        <div className="section-information">
                            <span>Material del cuadro</span>
                            <span>{/* {valorvariable} */}----------------</span>
                        </div>
                        <div className="section-information">
                            <span>Componentes</span>
                            <span>{/* {valorvariable} */}----------------</span>
                        </div>
                    </div>
                </div>

                <h1 className="titulosec2">Te puede interesar</h1>
                <section className="products">
                    <Item icons={true} vistahome={true} />
                    <Item icons={true} vistahome={true} />
                    <Item icons={true} vistahome={true} />
                </section>
                <Footer />
            </div>
        </>
    )
}