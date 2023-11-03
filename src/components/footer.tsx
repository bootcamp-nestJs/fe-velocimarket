import './footer.css'
import iconVelo from "../assets/Logo-rojo-velo.svg"

export default function Footer() {
    return (
        <footer className="Footer">
            <div className="footcontainer">
                <div className='footer_container'>
                <div className="footer_col_1">
                    <a href="/">Bicicletas de carretera</a>
                    <a href="/">Bicicleta de montaña</a>
                    <a href="/">Bicicleta de gravel</a>
                    <a href="/">Todas las categorías</a>
                </div>
                <div className="footer_col_2">
                    <a href="/">Vende tu bici</a>
                    <a href="/">Preguntas frecuentes</a>
                </div>
                <div className="footer_col_3">
                    <a href="/">Contacto</a>
                    <a href="/">Políticas de privacidad</a>
                    <a href="/">Términos y condiciones</a>
                </div>
                <div className="footer_col_4">
                    <img src={iconVelo} alt="icono-velomarket" className='iconVelo' />
                    <span>Velomarket - 2023</span>
                </div>
                </div>
                <div className="line-hor"></div>
            </div>
            
        </footer>
    )
}