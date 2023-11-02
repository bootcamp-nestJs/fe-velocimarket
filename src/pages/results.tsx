import Header from "../components/header"
import Footer from "../components/footer"
import product_img from "../assets/preview.png"
import ProfileCard from "../components/Profilefile"
// import paperplane from "../assets/paper-plane.svg"
// import heart from "../assets/heart.svg"
// import car from "../assets/car-market-white.svg"
import './home.css'
import './file-product.css'
import productos from '../json/test-json.json'
import ItemParam from "../components/Item-parm"



export default function Results() {
    return (
        <>
            <Header />
            <div>
                {productos.products.map((producto) => {
                    return (
                        <>
                            <ItemParam icons={true} vistahome={true} nombreuser={producto.nombre} precio={producto.precio} tituloproducto={producto.descripcion} localizacion={producto.marca}></ItemParam>
                        </>
                    );
                })}
                <Footer />
            </div>
        </>
    )
}