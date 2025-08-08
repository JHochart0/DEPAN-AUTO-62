import React, { useEffect } from 'react';

function Services() {

    // change the title of the page
    useEffect(() => {
        document.title = "DEPAN AUTO 62 - Prestations";
    }, []);

    return (
        <div>
            Bienvenue sur la page des prestations !
        </div>
    );
}

export default Services;
