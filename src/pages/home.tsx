import Header from "../components/header-register"
import Item from "../components/Item"
import Footer from "../components/footer"
import { Banner } from "../components/banner"
import { Categorias } from "../components/categorias"
import { BannerApp } from "../components/bannerApp"
import informacion from "../json/informativo.json"
import './home.css'
import { Informativo } from "../components/informativoHome"
import ItemParam from "../components/Item-parm"
import { BannerRed } from "../components/bannerRed"


export default function Home() {
  return (
    <div className="Profile">
      <Header />
      <div className="container-banner">
        <Banner />
      </div>
      <Categorias />
      <h1 className="titulosec">Lo más reciente</h1>
      <section className="products">
      <ItemParam nombreuser="cristobalride" precio={12313} tituloproducto="Canyon Ultimate CF SLX 9 Di2 2023" localizacion="Ñuñoa" icons={true} vistahome={true} />
      <Item icons={true} vistahome={true} />
      <h1 className="titulosec2">Te puede interesar</h1><ItemParam nombreuser="cristobalride" precio={12313} tituloproducto="Canyon Ultimate CF SLX 9 Di2 2023" localizacion="Ñuñoa" icons={true} vistahome={true} />
      <Item icons={true} vistahome={true} />
      {/* <Link to="/file-product" style={{ textDecoration: "none" }}><Item icons={true} vistahome={true} /></Link>
      <Link to="/file-product" style={{ textDecoration: "none" }}><Item icons={true} vistahome={true} /></Link>
      </section>
      <section className="products">
      <Link to="/file-product" style={{ textDecoration: "none" }}><Item icons={true} vistahome={true} /></Link>
      <Link to="/file-product" style={{ textDecoration: "none" }}><Item icons={true} vistahome={true} /></Link>
      <Link to="/file-product" style={{ textDecoration: "none" }}><Item icons={true} vistahome={true} /></Link>
      </section>
      <h1 className="titulosec2">Te puede interesar</h1>
      <section className="products">
      <Link to="/file-product" style={{ textDecoration: "none" }}><Item icons={true} vistahome={true} /></Link>
      <Link to="/file-product" style={{ textDecoration: "none" }}><Item icons={true} vistahome={true} /></Link>
      <Link to="/file-product" style={{ textDecoration: "none" }}><Item icons={true} vistahome={true} /></Link> */}
      </section>
      <BannerApp></BannerApp>
      {
        informacion.flyer.map((flyer,index) => {
          return(
            <Informativo titulo={flyer.Titulo} descripcion={flyer.descripcion} imagen={flyer.imagen} invertido={index%2===1?true:false} key={"info"+index}></Informativo>
          )
        })
      }
      <BannerRed></BannerRed>
      <Footer />
    </div>
  )
}