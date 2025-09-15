import React, { useEffect, useState } from 'react';
import PhotoItem from '../components/PhotoItem';
import '../css/Photos.css';

import useRevealOnScroll from "../hooks/useRevealOnScroll";

function Photos() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useRevealOnScroll(".fade-in-up, .fade-in-side-left, .fade-in-side-right");

    useEffect(() => {
        document.title = "DEPAN AUTO 62 - Galerie photos";

        // A CHANGER LORS DE LA CREATION DU GOOGLE DRIVE
        const url = `https://script.google.com/macros/s/AKfycbxrEaPYjBiGzZnAMlhTbCvjPBwUq3z777fZjr0JskCBVg8TwUoPihRm9hYC8KI-ZvTxlw/exec`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                if (data.files) {
                    const imageFiles = data.files.filter((file) =>
                        file.mimeType.startsWith("image/")
                    );
                    setImages(imageFiles);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("Erreur lors du chargement des images :", err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="photos-container">
            {/* Banner */}
            <div className="photos-banner">
                <img src="/photos_depan_auto_62/depan_auto_62_galerie_photos.jpg" alt="Prestations DEPAN AUTO 62" className="photos-banner-img"/>
                <div className="photos-banner-title fade-in-up">
                    <h1>Découvrez votre dépanneur en images !</h1>
                </div>
            </div>
            {/* Main content */}
            <div className="photos-gallery-container">
                {loading && <div className="photos-gallery-loader"></div>}
                {!loading && images.length === 0 && <p className="photos-gallery-notFound">Aucune photo n'a été trouvée.</p>}
                {images.map((file) => (
                    <PhotoItem key={file.id} file={file} />
                ))}
            </div>
        </div>
    );
}

export default Photos;