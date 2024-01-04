import Header from "../components/header"
import Button from "../components/Button"
import Footer from "../components/footer"
import ItemParam from "../components/Item-parm"
import { useEffect, useState } from "react"
import { testProduct } from "../interfaces/testproduct"
import ProfileCard from "../components/ProfileCard"
import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import itemImg from "../assets/img/product.png"
import { RootState } from "../redux/store"


export default function Profile1() {

  const user = useSelector((state: RootState) => state.user)

  const [listaProductos, setlistaProductos] = useState<testProduct[]>([]);
  const newtestProducts = listaProductos

  const navigate = useNavigate();

  const handleEdition = () => {
    navigate("/edition")
  }

  const handleProductsClick = () => {
    // Lógica para mostrar los productos
    console.log("Mostrar productos");
  };

  const handleFollowClick = () => {
    // Lógica para mostrar a quién sigue el usuario
    console.log("Mostrar a quién sigue el usuario");
  };

  const handleFollowingClick = () => {
    // Lógica para mostrar los seguidores del usuario
    console.log("Mostrar seguidores del usuario");
  };

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

  const ubicacion = "Santiago"

  return (
    <div className="Profile">
      {user.isAuth && <Header />}
      <ProfileCard
        name={user.user_name}
        location={ubicacion}
        rate={5}
        followers={200}
        following={100}
        products={5}
        onProductsClick={handleProductsClick}
        onFollowClick={handleFollowClick}
        onFollowingClick={handleFollowingClick}>          
        <Button className="w-130" onClick={handleEdition}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.125 7.1875H5.47344C5.66734 7.73578 6.02645 8.21048 6.50131 8.54622C6.97617 8.88196 7.54344 9.06225 8.125 9.06225C8.70656 9.06225 9.27383 8.88196 9.74869 8.54622C10.2236 8.21048 10.5827 7.73578 10.7766 7.1875H16.875C17.1236 7.1875 17.3621 7.08872 17.5379 6.91291C17.7137 6.73709 17.8125 6.49864 17.8125 6.25C17.8125 6.00136 17.7137 5.7629 17.5379 5.58708C17.3621 5.41127 17.1236 5.3125 16.875 5.3125H10.7766C10.5827 4.76421 10.2236 4.28952 9.74869 3.95377C9.27383 3.61803 8.70656 3.43774 8.125 3.43774C7.54344 3.43774 6.97617 3.61803 6.50131 3.95377C6.02645 4.28952 5.66734 4.76421 5.47344 5.3125H3.125C2.87636 5.3125 2.6379 5.41127 2.46209 5.58708C2.28627 5.7629 2.1875 6.00136 2.1875 6.25C2.1875 6.49864 2.28627 6.73709 2.46209 6.91291C2.6379 7.08872 2.87636 7.1875 3.125 7.1875ZM8.125 5.3125C8.31042 5.3125 8.49168 5.36748 8.64585 5.47049C8.80002 5.57351 8.92018 5.71992 8.99114 5.89123C9.06209 6.06254 9.08066 6.25104 9.04449 6.43289C9.00831 6.61475 8.91902 6.7818 8.78791 6.91291C8.6568 7.04402 8.48975 7.13331 8.3079 7.16948C8.12604 7.20566 7.93754 7.18709 7.76623 7.11613C7.59493 7.04518 7.44851 6.92501 7.3455 6.77084C7.24248 6.61667 7.1875 6.43542 7.1875 6.25C7.1875 6.00136 7.28627 5.7629 7.46209 5.58708C7.6379 5.41127 7.87636 5.3125 8.125 5.3125ZM16.875 12.8125H15.7766C15.5827 12.2642 15.2236 11.7895 14.7487 11.4538C14.2738 11.118 13.7066 10.9377 13.125 10.9377C12.5434 10.9377 11.9762 11.118 11.5013 11.4538C11.0264 11.7895 10.6673 12.2642 10.4734 12.8125H3.125C2.87636 12.8125 2.6379 12.9113 2.46209 13.0871C2.28627 13.2629 2.1875 13.5014 2.1875 13.75C2.1875 13.9986 2.28627 14.2371 2.46209 14.4129C2.6379 14.5887 2.87636 14.6875 3.125 14.6875H10.4734C10.6673 15.2358 11.0264 15.7105 11.5013 16.0462C11.9762 16.382 12.5434 16.5622 13.125 16.5622C13.7066 16.5622 14.2738 16.382 14.7487 16.0462C15.2236 15.7105 15.5827 15.2358 15.7766 14.6875H16.875C17.1236 14.6875 17.3621 14.5887 17.5379 14.4129C17.7137 14.2371 17.8125 13.9986 17.8125 13.75C17.8125 13.5014 17.7137 13.2629 17.5379 13.0871C17.3621 12.9113 17.1236 12.8125 16.875 12.8125ZM13.125 14.6875C12.9396 14.6875 12.7583 14.6325 12.6042 14.5295C12.45 14.4265 12.3298 14.2801 12.2589 14.1088C12.1879 13.9375 12.1693 13.749 12.2055 13.5671C12.2417 13.3852 12.331 13.2182 12.4621 13.0871C12.5932 12.956 12.7602 12.8667 12.9421 12.8305C13.124 12.7943 13.3125 12.8129 13.4838 12.8839C13.6551 12.9548 13.8015 13.075 13.9045 13.2291C14.0075 13.3833 14.0625 13.5646 14.0625 13.75C14.0625 13.9986 13.9637 14.2371 13.7879 14.4129C13.6121 14.5887 13.3736 14.6875 13.125 14.6875Z" fill="black" />
          </svg>
          Editar
        </Button>
      </ProfileCard>

      <section className="products">
        {
          newtestProducts.slice(0, 5).map((producto, index) => {
            return (
             
                <ItemParam imagen={producto.img.length! > 0 ? producto.img[0].imagen : itemImg} nombreuser={"usuario" + index} precio={producto.precio} nombreproduct={producto.nombre} localizacion={"localización" + index}
                  key={`producto-interes-${index}`} icons={false} vistahome={false} idProductArg={producto.id} />
          
            )
          })
        }
      </section>
      <section className="follow">
        {
          newtestProducts.slice(0, 5).map((producto, index) => {
            return (
              
                <ItemParam imagen={producto.img.length! > 0 ? producto.img[0].imagen : itemImg} nombreuser={"usuario" + index} precio={producto.precio} nombreproduct={producto.nombre} localizacion={"localización" + index}
                  key={`producto-interes-${index}`} icons={false} vistahome={false} idProductArg={producto.id} />
           
            )
          })
        }
      </section>
      <section className="following">
        {
          newtestProducts.slice(0, 5).map((producto, index) => {
            return (
             
                <ItemParam imagen={producto.img.length! > 0 ? producto.img[0].imagen : itemImg} nombreuser={"usuario" + index} precio={producto.precio} nombreproduct={producto.nombre} localizacion={"localización" + index}
                  key={`producto-interes-${index}`} icons={false} vistahome={false} idProductArg={producto.id} />
    
            )
          })
        }
      </section>

      <Footer />
    </div>
  )
}
