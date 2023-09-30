import './footer.css'

export default function Footer() {
    return (
      <footer className="Footer">
          <div className="footer_container">
              <div className="footer_col_1">
                  <a href="/">Bicicletas de carretera</a>
                  <a href="/">Bicicleta de montaña</a>
                  <a href="/">Bicicleta de gravel</a>
                  <a href="/">Todas las marcas</a>
                  <a href="/">Modelos populares</a>
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
                  <span>Velomarket - 2023</span>
              </div>
          </div>
      </footer>
    )
  }