import Header from "../components/header"
import Footer from "../components/footer"
import './results-categories.css'
import { BannerCategories } from "../components/bannerCategories"
import { BannerApp } from "../components/bannerApp";
import ItemParam from "../components/Item-parm";
import { useEffect, useState } from "react";
import { testProduct } from "../interfaces/testproduct";
import SelectorSection from "../components/SelectorSection";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import HeaderRegister from "../components/header-register";
import itemImg from "../assets/img/product.png"
import { useLocation, useNavigate } from "react-router-dom";
import cross from "../assets/icon/Cerrar.svg"
/* import { Navigate } from "react-router-dom"; */


export default function ResultsCategories() {
    const { state } = useLocation();
    const user = useSelector((state: RootState) => state.user);
    const [listaProductos, setlistaProductos] = useState<testProduct[]>([]);
    const [storedSearchText, setStoredSearchText] = useState(localStorage.getItem('searchText'))
    const [currentPage, setCurrentPage] = useState(1);
    const [pag, setPag] = useState("1")
    const productsPerPage = 8;
    const [stringFilter, setStringFilter] = useState(`nombre=${storedSearchText}&pagina=1`)
    const [filtros, setFiltros] = useState(
        {
            categoria: 0,
            subcat: state.key ? state.key : "0",
            pagina: 1,
            ordenar: "3"
        })

    console.log(state.categoria)


    // COPIAR ESTO DENTRO DEL BOTON DELETE
    const navigate = useNavigate()

    const handleDeleteResult = () => {
        setStoredSearchText("")
        localStorage.setItem('searchText', "");
        navigate(0) // Guardar en localStorage
    }



    useEffect(() => {
        setStoredSearchText(localStorage.getItem('searchText')!);
        console.log('Stored Search Text:', storedSearchText);
    }, [storedSearchText]);

    const construirString = () => {

        let newStringFilter = "nombre=" + storedSearchText + "&" + "pagina=" + filtros.pagina

        switch (parseInt(filtros.ordenar)) {
            case 1:
                newStringFilter = newStringFilter.concat("&precio=1")
                break;
            case 2:
                newStringFilter = newStringFilter.concat("&precio=2")
                break;
            case 3:
                newStringFilter = newStringFilter.concat("&fecha=1")
                break;
            case 4:
                newStringFilter = newStringFilter.concat("&fecha=2")
                break;
            default:
                newStringFilter = newStringFilter;
                break;
        }
        switch (filtros.subcat) {
            case "1":
                newStringFilter = newStringFilter.concat("&subcat=1")
                break;
            case "2":
                newStringFilter = newStringFilter.concat("&subcat=2")
                break;
            case "3":
                newStringFilter = newStringFilter.concat("&subcat=3")
                break;
            case "4":
                newStringFilter = newStringFilter.concat("&subcat=4")
                break;
            case "5":
                newStringFilter = newStringFilter.concat("&subcat=6")
                break;
            case "6":
                newStringFilter = newStringFilter.concat("&subcat=6")
                break;
            default:
                newStringFilter = newStringFilter
                break;
        }

        console.log(newStringFilter)
        setStringFilter(newStringFilter)

    }

    const handleOrdenar = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFiltros({
            ...filtros,
            [event.target.name]: event.target.value
        });

    }
    const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.name, event.target.checked)
        setFiltros({
            ...filtros,
            [event.target.name]: event.target.checked ? event.target.value : "0"
        });
        state.key = state.key == 0 ? event.target.value : 0
        event.preventDefault()

    }

    useEffect(() => {

        construirString()
        console.log(stringFilter)

        fetch(`https://api2-velo.lemichi.cl/api/products/filter?${stringFilter}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${user.access_token}`
            },
        }).then(response => {
            if (response.ok) {
                return response.json() as Promise<testProduct[]>;
            }
            else {
                console.log(response.json())
                setlistaProductos([])
                throw new Error('algo salio mal al buscar un producto en el backend');
            }
        }).then(json => {
            console.log(json);
            setlistaProductos(json)
        }).catch(error => {
            console.error(error);
        });
    }, [stringFilter, filtros]);

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
                        <h4>Busqueda:</h4>
                        {storedSearchText !== "" &&
                            <button className="button-results" onClick={handleDeleteResult}>
                                <img src={cross} className="cross-result" />
                                {storedSearchText}
                            </button>
                        }
                        <h4>Resultados: {"6"}</h4>
                    </div>
                    <div className="content-select" placeholder="Ordenar por">
                        <select name="ordenar" onChange={handleOrdenar} placeholder="Ordenar por">
                            <option value={0}>Ordenar por</option>
                            <option value={1}>Mayor precio</option>
                            <option value={2}>Menor precio</option>
                            <option value={3}>Mas recientes</option>
                            <option value={4}>Mas antiguo</option>
                        </select>
                        <i></i>
                    </div>
                </div>
            </div>
            <div className="content-container-result">
                <aside className='container-selector'>
                    <SelectorSection handleChange={handleCheckbox} chequeado={state.key} title="Tipo de bicicleta" options={[
                        { label: "Carretera", value: "1" },
                        { label: "Montaña", value: "2" },
                        { label: "Gravel", value: "3" },
                        { label: "Urbana", value: "4" },
                        { label: "Eléctrica", value: "5" },
                        { label: "Plegable", value: "6" },
                    ]} />

                    <SelectorSection handleChange={handleCheckbox} chequeado={20} title="Componentes" options={[
                        { label: "Ruedas y Llantas", value: "Ruedas y Llantas" },
                        { label: "Frenos", value: "Frenos" },
                        { label: "Transmisión y Cadenas", value: "Transmisión y Cadenas" },
                        { label: "Pedales", value: "Pedales" },
                        { label: "Manillares y Potencias", value: "Manillares y Potencias" },
                        { label: "Asientos y Tijas", value: "Asientos y Tijas" },
                        { label: "Suspensión", value: "Suspensión" },
                    ]} />

                    <SelectorSection handleChange={handleCheckbox} chequeado={20} title="Accesorios" options={[
                        { label: "Luces", value: "Luces" },
                        { label: "Cascos", value: "Cascos" },
                        { label: "Candados y Seguridad", value: "Candados y Seguridad" },
                        { label: "Bolsas y Almacenamiento", value: "Bolsas y Almacenamiento" },
                        { label: "Herramientas", value: "Herramientas" },
                        { label: "Botellas y Portabotellas", value: "Botellas y Portabotellas" },
                    ]} />

                    <SelectorSection handleChange={handleCheckbox} chequeado={20} title="Indumentaria" options={[
                        { label: "Tricotas", value: "Tricotas" },
                        { label: "Chaquetas", value: "Chaquetas" },
                        { label: "Calzas y Shorts", value: "Calzas y Shorts" },
                        { label: "Guantes", value: "Guantes" },
                        { label: "Gafas", value: "Gafas" },
                        { label: "Zapatos y Cubrezapatos", value: "Zapatos y Cubrezapatos" },
                    ]} />

                    <SelectorSection handleChange={handleCheckbox} chequeado={20} title="Tamaño / talla" options={[
                        { label: "XXS", value: "xxs" },
                        { label: "XS", value: "xs" },
                        { label: "S", value: "s" },
                        { label: "M", value: "m" },
                        { label: "L", value: "l" },
                        { label: "XL", value: "xl" },
                        { label: "XXL", value: "xxl" },
                    ]} />

                    <SelectorSection handleChange={handleOrdenar} chequeado={20} title="Estado" options={[
                        { label: "Nuevo", value: "nuevo" },
                        { label: "Semi nuevo", value: "semi-nuevo" },
                        { label: "Usado", value: "usado" },
                    ]} />
                </aside>
                {currentProducts.length > 0 &&
                    <div className="container-products-pagination">
                        <div className="container-products">

                            {
                                currentProducts.map((producto, index) => (
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
                }
                {
                    currentProducts.length === 0 &&
                    <>
                        <h1>NO SE ENCONTRARON PRODUCTOS</h1>
                    </>
                }
            </div>
            <BannerApp></BannerApp>
            <Footer />
        </div>
    );
}


/* falta poder realizar una selección de checkbox y que se actualice la vista según lo seleccionado */