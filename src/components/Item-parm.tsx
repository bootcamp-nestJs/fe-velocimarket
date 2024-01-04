import Button from "./Button"
import { Link } from "react-router-dom";
import imagenesprueba from "../json/imagenesprueba.json"
import heart from "../assets/Like.svg"
import chat from "../assets/ChatTeardropDots.svg"
import './item-param.css'
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";

interface PropsItem {
  icons?: boolean,
  vistahome?: boolean,
  nombreuser: string,
  precio: number,
  nombreproduct: string,
  localizacion: string,
  idProductArg: number,
  imagen: string

}



export default function ItemParam({ icons = false, vistahome = false, nombreuser, precio, nombreproduct, localizacion, idProductArg, imagen }: PropsItem) {
  const avatarImages = imagenesprueba.avatar;

  const [idProduct, setIdproduct] = useState<Number>()

  useEffect(() => setIdproduct(idProductArg), [idProductArg])

  const user = useSelector((state: RootState) => state.user)


  const handlefav = () => {
    alert("se agrego a favoritos")
  }
  return (
    <div className="ItemParam">
      <div className="img">
        <img src={imagen} alt="" />
        {user.isAuth &&
          <div>
            {icons &&
              <div className="icons">
                <Button className="w-34" onClick={handlefav}>
                  <img className="redondeado" src={heart} />
                </Button>
                <Button className="w-34">
                  <img className="redondeado" src={chat} />
                </Button>
              </div>} </div>}
      </div>
      {vistahome && <div className="datoscard" >
        <Link to="/profile2" style={{ textDecoration: "none" }}>
          <div className="present_avatar">
            <img className="avatar" src={avatarImages[0].avatar} alt="" />
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
