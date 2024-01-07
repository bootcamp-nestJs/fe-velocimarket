import { Link } from "react-router-dom";
import imagenesprueba from "../json/imagenesprueba.json";
import check from "../assets/check.svg";
import cross from "../assets/icon/Cerrar_white.svg";
import "./item-followers.css";
import "./item-param.css";

interface Users {
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
}

interface ItemFollowersProps extends Users {
  tipo: "follower" | "following";
}

export default function ItemFollowers({ user, comuna, tipo }: ItemFollowersProps) {
  const avatarImages = imagenesprueba.avatar;

  return (
    <div className={`Item-${tipo}`}>
      <div className={`datoscard_${tipo}`}>
        <Link to="/profile2" style={{ textDecoration: "none" }}>
          <div className={`present_${tipo}`}>
            <img className={`avatar_${tipo}`} src={avatarImages[0].avatar} alt="" />
            <div className={`content-text-${tipo}`}>
              <span className={`username-${tipo}`}>{user}</span>
              <span className={`location-${tipo}`}>{comuna}</span>
            </div>
          </div>
        </Link>
      </div>
      <button className={`bluebutton-${tipo}`}>
        <img className="icon_follower" src={tipo === "follower" ? check : cross} alt="" />
        {tipo === "follower" ? "Siguiendo" : "Eliminar"}
      </button>
    </div>
  );
}
