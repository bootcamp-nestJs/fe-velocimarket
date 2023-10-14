import Header from "../components/header-register"
import Item from "../components/Item"
import Footer from "../components/footer"
import { Banner } from "../components/banner"
import { Categorias } from "../components/categorias"
import { Link } from "react-router-dom";

import './home.css'


export default function Home() {
  return (
    <div className="Profile">
      <Header />
      <div className="container-banner">
        <Banner />
      </div>
      <Categorias />
      <h1 className="titulosec">Lo mas reciente de tus amigos</h1>
      <section className="products">
      <Link to="/file-product" style={{ textDecoration: "none" }}><Item icons={true} vistahome={true} /></Link>
      <Link to="/file-product" style={{ textDecoration: "none" }}><Item icons={true} vistahome={true} /></Link>
      <Link to="/file-product" style={{ textDecoration: "none" }}><Item icons={true} vistahome={true} /></Link>
      </section>
      <h1 className="titulosec2">Te puede interesar</h1>
      <section className="products">
      <Link to="/file-product" style={{ textDecoration: "none" }}><Item icons={true} vistahome={true} /></Link>
      <Link to="/file-product" style={{ textDecoration: "none" }}><Item icons={true} vistahome={true} /></Link>
      <Link to="/file-product" style={{ textDecoration: "none" }}><Item icons={true} vistahome={true} /></Link>
      </section>
      <Footer />
    </div>
  )
}