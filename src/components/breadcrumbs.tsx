import { Link, useLocation } from "react-router-dom";
import "./breadcrumbs.css"

export default function Breadcrumbs() {
  const location = useLocation();
  let currentlink = "";
  const crumbs = location.pathname.split("/").filter(crumb => crumb !== "").map(crumb => {
      currentlink += `/${crumb}`; // Usar += para concatenar

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentlink}>{crumb}</Link>
        </div>
      );
    });

  return (
    <div className="breadcrumbs">
        {crumbs}
    </div>
  );
}