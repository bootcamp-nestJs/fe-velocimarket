import Header from "../components/header"
import Footer from "../components/footer"
import ItemParam from "../components/Item-parm"
import { useEffect, useState } from "react"
import { testProduct } from "../interfaces/testproduct"
import SelectorSection from "../components/SelectorSection"
import "./results-search.css"

// result es la vista que te arroga cuando buscas palabras en el buscador 

export default function Results() {

    const [listaProductos, setlistaProductos] = useState<testProduct[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;


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

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = listaProductos.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    return (
        <>
            <Header />
            <div>
                <div className="separator"></div>
            <div className="content-conta-result">
                <aside className='container-selector'>
                    <SelectorSection title="Tipo de bicicleta" options={[
                        { label: "Carretera", value: "carretera" },
                        { label: "Montaña", value: "montana" },
                        { label: "Gravel", value: "gravel" },
                        { label: "Urbana", value: "urbana" },
                        { label: "Eléctrica", value: "electrica" },
                        { label: "Plegable", value: "plegable" },
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
                            <ItemParam
                                nombreuser={"usuario" + index}
                                precio={producto.precio}
                                nombreproduct={producto.nombre}
                                localizacion={"localización" + index}
                                key={`producto-interes-${index}`}
                                icons={true}
                                vistahome={true}
                            />
                        ))
                    }
                    </div>
                    <div className="pagination">
                        {[...Array(Math.ceil(listaProductos.length / productsPerPage))].map((_, index) => (
                            <button  className={`button-pagination ${currentPage === index + 1 ? 'active' : ''}`} key={index} onClick={() => paginate(index + 1)}>
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
                <Footer />
            </div>
        </>
    )
}