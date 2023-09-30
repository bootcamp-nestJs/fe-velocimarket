import './categorias.css'

interface CategoryProps {
    categoria: string,
    imagen_cat: string
}
export function Categoria({
    categoria,
    imagen_cat
}: CategoryProps
) {
    return (
        <div className='categoria'>
            <img src={imagen_cat} alt="" />
            <p>{categoria}</p>
        </div>
    )
}