import { Card } from './card.tsx'
import infocard from '../infocard.json'
import './conteiner-cards.css'

function conteinerCards(){

return (<div className='contenedor'>
    {infocard.publicaciones.map((publicacion) => (
        <Card
            nombre={publicacion.nombre}
            precio={publicacion.precio}
            imagen={publicacion.imagen}
            localizacion={publicacion.localizacion}
            descripcion={publicacion.descripcion}
            avatar={publicacion.avatar}
        />
    ))}
</div>)

}

export default conteinerCards