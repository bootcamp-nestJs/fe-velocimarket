import Button from "./Button";
import { Link } from "react-router-dom";
import configuracion2 from "../assets/icon/Configuración 2.svg";
import avatarDefault from "../assets/img/avatardefault.png";
import star from "../assets/icon/star.svg";
import heart from "../assets/Like.svg";
import heartcomplete from "../assets/icon/hearthcomplete.svg";
import chat from "../assets/ChatTeardropDots.svg";
import './item-param.css';
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../redux/favoriteSlice';

interface PropsItem {
  avatar: string;
  icons?: boolean;
  vistahome?: boolean;
  vistaprofile2?: boolean;
  nombreuser: string;
  precio: number;
  nombreproduct: string;
  localizacion: string;
  idProductArg: number;
  imagen: string;
}

export default function ItemParam({ icons = false, vistahome = false, vistaprofile2 = false, nombreuser, precio, nombreproduct, localizacion, idProductArg, imagen, avatar }: PropsItem) {
  /* const avatarImages = imagenesprueba.avatar; */

  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.favorites);

  const isFavorite = favorites.includes(idProductArg);

  const [idProduct, setIdproduct] = useState<Number>()

  useEffect(() => setIdproduct(idProductArg), [idProductArg])

  const user = useSelector((state: RootState) => state.user)

  const calification = "4.5"

  const handlefav = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(idProductArg));
    } else {
      alert("se agrego a favoritos")
      dispatch(addToFavorites(idProductArg));
    }
  }

  const handleEditProduct = () => {
    alert("ir a editar producto")
  }

  return (
    <div className="ItemParam">
      <div className="img">
        <Link to={`/file-product/${idProductArg}`} style={{ textDecoration: "none" }}>
          <img src={imagen} alt="" />
        </Link>
        {!vistahome && !vistaprofile2 && (
          <>
            <div className="container-star">
              <button className="calification-vista" onClick={handleEditProduct}>
                {calification}
                <img className="icon-edit-product" src={star} />
              </button>
            </div>
            <button className="editar-producto">
              <img className="icon-edit-product" src={configuracion2} />
              editar
            </button>
          </>
        )}
        {user.isAuth &&
          <div>
            {icons &&
              <div>
                <div className="container-star">
                  <button className="calification-vista">
                    {calification}
                    <img className="icon-edit-product" src={star} />
                  </button>
                </div>
                <div className="icons">
                  <Button className="w-34" onClick={handlefav}>
                    <img className="redondeado" src={isFavorite? heartcomplete: heart} />
                  </Button>
                  <Button className="w-34">
                    <img className="redondeado" src={chat} />
                  </Button>
                </div>
              </div>
            }
          </div>}
      </div>
      {vistahome  && <div className="datoscard" >
        <Link to="/profile2" style={{ textDecoration: "none" }}>
          <div className="present_avatar">
            <img className="avatar" src={avatar === "" ? avatarDefault : avatar} alt="" />
            <div className="nameloc">
              <span className="username">{nombreuser}</span>
              <span className="localizacion">{localizacion}</span>
            </div>
          </div>
        </Link>
        <span className="price">{"$" + precio}</span>
      </div>}
      {!vistahome &&
        <span className="price">{"$" + precio}</span>
      }
      <Link to={`/file-product/${idProductArg}`} style={{ textDecoration: "none" }}>
        <p className="title_product">{nombreproduct}</p>
      </Link>
    </div>
  )
}
