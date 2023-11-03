import Header from "../components/header"
/* import Button from "../components/Button" */
import product_img from "../assets/preview.png"
import Footer from "../components/footer"
import { useNavigate } from "react-router-dom";
import { createProduct } from "../interfaces/create-product/create-product";
import { useState } from "react";
import { validarPrecio } from "../validadores/validadores";


export default function Publicacion() {

  const navigate = useNavigate();

    const [form, setForm] = useState({
        titulo: "",
        precio: null,
        region: "",
        ciudad: "",
        descripcion: "",
        categoria:"",
        tamano:"",
        estado:"",
        marca:"",
        material:"",
        componentes:""
    } as createProduct);

    const [error, setError] = useState({
      titulo: false,
      precio: false,
      region: false,
      ciudad: false,
      descripcion: false
    });

    //Al parecer no tiene un uso practico para un formulario, quizas es mejor para fecth data en la seccion de productos para actualizar las nuevas cards del feed.

    // useEffect(() => {
    //     // (Object.values(validarInputs(form)).includes(true)) ? console.log("existen errores, revise que completo correctamente todos los campos") : enviarFormulario(), [error]
    //     Object.values(validarInputs(form)).includes(true)
    // })

    const validarInputs = (inputForm: createProduct) => {

        const erroresFormulario = {
          titulo: false,
          precio: false,
          region: false,
          ciudad: false,
          descripcion: false
        };

        erroresFormulario.titulo = (inputForm.titulo.length > 62 || inputForm.titulo.length === 0) ? true:false;
        erroresFormulario.precio = validarPrecio(inputForm.precio);
        erroresFormulario.region = inputForm.region.length === 0?true:false;
        erroresFormulario.ciudad = inputForm.ciudad.length === 0?true:false;
        erroresFormulario.descripcion = (inputForm.descripcion.length > 600 || inputForm.descripcion.length === 0) ? true:false;

        return erroresFormulario

    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        console.log(form.descripcion)
        event.preventDefault();
        setError(validarInputs(form));
        Object.values(validarInputs(form)).includes(true) ? console.log("Error en formulario") : enviarFormulario();

    }

    const enviarFormulario = () => {
        console.log('formulario enviado con exito');
        console.log(form);
        navigate("/file-product")
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }
  return (
    <div className="Publicacion">
        <Header/>
        <section className="product">
          <h1 className="title">Ingresa los detalles y el precio de tu producto</h1>
          <div className="product_content">
            <div className="product_peview">
              <div className="product_img">
                <img src={product_img} alt="Producto" />
              </div>
              <div className="product_variants">
                  <div className="product_variant_img">
                    <img className="imagen-producto" src={product_img} alt="Producto" />
                  </div>
                  <div className="product_variant_img">
                    <img className="imagen-producto" src={product_img} alt="Producto" />
                  </div>
                  <div className="product_variant_img">
                    <img className="imagen-producto" src={product_img} alt="Producto" />
                  </div>
                  <div className="product_variant_img">
                    <img className="imagen-producto" src={product_img} alt="Producto" />
                  </div>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Escribe el título de tu producto (así es como te verán los compradores)</label>    
                <input type="text" name="titulo" id="title" onChange={handleChange} />    
                {error.titulo && <span className='error'>Ingresa Titulo</span>}
                <label htmlFor="details">Añade una descripción para conocer más de tu producto</label>
                <textarea name="descripcion" id="details" cols={30} rows={10} onChange={handleChange}></textarea> 
                {error.descripcion && <span className='error'>Ingresa Descripcion</span>}

                <div className="row">
                  <div className="col">
                    <label htmlFor="price">Tu precio de venta</label>                    
                    <input type="number" name="precio" id="price" onChange={handleChange} />
                    {error.precio && <span className='error'>Ingresa Precio</span>}
   
                  </div>
                  <div className="col">
                    <label htmlFor="region">Region</label>  
                    <input type="text" name="region" id="region"  onChange={handleChange}/>
                    {error.region && <span className='error'>Selecciona Region</span>}

                    <label htmlFor="ciudad">Ciudad o Comuna</label>  
                    <input type="text" name="ciudad" id="ciudad" onChange={handleChange}/>
                    {error.ciudad && <span className='error'>Selecciona Ciudad</span>}

                  </div>
                </div>
            
                <button type="submit" className="button_component full-blue">
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.7883 7.96172C13.8757 8.04882 13.945 8.15231 13.9923 8.26626C14.0397 8.38022 14.064 8.50239 14.064 8.62578C14.064 8.74917 14.0397 8.87134 13.9923 8.9853C13.945 9.09925 13.8757 9.20275 13.7883 9.28984L9.41328 13.6648C9.32619 13.7522 9.22269 13.8216 9.10874 13.8689C8.99478 13.9162 8.87261 13.9406 8.74922 13.9406C8.62583 13.9406 8.50366 13.9162 8.3897 13.8689C8.27575 13.8216 8.17226 13.7522 8.08516 13.6648L6.21016 11.7898C6.12295 11.7026 6.05378 11.5991 6.00658 11.4852C5.95939 11.3712 5.9351 11.2491 5.9351 11.1258C5.9351 11.0025 5.95939 10.8803 6.00658 10.7664C6.05378 10.6525 6.12295 10.5489 6.21016 10.4617C6.29737 10.3745 6.40089 10.3053 6.51483 10.2581C6.62877 10.2109 6.75089 10.1867 6.87422 10.1867C6.99755 10.1867 7.11967 10.2109 7.23361 10.2581C7.34755 10.3053 7.45108 10.3745 7.53828 10.4617L8.75 11.6719L12.4617 7.95938C12.5489 7.87236 12.6525 7.8034 12.7664 7.75642C12.8803 7.70944 13.0023 7.68537 13.1255 7.68559C13.2487 7.68581 13.3706 7.71031 13.4844 7.75769C13.5981 7.80507 13.7014 7.8744 13.7883 7.96172ZM18.4375 10.5C18.4375 12.1688 17.9427 13.8001 17.0155 15.1876C16.0884 16.5752 14.7706 17.6566 13.2289 18.2952C11.6871 18.9338 9.99064 19.1009 8.35393 18.7754C6.71721 18.4498 5.2138 17.6462 4.03379 16.4662C2.85379 15.2862 2.05019 13.7828 1.72463 12.1461C1.39907 10.5094 1.56616 8.81286 2.20477 7.27111C2.84338 5.72936 3.92484 4.4116 5.31238 3.48448C6.69992 2.55735 8.33122 2.0625 10 2.0625C12.237 2.06498 14.3817 2.95473 15.9635 4.53653C17.5453 6.11833 18.435 8.263 18.4375 10.5ZM16.5625 10.5C16.5625 9.20206 16.1776 7.93327 15.4565 6.85407C14.7354 5.77487 13.7105 4.93374 12.5114 4.43704C11.3122 3.94034 9.99272 3.81038 8.71972 4.0636C7.44672 4.31681 6.2774 4.94183 5.35962 5.85961C4.44183 6.77739 3.81682 7.94672 3.5636 9.21972C3.31038 10.4927 3.44034 11.8122 3.93704 13.0114C4.43374 14.2105 5.27488 15.2354 6.35407 15.9565C7.43327 16.6776 8.70206 17.0625 10 17.0625C11.7399 17.0606 13.408 16.3686 14.6383 15.1383C15.8686 13.908 16.5606 12.2399 16.5625 10.5Z" fill="#FEFEFE"/>
                  </svg>
                  Publicar
                </button>

            </form>
          </div>
          <div className="additional_info">
            <h2 className="subtitle">Información adicional</h2>
          <form>
                <label htmlFor="size">Tamaño/talla</label>    
                <input type="text" name="tamano" id="size" onChange={handleChange} />

                <label htmlFor="state">Estado</label>                      
                <input type="text" name="estado" id="state" onChange={handleChange}/>    

                <label htmlFor="category">Categoría</label>                      
                <input type="text" name="categoria" id="category" onChange={handleChange}/> 

                <label htmlFor="material">Material del cuadro</label>                      
                <input type="text" name="material" id="material" onChange={handleChange}/>  
                
                <label htmlFor="components">Componentes</label>                      
                <input type="text" name="componentes" id="components" onChange={handleChange}/>   
            </form>
          </div>

        </section>       

        <Footer/>
    </div>
  )
}
