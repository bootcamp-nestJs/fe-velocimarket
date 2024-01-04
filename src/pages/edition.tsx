import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Header from "../components/header";
import Footer from "../components/footer";
import "./edition.css";
import { useState } from "react";

export default function Edition() {
    const [selectedImages, setSelectedImages] = useState<File[]>([]);

    const handleImageChange = (images: File[]) => {
      setSelectedImages(images);
    };

    const formData = new FormData();

    selectedImages.forEach((image) => {
        formData.append(`avatar`, image);
        // formData.append(`images${index + 1}`, image);
      });

    const user = useSelector((state: RootState) => state.user);

    return (
        <div className="edition">
            <Header />
            <div className="titleEdition">
                <h2 className="titleh2edition">Editar tu perfil</h2>
            </div>
            <section className="conteiner-general-edition">
                <form className="conteiner-form-edition">
                    <div className="product_img">
                        <avatarUploader setAvatar={handleImageChange} />
                    </div>
                    <h4 className="title-section-Edition">Cambiar foto perfil</h4>

                    <div className="inputedition">
                        <label htmlFor="nombre">Nombre de usuario*</label>
                        <input type="text" name="nombre" id="nombre" />
                    </div>
                    <div className="inputedition">
                        <label htmlFor="correo">Correo electrónico</label>
                        <input type="text" name="correo" id="correo" />
                    </div>
                    <div className="inputedition">
                        <label htmlFor="contrasena">Contraseña actual</label>
                        <input type="password" name="contrasena" id="contrasena" />
                    </div>
                    <div className="inputedition">
                        <label htmlFor="telefono">Número de teléfono</label>
                        <input
                            type="tel"
                            name="telefono"
                            id="telefono"
                            placeholder="987654321"
                        />
                    </div>

                </form>
                <Footer />
            </section>
        </div>
    );
}
