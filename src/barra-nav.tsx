import './barra-nav.css'
import inicio from './assets/house-simple-bold.svg'
import publicar from './assets/plus-circle-bold.svg'
import carrito from './assets/shopping-cart-simple-bold.svg'
import mensaje from './assets/paper-plane-tilt-bold 1.svg'
import perfil from './assets/user-bold 1.svg'
import engranaje from './assets/engranaje.svg'
import campana from './assets/campana.svg'
import logo from './assets/logo-chiquito 1.svg'


function Sidebar() {
    return (
        <>
            <div className='sidebar'>
                <div>
                    <img src={logo} className="logo" alt="logo" />
                </div>
                <div className='buttons'>
                    <div>
                    <ul className="buttons-nav">
                        <li>
                            <button><img src={inicio} className='icon' />Inicio</button>
                        </li>
                        <li>
                            <button><img src={publicar} className='icon' />Publicar</button>
                        </li>
                        <li>
                            <button><img src={mensaje} className='icon' />Mensaje</button>
                        </li>
                        <li>
                            <button><img src={carrito} className='icon' />Carrito</button>
                        </li>
                        <li>
                            <button><img src={campana} className='icon'/>Notificaciones</button>
                        </li>
                        <li>
                            <button><img src={perfil} className='icon'/>Perfil</button>
                        </li>
                    </ul>
                    </div>
                    <div>
                    <ul className='more'>
                        <li><button><img src={engranaje} className='icon'/>Configuración</button></li>
                    </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar