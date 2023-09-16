import React, { useState } from 'react';
import iconSearch from './assets/Lupa.svg'
import categoryfile from './Categorias.json'
import { Overflowbox } from '@hffxx/react-overflow-box';
import './buscador.css'


interface CategoryButtton {
  categoria: string;
  link: string;
}

function Search() {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }

  return (
    <header className="header">
      <div className="search-container">
        <img src={iconSearch} className="search-icon"></img>
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <Overflowbox width={1000} height={60}>
        <div className="categories-container">
          {categoryfile.category.map((category: CategoryButtton) => (<div className="card-button" onClick={() => { window.location.href = category.link }}>{category.categoria}</div>))}
        </div>
      </Overflowbox>
    </header>
  );
}

export default Search
