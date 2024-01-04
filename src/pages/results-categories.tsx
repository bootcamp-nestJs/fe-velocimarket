import Header from "../components/header"
import Footer from "../components/footer"
import './results-categories.css'
import { BannerCategories } from "../components/bannerCategories"
import { BannerApp } from "../components/bannerApp";
import ItemParam from "../components/Item-parm";
import { useEffect, useState } from "react";
import { testProduct } from "../interfaces/testproduct";
import SelectorSection from "../components/SelectorSection";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import HeaderRegister from "../components/header-register";
import itemImg from "../assets/img/product.png"


export default function ResultsCategories() {

    const user = useSelector((state: RootState) => state.user);
    const [listaProductos, setlistaProductos] = useState<testProduct[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;


    useEffect(() => {
        const storedSearchText = localStorage.getItem('searchText');
        console.log('Stored Search Text:', storedSearchText);
    }, []);

    useEffect(() => {
        fetch(`https://api2-velo.lemichi.cl/api/products?pag=1`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${user.access_token}`
            },
        }).then(response => {
            return response.json() as Promise<testProduct[]>;
        }).then(json => {
            console.log(json);
            setlistaProductos(json)
        }).catch(error => {
            console.error(error);
        });
    }, []);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = listaProductos.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);


    return (
        <div className="results-container">
            {!user.isAuth && <HeaderRegister />}
            {user.isAuth && <Header />}
            <BannerCategories />
            <div className="extended_container">
                <div className="header-results">
                    <div className="text_results">
                        <h4>Filtros: {"texto de busqueda"}</h4>
                        <h4>Resultados: {"6"}</h4>
                    </div>
                    <div className="content-select" placeholder="Ordenar por">
                        <select placeholder="Ordenar por">
                            <option>Ordenar por</option>
                            <option>Mayor precio</option>
                            <option>Menor precio</option>
                            <option>Mas recientes</option>
                            <option>Mas antiguo</option>
                        </select>
                        <i></i>
                    </div>
                </div>
            </div>
            <div className="content-container-result">
                <aside className='container-selector'>
                    <SelectorSection title="Tipo de bicicleta" options={[
                        { label: "Carretera", value: "carretera" },
                        { label: "Montaña", value: "montana" },
                        { label: "Gravel", value: "gravel" },
                        { label: "Urbana", value: "urbana" },
                        { label: "Eléctrica", value: "electrica" },
                        { label: "Plegable", value: "plegable" },
                    ]} />

                    <SelectorSection title="Componentes" options={[
                        { label: "Ruedas y Llantas", value: "Ruedas y Llantas" },
                        { label: "Frenos", value: "Frenos" },
                        { label: "Transmisión y Cadenas", value: "Transmisión y Cadenas" },
                        { label: "Pedales", value: "Pedales" },
                        { label: "Manillares y Potencias", value: "Manillares y Potencias" },
                        { label: "Asientos y Tijas", value: "Asientos y Tijas" },
                        { label: "Suspensión", value: "Suspensión" },
                    ]} />

                    <SelectorSection title="Accesorios" options={[
                        { label: "Luces", value: "Luces" },
                        { label: "Cascos", value: "Cascos" },
                        { label: "Candados y Seguridad", value: "Candados y Seguridad" },
                        { label: "Bolsas y Almacenamiento", value: "Bolsas y Almacenamiento" },
                        { label: "Herramientas", value: "Herramientas" },
                        { label: "Botellas y Portabotellas", value: "Botellas y Portabotellas" },
                    ]} />

                    <SelectorSection title="Indumentaria" options={[
                        { label: "Tricotas", value: "Tricotas" },
                        { label: "Chaquetas", value: "Chaquetas" },
                        { label: "Calzas y Shorts", value: "Calzas y Shorts" },
                        { label: "Guantes", value: "Guantes" },
                        { label: "Gafas", value: "Gafas" },
                        { label: "Zapatos y Cubrezapatos", value: "Zapatos y Cubrezapatos" },
                    ]} />

                    <SelectorSection title="Tamaño / talla" options={[
                        { label: "XXS", value: "xxs" },
                        { label: "XS", value: "xs" },
                        { label: "S", value: "s" },
                        { label: "M", value: "m" },
                        { label: "L", value: "l" },
                        { label: "XL", value: "xl" },
                        { label: "XXL", value: "xxl" },
                    ]} />

                    <SelectorSection title="Estado" options={[
                        { label: "Nuevo", value: "nuevo" },
                        { label: "Semi nuevo", value: "semi-nuevo" },
                        { label: "Usado", value: "usado" },
                    ]} />
                </aside>

                <div className="container-products-pagination">
                    <div className="container-products">
                        {
                            currentProducts.map((producto, index) => (
                                <Link to="/file-product" style={{ textDecoration: "none" }}>
                                    <ItemParam
                                        imagen={producto.img.length! > 0 ? producto.img[0].imagen : itemImg}
                                        icons={true}
                                        vistahome={true}
                                        nombreuser={"usuario" + index}
                                        precio={producto.precio}
                                        nombreproduct={producto.nombre}
                                        localizacion={"localización" + index}
                                        key={`producto-interes-${index}`}
                                        idProductArg={producto.id}
                                    />
                                </Link>
                            ))
                        }
                    </div>
                    <div className="pagination">
                        {[...Array(Math.ceil(listaProductos.length / productsPerPage))].map((_, index) => (
                            <button className={`button-pagination ${currentPage === index + 1 ? 'active' : ''}`} key={index} onClick={() => paginate(index + 1)}>
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <BannerApp></BannerApp>
            <Footer />
        </div>
    );
}


/* falta poder realizar una selección de checkbox y que se actualice la vista según lo seleccionado */