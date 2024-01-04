import React, { ChangeEvent, useState } from "react";
import "./ImagenUploader.css"

interface AvatarUploaderProps {
    setAvatar: (files: File[]) => void;
}

const ImageAvatarUploader: React.FC<AvatarUploaderProps> = ({ setAvatar }) => {
    const [selectedImages, setSelectedImages] = useState<File[]>([]);

    const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const newImages: File[] = Array.from(files);
            setSelectedImages([...selectedImages, ...newImages]);
            setAvatar([...selectedImages, ...newImages]);
        }
    };

    const handleRemoveImage = (index: number) => {
        const updatedImages = [...selectedImages];
        updatedImages.splice(index, 1);
        setSelectedImages(updatedImages);
        setAvatar(updatedImages);
    };

    return (
        <div className="image-uploader-container">
            <div className="max-img">
                <div className="input-image">
                    <label className="custom-file-upload">
                        <input className="agregar-img" type="file" accept="image/*" multiple onChange={handleAvatarChange} />
                    </label>
                </div>
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
        </div>
    );
};

export default ImageAvatarUploader;

