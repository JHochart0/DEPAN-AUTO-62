import React, { useEffect } from 'react';

function Contact() {
    // change the title of the page
    useEffect(() => {
        document.title = "DEPAN AUTO 62 - Contact";
    }, []);

    return (
        <div>
            Bienvenue dans la page contact !
        </div>
    );
}

export default Contact;
