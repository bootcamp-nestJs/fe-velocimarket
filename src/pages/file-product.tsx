import Header from "../components/header"
import Footer from "../components/footer"
import product_img from "../assets/preview.png"
import ProfileCard from "../components/Profilefile"
import paperplane from "../assets/paper-plane.svg"
import heart from "../assets/heart.svg"
import car from "../assets/car-market-white.svg"
import './home.css'
import './file-product.css'
import { BannerApp } from "../components/bannerApp"
import { useEffect, useState } from "react"
import { testProduct } from "../interfaces/testproduct"
import ItemParam from "../components/Item-parm"
import { Link } from "react-router-dom"


const shuffleArray = (array: any[]) => {
    return array.sort(() => Math.random() - 0.5);
};

export default function FileProduct() {

    const [listaProductos, setlistaProductos] = useState<testProduct[]>([]);
    const shuffledtestProducts = shuffleArray(listaProductos).slice(0, 3);

    useEffect(() => {
        fetch(`https://api2-velo.lemichi.cl/api/products`, {
            method: 'GET',
        }).then(response => {
            return response.json() as Promise<testProduct[]>;
        }).then(json => {
            console.log(json);
            setlistaProductos(json)
        }).catch(error => {
            console.error(error);
        });
    }, []);


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
                            <Link to="/Cart" style={{ textDecoration: "none" }}>
                                <button className="blue-button">
                                    <img className="icon-car" src={car}></img>
                                    Añadir al carrito
                                </button>
                            </Link>

                            <div className="second-buttons-file">
                                <Link to="/inbox" style={{ textDecoration: "none" }}>
                                    <button className="trs-button">
                                        <img className="icon-fileProduct" src={paperplane}></img>
                                        Contactar
                                    </button>
                                </Link>
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
                            <p className="text-description-file">Lorem ipsum dolor sit amet consectetur. Integer ornare sed imperdiet ullamcorper vel interdum quam lectus. Netus ut aenean aliquet posuere a eu. Sed netus aliquam viverra morbi viverra imperdiet augue. Pellentesque imperdiet tortor fusce dolor molestie aenean at libero. Vitae sit non diam eu. Diam facilisi.</p>
                        </div>
                    </div>
                    <div className="additional-Information-file">
                        <h3>Información adicional</h3>
                        <div className="sections-files">
                            <div>
                                <div className="section-information">
                                    <span>Marca</span>
                                    <span>{/* {valorvariable} */}----------------</span>
                                </div>
                                <div className="section-information">
                                    <span>Tamaño/Talla</span>
                                    <span>{/* {valorvariable} */}----------------</span>
                                </div>
                                <div className="section-information">
                                    <span>Estado</span>
                                    <span>{/* {valorvariable} */}----------------</span>
                                </div>
                            </div>
                            <div>
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
                    </div>
                </div>

                <h1 className="titulosec2">Te puede interesar</h1>
                <section className="products">
                    {shuffledtestProducts.map((producto, index) => (
                        <Link to="/file-product" style={{ textDecoration: "none" }}>
                            <ItemParam
                                icons={true}
                                vistahome={true}
                                nombreuser={"usuario" + index}
                                precio={producto.precio}
                                nombreproduct={producto.nombre}
                                localizacion={"localización" + index}
                                key={`producto-interes-${index}`}
                            ></ItemParam>
                        </Link>
                    ))}

                </section>

                <BannerApp></BannerApp>
                <Footer />
            </div >
        </>
    )
}