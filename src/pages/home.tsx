import { useState, useEffect } from 'react';
import HeaderRegister from "../components/header-register";
import Footer from "../components/footer";
import { Banner } from "../components/banner";
import { Categorias } from "../components/categorias";
import { BannerApp } from "../components/bannerApp";
import informacion from "../json/informativo.json";
import { Informativo } from "../components/informativoHome";
import ItemParam from "../components/Item-parm";
import { BannerRed } from "../components/bannerRed";
import './home.css';
import { testProduct } from "../interfaces/testproduct";
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Header from '../components/header';

const shuffleArray = (array: any[]) => {
  return array.sort(() => Math.random() - 0.5);
};

export default function Home() {

  const user = useSelector((state: RootState) => state.user)

  const [listaProductos, setListaProductos] = useState<testProduct[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch(`https://api2-velo.lemichi.cl/api/products`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsInVzZXJfbmFtZSI6InVzdWFyaW8yIiwibWFpbCI6ImFsaS5hbGUuZ2FsbGFyZG9AZ21haWwuY29tIiwiaWF0IjoxNzAxMjg4MzcwfQ.LY3pfKzR3eC3pRGtK0vtYl57PqLprNezLsnTP9YQbH4'
      },
    }).then(response => {
      return response.json() as Promise<testProduct[]>;
    }).then(json => {
      console.log(json);
      const repeatedProducts = json.concat(json); // Duplicar la lista para garantizar que siempre haya al menos 6 productos
      setListaProductos(shuffleArray(repeatedProducts));
    }).catch(error => {
      console.error(error);
    });
  }, []);

  useEffect(() => {
    // Actualizar el índice cada 6 segundos
    const intervalId = setInterval(() => {
      if (currentIndex + 5 > listaProductos.length - 1) {
        setCurrentIndex(0);
      }
      setCurrentIndex(prevIndex => (prevIndex + 1) % (listaProductos.length / 2));
    }, 6000);

    return () => clearInterval(intervalId); // Limpiar el intervalo al desmontar el componente
  }, [listaProductos.length]);

  // Obtener los próximos 6 productos basados en el índice actual
  const slicedProducts = listaProductos.slice(currentIndex, currentIndex + 6);

  return (
    <div className="Profile">
      {!user.isAuth && <HeaderRegister />}
      {user.isAuth && <Header />}
      <div className="container-banner">
        <Banner />
      </div>
      <Categorias />
      <h1 className="titulosec">Lo más reciente</h1>
      <section className="products">
        {slicedProducts.map((producto, index) => (
          <ItemParam
            icons={true}
            vistahome={true}
            nombreuser={`usuario${currentIndex * 6 + index}`}
            precio={producto.precio}
            nombreproduct={producto.nombre}
            localizacion={`localización${currentIndex * 6 + index}`}
            key={`producto-interes-${currentIndex * 6 + index}`}
          ></ItemParam>
        ))}
      </section>

      {user.isAuth && <div>
        <h1 className="titulosec2">Publicaciones de tus amigos</h1>
        <section className="products">
          {slicedProducts.map((producto, index) => (
            <ItemParam
              icons={true}
              vistahome={true}
              nombreuser={`usuario${currentIndex * 6 + index}`}
              precio={producto.precio}
              nombreproduct={producto.nombre}
              localizacion={`localización${currentIndex * 6 + index}`}
              key={`producto-interes-${currentIndex * 6 + index}`}
            ></ItemParam>
          ))}
        </section>
      </div>}

      <h1 className="titulosec2">Te puede interesar</h1>
      <section className="products">
        {slicedProducts.map((producto, index) => (
          <ItemParam
            icons={true}
            vistahome={true}
            nombreuser={`usuario${currentIndex * 6 + index}`}
            precio={producto.precio}
            nombreproduct={producto.nombre}
            localizacion={`localización${currentIndex * 6 + index}`}
            key={`producto-interes-${currentIndex * 6 + index}`}
          ></ItemParam>

        ))}
      </section>

      <BannerApp></BannerApp>
      {
        informacion.flyer.map((flyer, index) => (
          <Informativo
            titulo={flyer.Titulo}
            descripcion={flyer.descripcion}
            imagen={flyer.imagen}
            invertido={index % 2 === 1 ? true : false}
            key={"info" + index}
          ></Informativo>
        ))
      }
      <BannerRed></BannerRed>
      <Footer />
    </div>
  );
}




