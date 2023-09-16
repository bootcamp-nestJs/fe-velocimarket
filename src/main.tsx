import React from 'react'
import ReactDOM from 'react-dom/client'
import Sidebar from './barra-nav.tsx'
import Search from './buscador.tsx'
import {Card} from './card.tsx'
import infocard from './infocard.json'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Sidebar />
    <div className='content'>
    <Search/>
    <div className='contenedor'>
    {infocard.publicaciones.map((publicacion) => (
        <Card
          titulocard={publicacion.titulocard}
          valor={publicacion.valor}
          imagen={publicacion.imagen}
          textoaccesibilidad={publicacion.textoaccesibilidad}
          textogenerico={publicacion.textogenerico}
        />
    ))}
    </div>
    </div>
  </React.StrictMode>,
)
