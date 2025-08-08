import React, { useEffect } from 'react';


function EmailConfirmation() {
    // change the title of the page
    useEffect(() => {
        document.title = "DEPAN AUTO 62 - Mail de contact bien envoyé !";
    }, []);

    return (
        <div>
            Bienvenue sur la page de confirmation d'email !
        </div>
    );
}

export default EmailConfirmation;
