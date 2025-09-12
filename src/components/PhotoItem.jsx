import React, { useState, useEffect } from "react";

function PhotoItem({ file }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        // build the url of the HD version
        const url = `https://lh3.googleusercontent.com/d/${file.id}=w2000`;
        setImageUrl(url);

        // Preload the HD image
        const img = new Image();
        img.src = url;
        img.onload = () => setIsLoaded(true);
    }, [file.id]);

    return (
        <>
            {/* Thumbnail image */}
            <img
                src={imageUrl}
                alt={`DEPAN_AUTO_62_${file.name}`}
                className="photos-gallery-image"
                onError={(e) => {
                    e.target.src = imageUrl;
                }}
                onClick={() => setIsOpen(true)}
            />

            {/* Lightbox */}
            {isOpen && (
                <div className="lightbox" onClick={() => setIsOpen(false)}>
                    {/* Loader if the HD image isn't loaded yet */}
                    {!isLoaded && <div className="lightbox-loader"></div>}

                    {isLoaded && (
                        <img
                            src={imageUrl}
                            alt={`DEPAN_AUTO_62_${file.name}`}
                            className="lightbox-image"
                        />
                    )}
                </div>
            )}
        </>
    );
}

export default PhotoItem;