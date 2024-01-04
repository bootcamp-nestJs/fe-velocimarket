import Header from "../components/header"
import ProfileCard from "../components/Profilefile"
import Footer from "../components/footer"
import confirm from "../assets/confirm-white.svg"
import eliminar from "../assets/icon/cerrar_red.svg"
import imagen from "../assets/img/bicicleta1.png"
import imagen_empty from "../assets/img/carrito_empty.svg"
import './cart.css'
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { deleteCarrito, deleteProducto } from "../redux/carritoSlice"
import { productoCarrito } from "../interfaces/testcart";

export default function Cart( /* {productInfo, checkoutInfo }: CartProps */) {

    const user = useSelector((state: RootState) => state.user)
    const carrito = useSelector((state: RootState) => state.carrito)
    const dispatch = useDispatch(); // el dispatch me permite despachar el reducer
    const navigate = useNavigate();

    let totalProductos = 0;
    carrito.productos.map((producto: productoCarrito) => {
        totalProductos += producto.precio;
    });


    const handleEliminarCart = () => {
        fetch(`https://api2-velo.lemichi.cl/api/cart?id=${carrito.id}`, {
            method: 'DELETE',
            headers: {
                // 'Content-Type': 'application/json',
                Authorization: `Bearer ${user.access_token}`
            }
        }).then(response => {
            if (response.ok) {
                return response.text() as Promise<string>;
            } else {
                console.log(response.text())
                throw new Error('algo salio mal al agregar un producto al carrito en el backend');
            }
        }).then(textoDeleteCart => {
            console.log(textoDeleteCart);
            console.log("ELIMINAMOS EL CARRITO DEL LOCALSTORAGE")
            dispatch(deleteCarrito())
        }).catch(error => {
            console.error(error);
        });
    }
    const handleEliminarProducto = (indexProducto: number) => {
        fetch(`https://api2-velo.lemichi.cl/api/cart/removeProduct?productId=${carrito.productos[indexProducto].id}&cartId=${carrito.id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${user.access_token}`
            }
        }).then(response => {
            if (response.ok) {
                return response.text() as Promise<string>;
            } else {
                console.log(response.text())
                throw new Error('algo salio mal al eliminar un producto al carrito en el backend');
            }
        }).then(textoDeleteCart => {
            console.log(textoDeleteCart);
            console.log("ELIMINAMOS EL PRODUCTO DEL LOCALSTORAGE")
            if (carrito.productos.length === 1) {
                console.log("ELIMINO CARRITO EN API")
                handleEliminarCart()
            }
            else {
                dispatch(deleteProducto(indexProducto))
            }
        }).catch(error => {
            console.error(error);
        });
    }

    const handleCompra = () => {
        navigate("/checkout")
    }

    return (
        <>
            <div>
                {user.isAuth && <Header />}
                {(carrito.productos.length > 0) &&
                    <div className="general-cart">
                        <div className="cont-cart">
                            <div className="title-vaciarCarrito">
                            <div className="title-cart">
                                Resumen de tu compra
                            </div>
                            <Link to="/cart" style={{ textDecoration: "none" }}>
                                <button className="close-button-red" onClick={handleEliminarCart}>
                                    <img className="icon-cart" src={eliminar}></img>
                                    Vaciar Carrito
                                </button>
                            </Link>
                            </div>
                            {carrito.productos.map((producto: productoCarrito, index: number) => {
                                return (
                                    <>                        <div className="cont-profile">
                                        <div className="cont-profile-cart">
                                            <ProfileCard name={"Nombre de vendedor"} location="Locación" rate={0} />
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
                                                        <h3 className="section-information-cart">{producto.nombre}</h3>
                                                        <h3 className="information-value-cart">$ {producto.precio}</h3>
                                                    </div>
                                                </div>
                                                <div>{producto.descripcion}</div>
                                            </div>
                                            <div className="checkout-cart">
                                                <Link to="/cart" style={{ textDecoration: "none" }}>
                                                    <button className="close-button-red" onClick={() => handleEliminarProducto(index)}>
                                                        <img className="icon-cart" src={eliminar}></img>
                                                        Eliminar
                                                    </button>
                                                </Link>
                                            </div>
                                        </div >
                                    </>
                                )
                            })}

                        </div >
                        <div className="checkout-list-cart">
                            <div className="checkout-item">
                                <label className="label">Producto:</label>
                                <div className="text">$ {totalProductos}</div>
                            </div>
                            <div className="checkout-item">
                                <label className="label">Envío:</label>
                                <div className="text">$ {carrito.valorEnvio}</div>
                            </div>
                            <div className="checkout-item">
                                <label className="label">Total:</label>
                                <div className="text">$ {totalProductos + carrito.valorEnvio}</div>
                            </div>
                            <button className="blue-button-cart" onClick={handleCompra}>
                                <img className="icon-cart" src={confirm}></img>
                                Comprar
                            </button>
                        </div>

                    </div>
                }
                {(carrito.productos.length === 0) &&
                    <div className="cont-cart-empty">
                        <div className="title-cart">
                            Resumen de tu compra
                        </div>
                        <div className="container-empty-cart">
                            <div className="product_img_cart">
                                <img src={imagen_empty} alt="Producto_cart" />
                            </div>
                            <h3>
                                Tu carrito está vacío
                            </h3>
                            <h4 className="titulo-empty">
                                Explora las categorías y encuentra la bicicleta para tu nueva aventura!
                            </h4>
                            <Link to="/home" style={{ textDecoration: "none" }}>
                                <button className="blue-button-cart">
                                    Explorar Productos
                                </button>
                            </Link>
                        </div >
                    </div >
                }
                <Footer />
            </div >
        </>
    );

}