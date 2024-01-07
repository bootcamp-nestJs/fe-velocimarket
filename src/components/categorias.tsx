import './categorias.css'
import { category } from "../Categorias.json";
import { Categoria } from './categoria';
import { Overflowbox } from '@hffxx/react-overflow-box';
import { Link } from 'react-router-dom';

export function Categorias() {
  return (
    <div>
      <h1 className='titulo-categorias'>Categorías Destacadas</h1>
      <div className='contenedor-categorias'>
        <Overflowbox >
            <div className='categorias'>
              {category.map((categoria, index) => (
/*                 <Link to={{pathname: "/results-categories", query:{thing: "hhhgf"}}} style={{ textDecoration: "none" }}>*/                  <Categoria
                    categoria={categoria.categoria}
                    imagen_cat={categoria.imagen}
                    cat_numb={index}
                    key={"cat" + index}
                  />
                // </Link>
              ))}
            </div>
        </Overflowbox>
      </div >
    </div >
  )
}