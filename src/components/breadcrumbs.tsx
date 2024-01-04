import { Link, useLocation } from "react-router-dom";
import "./breadcrumbs.css"
import arrow_crumb from "../assets/icon/Flecha izquierda.svg"

export default function Breadcrumbs() {
  const location = useLocation();
  let currentlink = "";
  const crumbs = location.pathname.split("/").filter(crumb => crumb !== "").map(crumb => {
    if(crumb == "home"){
      currentlink = currentlink;
      crumb = "";
    }
    else{
      currentlink += `/${crumb}`; // Usar += para concatenar
    }
    /* console.log(currentlink) */
      return (
        <div className="crumb" key={crumb}>
          <Link to={currentlink}>{crumb}</Link>
        </div>
      );
    });

  return (
    <>
    {currentlink !== "" &&
    <div className="breadcrumbs">
          <Link to="/home"><img src={arrow_crumb} className="arrow"/></Link> 
        {crumbs}
    </div>
    }
    </>
  );
}