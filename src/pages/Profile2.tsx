import Header from "../components/header"
import ProfileCard from "../components/ProfileCard"
import Button from "../components/Button"
import itemImg from "../assets/img/product.png"
import Footer from "../components/footer"
import { BannerApp } from "../components/bannerApp"
import ItemParam from "../components/Item-parm"
import { useEffect, useState } from "react"
import { testProduct } from "../interfaces/testproduct"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import ItemFollowers from "../components/item-followers"
import data from "../json/imagenesprueba.json";
import "./profile.css"

interface Follower {
  nombre: string;
  apellido: string;
  mail: string;
  user: string;
  password: string;
  telefono: string;
  calle: string;
  número: number;
  comuna: string;
  region: string;
  avatar: string
}

export default function profile2() {

  const user = useSelector((state: RootState) => state.user)

  const [listaProductos, setlistaProductos] = useState<testProduct[]>([]);
  const newtestProducts = listaProductos

  const [followers, setFollowers] = useState<Follower[]>([]);
  const [showProducts, setShowProducts] = useState(true);
  const [showFollowing, setShowFollowing] = useState(false);
  const [showFollowers, setShowFollowers] = useState(false);

  const handleProductsClick = () => {
    setShowProducts(true);
    setShowFollowing(false);
    setShowFollowers(false);
  };

  const handleFollowersClick = () => {
    setShowProducts(false);
    setShowFollowing(false);
    setShowFollowers(true);
  };

  const handleFollowingClick = () => {
    setShowProducts(false);
    setShowFollowing(true);
    setShowFollowers(false);
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

  useEffect(() => {
    setFollowers(data.follower);
  }, []);


  return (
    <div className="Profile">
      {user.isAuth && <Header />}
      <ProfileCard
        avatar={""}
        name={"nombreusuario vendedor"}
        location={"comuna usuario vendedor"}
        rate={5}
        followers={150}
        following={200}
        products={8}
        onProductsClick={handleProductsClick}
        onFollowersClick={handleFollowersClick}
        onFollowingClick={handleFollowingClick}>
        <Button className="w-130">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.8124 4.375C12.8124 4.12636 12.9112 3.8879 13.087 3.71209C13.2628 3.53627 13.5013 3.4375 13.7499 3.4375H14.6874V2.5C14.6874 2.25136 14.7862 2.0129 14.962 1.83709C15.1378 1.66127 15.3763 1.5625 15.6249 1.5625C15.8736 1.5625 16.112 1.66127 16.2878 1.83709C16.4636 2.0129 16.5624 2.25136 16.5624 2.5V3.4375H17.4999C17.7486 3.4375 17.987 3.53627 18.1628 3.71209C18.3386 3.8879 18.4374 4.12636 18.4374 4.375C18.4374 4.62364 18.3386 4.8621 18.1628 5.03791C17.987 5.21373 17.7486 5.3125 17.4999 5.3125H16.5624V6.25C16.5624 6.49864 16.4636 6.7371 16.2878 6.91291C16.112 7.08873 15.8736 7.1875 15.6249 7.1875C15.3763 7.1875 15.1378 7.08873 14.962 6.91291C14.7862 6.7371 14.6874 6.49864 14.6874 6.25V5.3125H13.7499C13.5013 5.3125 13.2628 5.21373 13.087 5.03791C12.9112 4.8621 12.8124 4.62364 12.8124 4.375ZM18.321 8.59375C18.6171 10.3557 18.3456 12.1661 17.5458 13.7637C16.7459 15.3613 15.4591 16.6633 13.871 17.4819C12.283 18.3005 10.4759 18.5933 8.71057 18.3179C6.9453 18.0426 5.31318 17.2134 4.04985 15.9501C2.78652 14.6867 1.95733 13.0546 1.68199 11.2893C1.40666 9.52407 1.69942 7.71696 2.51801 6.1289C3.3366 4.54085 4.63867 3.254 6.23625 2.45415C7.83383 1.6543 9.64425 1.38282 11.4062 1.67891C11.6514 1.72035 11.8701 1.8575 12.0142 2.0602C12.1583 2.2629 12.216 2.51454 12.1745 2.75977C12.1331 3.00499 11.9959 3.2237 11.7932 3.3678C11.5905 3.51189 11.3389 3.56956 11.0937 3.52812C10.7322 3.46779 10.3664 3.43748 9.99992 3.4375C8.76798 3.43667 7.56071 3.78287 6.51643 4.43644C5.47215 5.09001 4.63308 6.02452 4.09535 7.13292C3.55763 8.24131 3.34299 9.47876 3.47603 10.7035C3.60907 11.9282 4.0844 13.0907 4.84758 14.0578C5.45523 13.2849 6.22974 12.6595 7.1132 12.2281C6.55016 11.658 6.16832 10.934 6.0157 10.1474C5.86308 9.36074 5.9465 8.54653 6.25547 7.80718C6.56445 7.06783 7.08517 6.43637 7.75214 5.99223C8.4191 5.5481 9.20252 5.31112 10.0038 5.31112C10.8051 5.31112 11.5886 5.5481 12.2555 5.99223C12.9225 6.43637 13.4432 7.06783 13.7522 7.80718C14.0612 8.54653 14.1446 9.36074 13.992 10.1474C13.8393 10.934 13.4575 11.658 12.8945 12.2281C13.7781 12.6592 14.5527 13.2847 15.1601 14.0578C16.0719 12.9021 16.5661 11.4721 16.5624 10C16.5624 9.63354 16.5321 9.26772 16.4718 8.90625C16.4304 8.66103 16.488 8.40939 16.6321 8.20669C16.7762 8.00399 16.9949 7.86683 17.2402 7.82539C17.4854 7.78395 17.737 7.84162 17.9397 7.98572C18.1424 8.12981 18.2796 8.34853 18.321 8.59375ZM9.99992 11.5625C10.4326 11.5625 10.8555 11.4342 11.2152 11.1938C11.575 10.9535 11.8553 10.6118 12.0209 10.2121C12.1865 9.81241 12.2298 9.37257 12.1454 8.94824C12.061 8.52391 11.8526 8.13413 11.5467 7.8282C11.2408 7.52228 10.851 7.31394 10.4267 7.22953C10.0023 7.14513 9.56252 7.18845 9.1628 7.35401C8.76309 7.51958 8.42145 7.79996 8.18108 8.15969C7.94072 8.51942 7.81242 8.94235 7.81242 9.375C7.81242 9.95516 8.04289 10.5116 8.45313 10.9218C8.86336 11.332 9.41976 11.5625 9.99992 11.5625ZM9.99992 16.5625C11.3557 16.5635 12.6782 16.1421 13.7835 15.357C13.3483 14.762 12.7789 14.2779 12.1214 13.9442C11.464 13.6106 10.7372 13.4367 9.99992 13.4367C9.26267 13.4367 8.53582 13.6106 7.8784 13.9442C7.22099 14.2779 6.65154 14.762 6.21633 15.357C7.32168 16.1421 8.64412 16.5635 9.99992 16.5625Z" fill="black" />
          </svg>
          Seguir
        </Button>
        <Link to="/inbox" style={{ textDecoration: "none" }}>
          <Button className="w-130">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.9797 2.02031C17.7833 1.82389 17.5381 1.68336 17.2694 1.61319C17.0007 1.54302 16.7181 1.54575 16.4508 1.6211L16.4336 1.62656L1.44062 6.17188C1.13609 6.26017 0.865626 6.43903 0.665157 6.68469C0.464688 6.93035 0.343702 7.23119 0.318268 7.54724C0.292835 7.86329 0.364158 8.1796 0.522764 8.45416C0.68137 8.72871 0.919752 8.94852 1.20625 9.08438L7.79375 12.2094L10.9187 18.7969C11.0435 19.0645 11.2422 19.2908 11.4913 19.4492C11.7405 19.6075 12.0298 19.6913 12.325 19.6906C12.3695 19.6906 12.4148 19.6906 12.4602 19.6852C12.776 19.66 13.0764 19.5385 13.321 19.3372C13.5657 19.1359 13.7427 18.8644 13.8281 18.5594L18.3734 3.56641C18.3757 3.56084 18.3776 3.55509 18.3789 3.54922C18.4543 3.28189 18.457 2.99931 18.3868 2.73058C18.3166 2.46185 18.1761 2.21668 17.9797 2.02031ZM12.2656 17.2594L9.63125 11.6977L13.1664 8.1625C13.3425 7.98638 13.4415 7.74751 13.4415 7.49844C13.4415 7.24937 13.3425 7.0105 13.1664 6.83438C12.9903 6.65826 12.7514 6.55931 12.5023 6.55931C12.2533 6.55931 12.0144 6.65826 11.8383 6.83438L8.30312 10.3695L2.74062 7.73438L16.4062 3.59375L12.2656 17.2594Z" fill="black" />
            </svg>
            Mensaje
          </Button>
        </Link>
      </ProfileCard>
      {showProducts && (
      <section className="products">
        {
          newtestProducts.slice(0, 6).map((producto, index) => {
            return (
              <ItemParam
                avatar="algo"
                imagen={producto.img.length! > 0 ? producto.img[0].imagen : itemImg}
                nombreuser={"usuario" + index}
                precio={producto.precio}
                nombreproduct={producto.nombre}
                localizacion={"localización" + index}
                key={`producto-interes-${index}`}
                icons={true} vistahome={false}
                vistaprofile2={true}
                idProductArg={producto.id} />
            )
          })
        }
      </section>)}

      {showFollowing && (
        <section className="following">
          {followers.map((follower, index) => (
            <ItemFollowers
              key={`follower-${index}`}
              user={follower.user}
              comuna={follower.comuna}
              tipo="following"
              nombre={follower.nombre}
              apellido={follower.apellido}
              mail={follower.mail}
              password={follower.password}
              telefono={follower.telefono}
              calle={follower.calle}
              número={follower.número}
              region={follower.region}
              avatar={follower.avatar}
            />
          ))}
        </section>
      )}

      {showFollowers && (
        <section className="followers">
          {followers.map((follower, index) => (
            <ItemFollowers
              key={`follower-${index}`}
              user={follower.user}
              comuna={follower.comuna}
              tipo="following"
              nombre={follower.nombre}
              apellido={follower.apellido}
              mail={follower.mail}
              password={follower.password}
              telefono={follower.telefono}
              calle={follower.calle}
              número={follower.número}
              region={follower.region}
              avatar={follower.avatar}
            />
          ))}
        </section>)}

      <BannerApp></BannerApp>

      <Footer />
    </div>
  )
}