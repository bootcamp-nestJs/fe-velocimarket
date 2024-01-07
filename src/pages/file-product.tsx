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
import itemImg from "../assets/img/product.png"
import { productoCarrito, createCarritoResponse } from "../interfaces/testcart"
import ItemParam from "../components/Item-parm"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store"
import HeaderRegister from "../components/header-register"
import { Overflowbox } from "@hffxx/react-overflow-box"
import carritoSlice, { createCarrito, addProductCarrito } from "../redux/carritoSlice"


const shuffleArray = (array: any[]) => {
    return array.sort(() => Math.random() - 0.5);
};

interface Fileprops {
    location: {
        state: {
            productId: number;
        };
    }
}



export default function FileProduct() {

    const user = useSelector((state: RootState) => state.user)
    const dispatch = useDispatch(); // el dispatch me permite despachar el reducer

    const [listaProductos, setlistaProductos] = useState<testProduct[]>([]);
    const shuffledtestProducts = shuffleArray(listaProductos).slice(0, 3);
    const [Producto, setProducto] = useState<testProduct | undefined>();
    const carrito = useSelector((state: RootState) => state.carrito)


    const { productId } = useParams<{ productId: string }>(); // Cambio aquí
    // console.log(productId)
    const navigate = useNavigate();
    useEffect(() => {
        if (productId !== undefined) {
            fetch(`https://api2-velo.lemichi.cl/api/products/product?id=${productId}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${user.access_token}`
                },
            }).then(response => {
                if (response.ok) {
                    return response.json() as Promise<testProduct>;
                } else {
                    console.log(response.json())
                    throw new Error('Producto No encontrado');
                }
            }).then(json => {
                console.log(json);
                setProducto(json)
            }).catch(error => {
                console.error(error);
                // cambiar por EMPTYSTATE
                navigate("/home")
            });
        }
        else {

        }
    }, [productId]);

    useEffect(() => {
        fetch(`https://api2-velo.lemichi.cl/api/products?pag=1`, {
            method: 'GET',
            // headers: {
            //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsInVzZXJfbmFtZSI6InVzdWFyaW8yIiwibWFpbCI6ImFsaS5hbGUuZ2FsbGFyZG9AZ21haWwuY29tIiwiaWF0IjoxNzAxMjg4MzcwfQ.LY3pfKzR3eC3pRGtK0vtYl57PqLprNezLsnTP9YQbH4'
            // },
        }).then(response => {
            return response.json() as Promise<testProduct[]>;
        }).then(json => {
            console.log(json);
            setlistaProductos(json)
        }).catch(error => {
            console.error(error);
        });
    }, []);

    const handleAnadir = () => {
        alert("Agregando a carrito producto " + productId)

        // AQUI DEBE IR EL FECTHPOST PARA CREAR EL CARRITO EN EL BACKEND DEBE RETORNAR EL ID DEL CARRITO
        const nuevoProducto = {
            id: Producto!.id,
            nombre: Producto!.nombre,
            precio: Producto!.precio,
            avatarVendedor: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/ae4816cade1a5b7f29787d0b89610132c72c7747041481c6619b9cc3302c0101._RI_TTW_.jpg",
            ubicacionVendedor: "La Serena",
            /* imgProducto: "aqui va una imagen", */
            imgProducto: Producto!.img[0].imagen,
            descripcion: Producto!.nombre
        }
        if (carrito.productos.length < 1) {
            // Creo el carrito
            const newCarritoApi = {
                valorEnvio: 3000,
                productoId: Producto!.id,
                medioPago: "Onepay"
            }
            console.log(newCarritoApi)
            fetch(`https://api2-velo.lemichi.cl/api/cart`, {
                method: 'POST',
                body: JSON.stringify(newCarritoApi),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.access_token}`
                }
            }).then(response => {
                if (response.ok) {
                    return response.json() as Promise<createCarritoResponse>;
                } else {
                    console.log(response.json())
                    throw new Error('algo salio mal al crear el carrito en el backend');
                }
            }).then(json => {
                console.log("RESPUESTA API NUEVO CARRITO", json)
                console.log("CREANDO CARRITO EN LCOAL STORAGE")
                dispatch(createCarrito({
                    id: json.id,
                    productos: [nuevoProducto],
                    total: json.totalCarrito,
                    valorEnvio: 3000,
                    metodoPago: "Onepay"
                }));
            }).catch(error => {
                console.error(error);
            });

        } else {
            console.log("AGREGO PRODUCTO AL CARRITO")
            // Agrego cada producto si hay mas de uno
            const newAddProduct = {
                productoId: Producto!.id,
                carrotiId: carrito.id
            }
            fetch(`https://api2-velo.lemichi.cl/api/cart/addProduct`, {
                method: 'POST',
                body: JSON.stringify(newAddProduct),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.access_token}`
                }
            }).then(response => {
                if (response.ok) {
                    return response.json() as Promise<createCarritoResponse>;
                } else {
                    console.log(response.json())
                    throw new Error('algo salio mal al agregar un producto al carrito en el backend');
                }
            }).then(json => {
                console.log(json);
                console.log("AGREGAMOS AL LOCAL STORAGE EL NUEVO PRODUCTO")
                dispatch(addProductCarrito(nuevoProducto));
            }).catch(error => {
                console.error(error);
            });
        }

        navigate("/cart");
    }

    const handleFavoritos = () => {
        alert("se añadio a favoritos")
    }

    return (
        <>
            {!user.isAuth && <HeaderRegister />}
            {user.isAuth && <Header />}
            {productId &&
                <div className="Profile">
                    <div className="container-product-file">
                        <div className="product_view">
                            <div className="product_img">
                                <img src={Producto?.img.length! > 0 ? Producto?.img[0].imagen : product_img} alt="Producto" />
                            </div>
                            <Overflowbox>
                                <div className="product_variants">
                                    <div className="product_variant_img">
                                        <img className="imagen-producto" src={Producto?.img.length! > 1 ? Producto?.img[1].imagen : product_img} alt="Producto" />
                                    </div>
                                    <div className="product_variant_img">
                                        <img className="imagen-producto" src={Producto?.img.length! > 2 ? Producto?.img[2].imagen : product_img} alt="Producto" />
                                    </div>
                                    <div className="product_variant_img">
                                        <img className="imagen-producto" src={Producto?.img.length! > 3 ? Producto?.img[3].imagen : product_img} alt="Producto" />
                                    </div>
                                    <div className="product_variant_img">
                                        <img className="imagen-producto" src={Producto?.img.length! > 4 ? Producto?.img[4].imagen : product_img} alt="Producto" />
                                    </div>
                                    <div className="product_variant_img">
                                        <img className="imagen-producto" src={Producto?.img.length! > 5 ? Producto?.img[5].imagen : product_img} alt="Producto" />
                                    </div>
                                </div>
                            </Overflowbox>
                        </div>
                        <div className="product_information">
                            <h4 className="section-information">{Producto?.cat}</h4>{/* esto debe ser dinamico */}
                            <h3 className="section-information">{Producto?.nombre}</h3>
                            <h3 className="information-value">{"$" + Producto?.precio}</h3>
                            <ProfileCard name="Nombre vendedor" location="Locación" rate={4} />
                            {user.isAuth &&
                                <div className="buttons-file">
                                    <Link to="/Cart" style={{ textDecoration: "none" }}>
                                        <button className="blue-button" onClick={handleAnadir}>
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
                                        <button className="trs-button" onClick={handleFavoritos}>
                                            <img className="icon-fileProduct" src={heart}></img>
                                            Añadir a favoritos
                                        </button>
                                    </div>
                                </div>

                            }
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
                                        <span>{Producto?.marca}</span>
                                    </div>
                                    <div className="section-information">
                                        <span>Tamaño/Talla</span>
                                        <span>{Producto?.tamanio}</span>
                                    </div>
                                    <div className="section-information">
                                        <span>Estado</span>
                                        <span>{Producto?.estado}</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="section-information">
                                        <span>Categoría</span>
                                        <span>{Producto?.cat}</span>
                                    </div>
                                    <div className="section-information">
                                        <span>Material del cuadro</span>
                                        <span>{Producto?.material_cuadro}</span>
                                    </div>
                                    <div className="section-information">
                                        <span>Componentes</span>
                                        <span>{Producto?.componentes}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h1 className="titulosec2">Te puede interesar</h1>
                    <section className="products">
                        {shuffledtestProducts.map((producto, index) => (
                            // <Link to="/file-product" style={{ textDecoration: "none" }}>
                            <ItemParam
                                imagen={producto.img.length! > 0 ? producto.img[0].imagen : itemImg}
                                icons={true}
                                vistahome={true}
                                nombreuser={"usuario" + index}
                                precio={producto.precio}
                                nombreproduct={producto.nombre}
                                localizacion={"localización" + index}
                                key={`producto-interes-${index}`}
                                idProductArg={producto!.id}
                            ></ItemParam>
                            // </Link>
                        ))}

                    </section>

                    <BannerApp></BannerApp>
                    <Footer />
                </div >
            }
            <div>No ENCONTRADO</div>
        </>
    )
}