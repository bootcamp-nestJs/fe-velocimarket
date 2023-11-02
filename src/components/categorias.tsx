import './categorias.css'
import { category } from "../Categorias.json";
import { Categoria } from './categoria';
import { Overflowbox } from '@hffxx/react-overflow-box';

export function Categorias() {
  return (
    <div>      
      <h1 className='titulo-categorias'>Categorías Destacadas</h1>
      <div className='contenedor-categorias'>
        <Overflowbox >
          <div className='categorias'>
            {category.map((categoria,index) => (
              <Categoria
                categoria={categoria.categoria}
                imagen_cat={categoria.imagen}
                key={"cat"+index}
              />
            ))}
          </div>
        </Overflowbox>
      </div>
    </div>
  )
}