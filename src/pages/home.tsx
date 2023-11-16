import Header from "../components/header"
import HeaderRegister from "../components/header-register"
import Footer from "../components/footer"
import { Banner } from "../components/banner"
import { Categorias } from "../components/categorias"
import { BannerApp } from "../components/bannerApp"
import informacion from "../json/informativo.json"
import { Informativo } from "../components/informativoHome"
import ItemParam from "../components/Item-parm"
import { BannerRed } from "../components/bannerRed"
/* import productos from '../json/prueba.json' */
import './home.css'
import { testProduct } from "../interfaces/testproduct"
import { useEffect, useState } from "react"

const shuffleArray = (array: any[]) => {
  return array.sort(() => Math.random() - 0.5);
};


export default function Home() {

  /* const shuffledProducts = shuffleArray(productos.products).slice(0, 6); // Mezcla aleatoria y toma los primeros 6 elementos */

  const [listaProductos, setlistaProductos] = useState<testProduct[]>([]);
  const shuffledtestProducts = shuffleArray(listaProductos).slice(0, 6); // Mezcla aleatoria y toma los primeros 6 elementos

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
    <div className="Profile">
      {false && <Header />}
      {true && <HeaderRegister />}
      <div className="container-banner">
        <Banner />
      </div>
      <Categorias />
      <h1 className="titulosec">Lo más reciente</h1>
      <section className="products">
        {shuffledtestProducts.map((producto, index) => (
          <ItemParam
            icons={true}
            vistahome={true}
            nombreuser={"usuario" + index}
            precio={producto.precio}
            nombreproduct={producto.nombre}
            localizacion={"localización" + index}
            key={`producto-interes-${index}`}
          ></ItemParam>))}
      </section>
      <h1 className="titulosec2">Te puede interesar</h1>
      <section className="products">
        {shuffledtestProducts.map((producto, index) => (
          <ItemParam
            icons={true}
            vistahome={true}
            nombreuser={"usuario" + index}
            precio={producto.precio}
            nombreproduct={producto.nombre}
            localizacion={"localización" + index}
            key={`producto-interes-${index}`}
          ></ItemParam>))}
      </section>
      <BannerApp></BannerApp>
      {
        informacion.flyer.map((flyer, index) => {
          return (
            <Informativo titulo={flyer.Titulo} descripcion={flyer.descripcion} imagen={flyer.imagen} invertido={index % 2 === 1 ? true : false} key={"info" + index}></Informativo>
          )
        })
      }
      <BannerRed></BannerRed>
      <Footer />
    </div>
  )
}