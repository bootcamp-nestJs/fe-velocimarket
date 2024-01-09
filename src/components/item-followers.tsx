import { Link } from "react-router-dom";
import check from "../assets/check.svg";
import anadir from "../assets/icon/Añadir.svg";
import avatarDefault from "../assets/img/avatardefaultsvg.svg" 
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
  avatar: string
}

interface ItemFollowersProps extends Users {
  tipo: "follower" | "following";
}

export default function ItemFollowers({ user, comuna, tipo , avatar }: ItemFollowersProps) {

  return (
    <>
      <div className={`Item-${tipo}`}>
        <div className={`datoscard_${tipo}`}>
          <Link to="/profile2" style={{ textDecoration: "none" }}>
            <div className={`present_${tipo}`}>
              <img className={`avatar_${tipo}`} src={avatar===""?avatarDefault:avatar} alt="" />
              <div className={`content-text-${tipo}`}>
                <span className={`username-${tipo}`}>{user}</span>
                <span className={`location-${tipo}`}>{comuna}</span>
              </div>
            </div>
          </Link>
        </div>
        {/* <button className={`bluebutton-${tipo}`}>
        <img className="icon_follower" src={tipo === "follower" ? check : cross} alt="" />
        {tipo === "follower" ? "Siguiendo" : "Seguir"}
      </button> */}


        {tipo === "follower" ?
          <button className={`bluebutton-follower`}>
            <img className="icon_follower" src={check} alt="" />
            {"Siguiendo"}</button>
          :
          <button className={`bluebutton-following`}>
            <img className="icon_follower" src={anadir} alt="" />
            {"Seguir"}
          </button>
        }

      </div>
    </>
  );
}
