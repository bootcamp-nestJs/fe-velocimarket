import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Header from "../components/header";
import Footer from "../components/footer";
import ImageAvatarUploader from "../components/avatarUploader";
import "./edition.css";
import { useState } from "react";

export default function Edition() {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const handleImageChange = (image: File | null) => {
        setSelectedImage(image);
    };

    const formData = new FormData();

    if (selectedImage) {
        formData.append(`avatar`, selectedImage);
    }

    const user = useSelector((state: RootState) => state.user);

    return (
        <div className="edition">
            <Header />
            <div className="titleEdition">
                <h2 className="titleh2edition">Editar tu perfil</h2>
            </div>
            <section className="conteiner-general-edition">
                <div className="img_avatar_edition">
                    <ImageAvatarUploader setAvatar={handleImageChange} />
                </div>
                <form className="conteiner-form-edition">
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
                    <button className="bluebutton-edition">
                        Guardar cambios
                    </button>
                </form>
                <Footer />
            </section>
        </div>
    );
}
