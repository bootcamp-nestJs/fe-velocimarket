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
import itemImg from "../assets/img/product.png"


const shuffleArray = (array: any[]) => {
  return array.sort(() => Math.random() - 0.5);
};

export default function Home() {

  const user = useSelector((state: RootState) => state.user)

  const [listaProductos, setListaProductos] = useState<testProduct[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch(`https://api2-velo.lemichi.cl/api/products?pag=1`, {
      method: 'GET',
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
    // Actualizo el índice cada 6 segundos
    const intervalId = setInterval(() => {
      if (currentIndex + 5 > listaProductos.length - 1) {
        setCurrentIndex(0);
      }
      setCurrentIndex(prevIndex => (prevIndex + 1) % (listaProductos.length / 2));
    }, 6000);

    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
  }, [listaProductos.length]);

  // se obtienen los próximos 6 productos basados en el índice actual
  const slicedProducts = listaProductos.slice(currentIndex, currentIndex + 6);


  // no logre extraer la imagen utilizando solo el userId entregado por el producto
 /*  const getAvatarUrl = async (userId: number): Promise<string | null> => {
    try {
      const apiUrl = `https://api2-velo.lemichi.cl/api/users/${userId}`;
      const response = await fetch(apiUrl);
      const userData = await response.json();
      return userData.user_avatar || null;
    } catch (error) {
      console.error('Error al obtener la URL del avatar:', error);
      return null;
    }
  }; */


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
            avatar=""
            imagen={producto.img.length! > 0 ? producto.img[0].imagen : itemImg}
            icons={true}
            vistahome={true}
            nombreuser={`usuario${currentIndex * 6 + index}`}
            precio={producto.precio}
            nombreproduct={producto.nombre}
            localizacion={`localización${currentIndex * 6 + index}`}
            key={`producto-interes-${currentIndex * 6 + index}`}
            idProductArg={producto.id}
          ></ItemParam>
        ))}
      </section>

      {user.isAuth && <div>
        <h1 className="titulosec2">Publicaciones de tus amigos</h1>
        <section className="products">
          {slicedProducts.map((producto, index) => (
            <ItemParam
              avatar=""
              imagen={producto.img.length! > 0 ? producto.img[0].imagen : itemImg}
              icons={true}
              vistahome={true}
              nombreuser={`usuario${currentIndex * 6 + index}`}
              precio={producto.precio}
              nombreproduct={producto.nombre}
              localizacion={`localización${currentIndex * 6 + index}`}
              key={`producto-interes-${currentIndex * 6 + index}`}
              idProductArg={producto.id}
            ></ItemParam>
          ))}
        </section>
      </div>}

      <h1 className="titulosec2">Te puede interesar</h1>
      <section className="products">
        {slicedProducts.map((producto, index) => (
          <ItemParam
            avatar=""
            imagen={producto.img.length! > 0 ? producto.img[0].imagen : itemImg}
            icons={true}
            vistahome={true}
            nombreuser={`usuario${currentIndex * 6 + index}`}
            precio={producto.precio}
            nombreproduct={producto.nombre}
            localizacion={`localización${currentIndex * 6 + index}`}
            key={`producto-interes-${currentIndex * 6 + index}`}
            idProductArg={producto.id}
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




