import React, { useEffect } from 'react';

function Photos() {
    // change the title of the page
    useEffect(() => {
        document.title = "DEPAN AUTO 62 - Galerie photos";
    }, []);

    return (
        <div>
            Bienvenue sur la page de galerie photos !
        </div>
    );
}

export default Photos;
