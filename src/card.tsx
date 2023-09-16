import './card.css'

interface CardProps {
    titulocard: string;
    textogenerico: string;
    imagen: string;
    textoaccesibilidad: string;
    valor: string;
}

export function Card({
    titulocard,
    textogenerico,
    imagen,
    textoaccesibilidad,
    valor
}: CardProps) {

    const mostrarAlerta = () => {
        alert(`ingreso de card ${titulocard}`);
    };

    return (
        <>
            <div className='contenedorPublicacion' onClick={mostrarAlerta}> 
                <img className='imagencentral' src={imagen} alt={textoaccesibilidad} />
                <div className='encabezado'>
                    <div>
                    <div className='valor'>{valor}</div>
                        <h3>{titulocard}</h3>
                    </div>
                </div>
                <div className='subtextos'>
                    <p>{textogenerico}</p>
                </div>
            </div>
        </>
    )
}