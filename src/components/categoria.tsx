import { useNavigate } from 'react-router-dom'
import './categorias.css'

interface CategoryProps {
    categoria: string,
    imagen_cat: string,
    cat_numb:number,
}
export function Categoria({
    categoria,
    imagen_cat,
    cat_numb
}: CategoryProps
) {
    const navigate = useNavigate()
    const handleClickCategory =() =>{
        if(cat_numb===0) navigate("/results-categories", {state:{key:1 , categoria}})
    }
    return (
        <div className='categoria'  onClick={handleClickCategory}>
            <img className="imagen-categoria" src={imagen_cat} alt="" />
            <p className='pcategorias'>{categoria}</p>
        </div>
    )
}