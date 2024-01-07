/* import { useNavigate } from 'react-router-dom'
export default function Buscador() {

    const navigate = useNavigate();
    const buscar = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key == "Enter") {
            alert("buscando");
            navigate('/results-categories');
        }
    }


    return (
        <div className="search">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.7143 11.7857L10.1172 9.1875C10.8959 8.17276 11.2595 6.89981 11.1341 5.62688C11.0088 4.35394 10.404 3.17634 9.44231 2.33296C8.48065 1.48958 7.2342 1.04358 5.95579 1.08542C4.67739 1.12726 3.46276 1.65381 2.55831 2.55826C1.65385 3.46271 1.1273 4.67734 1.08546 5.95575C1.04362 7.23415 1.48963 8.48061 2.33301 9.44226C3.17639 10.4039 4.35399 11.0088 5.62692 11.1341C6.89986 11.2594 8.17281 10.8959 9.18755 10.1172L11.7868 12.717C11.8479 12.7781 11.9204 12.8265 12.0001 12.8595C12.0799 12.8926 12.1654 12.9096 12.2517 12.9096C12.338 12.9096 12.4235 12.8926 12.5033 12.8595C12.583 12.8265 12.6555 12.7781 12.7165 12.717C12.7776 12.656 12.826 12.5835 12.859 12.5038C12.8921 12.424 12.9091 12.3385 12.9091 12.2522C12.9091 12.1659 12.8921 12.0804 12.859 12.0006C12.826 11.9209 12.7776 11.8484 12.7165 11.7873L12.7143 11.7857ZM2.4063 6.125C2.4063 5.3895 2.6244 4.67052 3.03302 4.05897C3.44164 3.44743 4.02243 2.97079 4.70194 2.68932C5.38146 2.40786 6.12917 2.33422 6.85054 2.47771C7.57191 2.6212 8.23452 2.97537 8.7546 3.49545C9.27468 4.01552 9.62885 4.67814 9.77234 5.39951C9.91583 6.12088 9.84219 6.86859 9.56072 7.54811C9.27926 8.22762 8.80262 8.80841 8.19107 9.21703C7.57953 9.62565 6.86055 9.84375 6.12505 9.84375C5.13908 9.84274 4.19379 9.45062 3.49661 8.75344C2.79943 8.05625 2.40731 7.11096 2.4063 6.125Z" fill="#858D9D" />
            </svg>
            <input type="text" placeholder="Buscar bicicletas, marcas, modelos..." onKeyDown={buscar} />
        </div>
    )
} */

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Buscador() {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchText, setSearchText] = useState<string>('');
  
    const buscar = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        alert(`Buscando: ${searchText}`);
        localStorage.setItem('searchText', searchText); // Guardar en localStorage
        if(location.pathname === "/results-categories") navigate(0)
        else navigate('/results-categories');
        console.log(localStorage.getItem('searchText'));
      }
    };
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(e.target.value);
    };
  
    return (
      <div className="search">
        {/* ... (código anterior) */}
        <input
          type="text"
          placeholder="Buscar bicicletas, marcas, modelos..."
          onKeyDown={buscar}
          onChange={handleInputChange}
          value={searchText}
        />
      </div>
    );
  }
  
