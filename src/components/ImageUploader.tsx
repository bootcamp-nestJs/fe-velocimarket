import React, { ChangeEvent, useState } from "react";
import "./ImagenUploader.css"
import { Overflowbox } from "@hffxx/react-overflow-box";

interface ImageUploaderProps {
    setImages: (files: File[]) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ setImages }) => {
    const [selectedImages, setSelectedImages] = useState<File[]>([]);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const newImages: File[] = Array.from(files);
            setSelectedImages([...selectedImages, ...newImages]);
            setImages([...selectedImages, ...newImages]);
        }
    };

    const handleRemoveImage = (index: number) => {
        const updatedImages = [...selectedImages];
        updatedImages.splice(index, 1);
        setSelectedImages(updatedImages);
        setImages(updatedImages);
    };

    return (
        <>
        {selectedImages.length < 1 && <div></div>}

        <div className="image-uploader-container">
            <div className="max-img">
                <div className="uploader-images">
                    {selectedImages.length >= 1 &&
                        <div key={0} className="image-container">
                            <img
                                src={URL.createObjectURL(selectedImages[0])}
                                alt={`Preview ${0}`}
                                className={"first-image"}
                            />
                            <button className="delete-button" onClick={() => handleRemoveImage(0)}>
                            </button>
                        </div>
                    }
                </div>
            </div>
            <div className="input-image">
                <label className="custom-file-upload">
                    + Cargar
                    <input className="agregar-img" type="file" accept="image/*" multiple onChange={handleImageChange} />
                </label>
            </div>
            <Overflowbox>                
                {selectedImages.length > 1 &&
                <div className="img-carrusel">
                    {selectedImages.map((image, index) => (
                        <div key={index} className="image-container">
                            {selectedImages.length > 1 &&
                                <div className="mini-img">
                                    <img
                                        src={URL.createObjectURL(image)}
                                        alt={`Preview ${index + 1}`}
                                        className={"small-image"}
                                    />
                                    <button className="delete-button" onClick={() => handleRemoveImage(0)}>
                                    </button>
                                </div>
                            }
                        </div>))}
                </div>}
            </Overflowbox>
            
        </div>
        </>
    );
};

export default ImageUploader;

