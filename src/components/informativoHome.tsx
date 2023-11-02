import './informativoHome.css'

interface PropsInform  { 
    titulo:string,
    descripcion: string,
    imagen:string,
    invertido:boolean
}

export function Informativo({titulo, descripcion, imagen,invertido}:PropsInform) {
    return (
        <>
            { !invertido &&
            <div className="contenedorInformativo">
                <div className='contenedortextosInfor'>
                    <h3 className='tituloinformativo'>{titulo}</h3>
                    <p className='textoInformativo'>{descripcion}</p>
                </div>
                <div><img src={imagen} className='imagenInformativo'/></div>
            </div>
            }
            { invertido &&
            <div className="contenedorInformativo">
            <div><img src={imagen} className='imagenInformativo'/></div>
                <div className='contenedortextosInfor'>
                    <h3 className='tituloinformativo'>{titulo}</h3>
                    <p className='textoInformativo'>{descripcion}</p>
                </div>
            </div>
            }
        </>
    )
}