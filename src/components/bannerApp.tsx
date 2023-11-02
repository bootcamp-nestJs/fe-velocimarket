import Button from './Button'
import apple from '../assets/Apple logo.svg'
import google from '../assets/Google Play logo.svg'
import './bannerApp.css'

export function BannerApp() {
    return (
        <div className="contenedor-bannerApp">
            <div className='Informacion-principal'>
                <h1 className='titulo-bannerApp'>¡Descarga la App de Velomarket y publica al instante!</h1>
                <p className='texto-bannerApp'>Mantente al día con las novedades de tus amigos, disponible ahora en iOS y Android.</p>
            </div>
            <div className='botonesBannerApp'>
                <Button className="buttonbannerApp">
                    <img className="icon-bannerApp" src={apple} />
                    <div className='texto-bannerApp'>
                        <p className='texto-little'>Descarga desde</p><br />
                        <p>App store</p>
                    </div>
                </Button>
                <Button className="buttonbannerApp">
                    <img className="icon-bannerApp" src={google} />
                    <div className='texto-bannerApp'>
                        <p className='texto-little'>Consíguela en</p><br />
                        <p>Google Play</p>
                    </div>
                </Button>
            </div>
        </div>
    )
}