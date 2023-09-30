import './card.css'
import { obteinProduct } from '../interfaces/create-obtein-product/create-obtein-product'

export function Card({
    nombre,
    descripcion,
    imagen,
    localizacion,
    precio,
    avatar
}: obteinProduct) {

    const mostrarAlerta = () => {
        alert(`ingreso de card ${nombre}`);
    };

    return (
        <>
            <div className='contenedorPublicacion' onClick={mostrarAlerta}> 
                <img className='imagencentral' src={imagen} />
                <img className='imagenavatar' src={avatar} />
                <div className='encabezado'>
                    <div>
                    <div className='valor'>{precio}</div>
                        <h3>{nombre}</h3>
                        <h5>{localizacion}</h5>
                    </div>
                </div>
                <div className='subtextos'>
                    <p>{descripcion}</p>
                </div>
            </div>
        </>

    )
}

