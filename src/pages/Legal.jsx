import React, { useEffect } from 'react';

function Legal() {
    // change the title of the page
    useEffect(() => {
        document.title = "DEPAN AUTO 62 - Mentions légales et politiques de confidentialité";
    }, []);
    return (
        <div>
            Bienvenue sur la page des mentions légales et politiques de confidentialité !
        </div>
    );
}

export default Legal;
