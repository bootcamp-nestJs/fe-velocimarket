import Header from "../components/header-register"
import Item from "../components/Item"
import Footer from "../components/footer"
import { Banner } from "../components/banner"
import { Categorias } from "../components/categorias"

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
          <Item icons={true} vistahome={true} />
          <Item icons={true} vistahome={true}/>
          <Item icons={true} vistahome={true}/>
      </section>
      <h1 className="titulosec2">Te puede interesar</h1>
      <section className="products">
          <Item icons={true} vistahome={true}/>
          <Item icons={true} vistahome={true}/>
          <Item icons={true} vistahome={true}/>
      </section>
      <Footer />
    </div>
  )
}