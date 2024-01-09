import Header from "../components/header"
import Footer from "../components/footer"
import ItemParam from "../components/Item-parm"
import { useEffect, useState } from "react"
import { testProduct } from "../interfaces/testproduct"
import { useSelector } from "react-redux"
import itemImg from "../assets/img/product.png"
import { RootState } from "../redux/store"

interface UserState {
    id: number;
    user_name: string;
    email: string;
    isAuth: boolean;
    role: string;
    iat: number;
    access_token: string;
    user_avatar: string
}

export default function Profile1() {
    const user = useSelector((state: RootState) => state.user) as UserState;
    const [listaProductos, setlistaProductos] = useState<testProduct[]>([]);
    const newtestProducts = listaProductos

    useEffect(() => {
        fetch(`https://api2-velo.lemichi.cl/api/products/user?id=${user.id}&pag=1`, {
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

    return (
        <div className="Profile">
            {user.isAuth && <Header />}
            {<section className="products">
                {listaProductos.slice(0, 5).map((producto, index) => (
                    <ItemParam
                        avatar=""
                        imagen={producto.img.length! > 0 ? producto.img[0].imagen : itemImg}
                        nombreuser={"usuario" + index}
                        precio={producto.precio}
                        nombreproduct={producto.nombre}
                        localizacion={"localización" + index}
                        key={`producto-interes-${index}`}
                        icons={true}
                        vistahome={true}
                        vistaprofile2={true}
                        idProductArg={producto.id}
                    />
                ))}
            </section>}
            <Footer />
        </div>
    )
}