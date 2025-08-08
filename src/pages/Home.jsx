import React, { useEffect } from 'react';

function Home() {
    // change the title of the page
    useEffect(() => {
        document.title = "DEPAN AUTO 62 - Accueil";
    }, []);

    return (
        <div>
            Bienvenue dans l'accueil !
        </div>
    );
}

export default Home;
