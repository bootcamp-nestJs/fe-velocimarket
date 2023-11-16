import Button from "./Button"
import iconplus from "../assets/Añadir.svg"
import perfil from "../assets/Perfil-button.svg"
import plus from "../assets/plus-circle-bold.svg"
import { Link, /* useLocation */ } from "react-router-dom";
import '../components/header-register.css'
import Buscador from "./buscador";
/* import Breadcrumbs from "./breadcrumbs"; */

export default function HeaderRegister() {

  /* const location = useLocation();
  const showBreadcrumbs = location.pathname !== '/home'; */

  return (
    <>
    <header>
      <div className="logo">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <span>Velomarket</span>
        </Link>
      </div>

      <Buscador></Buscador>

      <div className="buttons">
        <Link to="/signIn" style={{ textDecoration: "none" }}>
          <Button className="white">
            <img className="icon" src={plus} />
            Publica
          </Button>
        </Link>
        <Link to="/signUp" style={{ textDecoration: "none" }}>
          <Button className="orange">
            <img className="icon" src={iconplus} />
            Regístrate
          </Button>
        </Link>

        <Link to="/signIn" style={{ textDecoration: "none" }}>
          <Button className="white">
            <img className="icon" src={perfil} />
            Inicia sesión
          </Button>
        </Link>

        <Button className="transparent">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.8125 10C17.8125 10.2486 17.7137 10.4871 17.5379 10.6629C17.3621 10.8387 17.1236 10.9375 16.875 10.9375H3.125C2.87636 10.9375 2.6379 10.8387 2.46209 10.6629C2.28627 10.4871 2.1875 10.2486 2.1875 10C2.1875 9.75136 2.28627 9.5129 2.46209 9.33709C2.6379 9.16127 2.87636 9.0625 3.125 9.0625H16.875C17.1236 9.0625 17.3621 9.16127 17.5379 9.33709C17.7137 9.5129 17.8125 9.75136 17.8125 10ZM3.125 5.9375H16.875C17.1236 5.9375 17.3621 5.83873 17.5379 5.66291C17.7137 5.4871 17.8125 5.24864 17.8125 5C17.8125 4.75136 17.7137 4.5129 17.5379 4.33709C17.3621 4.16127 17.1236 4.0625 16.875 4.0625H3.125C2.87636 4.0625 2.6379 4.16127 2.46209 4.33709C2.28627 4.5129 2.1875 4.75136 2.1875 5C2.1875 5.24864 2.28627 5.4871 2.46209 5.66291C2.6379 5.83873 2.87636 5.9375 3.125 5.9375ZM16.875 14.0625H3.125C2.87636 14.0625 2.6379 14.1613 2.46209 14.3371C2.28627 14.5129 2.1875 14.7514 2.1875 15C2.1875 15.2486 2.28627 15.4871 2.46209 15.6629C2.6379 15.8387 2.87636 15.9375 3.125 15.9375H16.875C17.1236 15.9375 17.3621 15.8387 17.5379 15.6629C17.7137 15.4871 17.8125 15.2486 17.8125 15C17.8125 14.7514 17.7137 14.5129 17.5379 14.3371C17.3621 14.1613 17.1236 14.0625 16.875 14.0625Z" fill="black" />
          </svg>
        </Button>
      </div>
    </header>
    {/* {showBreadcrumbs && <Breadcrumbs />} */}
   </>
  )
}
