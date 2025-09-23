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
        const url = `https://script.google.com/macros/s/AKfycbwiUrpsCD1_o6CkIfEc3JArZma4QnOj9NEbAKN1wA9spPk3bBbochng-euaOPVVBR_7Vw/exec`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => {

                setImages(data);
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
                <img src={`${import.meta.env.BASE_URL}photos_depan_auto_62/depan_auto_62_galerie_photos.jpg`} alt="Prestations DEPAN AUTO 62" className="photos-banner-img"/>
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