import React, { ChangeEvent, useState } from "react";
import "./avatarUploader.css";

interface AvatarUploaderProps {
    setAvatar: (file: File | null) => void;
}

const ImageAvatarUploader: React.FC<AvatarUploaderProps> = ({ setAvatar }) => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const newImage: File = files[0];
            setSelectedImage(newImage);
            setAvatar(newImage);
        } else {
            setSelectedImage(null);
            setAvatar(null);
        }
    };

    const handleRemoveImage = () => {
        setSelectedImage(null);
        setAvatar(null);
    };

    return (
        <div className="image-uploader-avatar-container">
            <div className="max-img-avatar">
                <div className="input-image-avatars">
                    {selectedImage ? (
                        <div className="uploader-images">
                            <div className="image-container">
                                <img
                                    src={URL.createObjectURL(selectedImage)}
                                    alt={`Profile Preview`}
                                    className="profile-image-avatar"
                                />
                                <button className="delete-button" onClick={handleRemoveImage}>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <label className="custom-file-avatar-upload">
                            <input
                                className="agregar-img-avatar-nuevo"
                                type="file"
                                accept="image/*"
                                onChange={handleAvatarChange}
                            />
                        </label>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ImageAvatarUploader;
