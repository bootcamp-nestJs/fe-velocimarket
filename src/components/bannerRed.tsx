import Button from "./Button";
import "./bannerRed.css"

export function BannerRed() {
    return (
        <div className="contenedor-bannerRed">
            <div className='Informacion-principalRed'>
                <p className='texto-bannerRed'>Velomarket: Compra. Vende. Pedalea en comunidad.</p>
            </div>
            <div className='botonesBannerRed'>
                <Button>
                    <div className='texto-bannerRed'>
                        <p className='texto-little-red'>Únete acá!</p>
                    </div>
                </Button>
            </div>
        </div>
    )
}