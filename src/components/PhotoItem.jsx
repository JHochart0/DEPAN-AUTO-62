import React, { useState, useEffect } from "react";

function PhotoItem({ file }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // build the url of the HD version
        const url = `https://lh3.googleusercontent.com/d/${file.id}=w800`;

        // Preload the HD image
        const img = new Image();
        img.src = url;
        img.onload = () => setIsLoaded(true);
    }, [file.id]);

    return (
        <>
            {/* Thumbnail image */}
            <img
                src={file.thumbnailLink}
                alt={`DEPAN_AUTO_62_${file.name}`}
                className="photos-gallery-image"
                onError={(e) => {
                    e.target.src = file.thumbnailLink;
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
                            src={file.webContentLink}
                            alt={`DEPAN_AUTO_62_${file.name}`}
                            className="lightbox-image"
                            onError={(e) => {
                                e.target.src = file.webContentLink;
                            }}
                            
                        />
                    )}
                </div>
            )}
        </>
    );
}

export default PhotoItem;