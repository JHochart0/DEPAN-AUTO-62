import React, { useEffect, useState } from 'react';

import '../css/Contact.css'

function Contact() {
    const [isFbLoaded, setIsFbLoaded] = useState(false);

    // change the title of the page and load the facebook widget
    useEffect(() => {
        document.title = "DEPAN AUTO 62 - Contact";

        const checkFbInterval = setInterval(() => {
            if (window.FB) {
                window.FB.XFBML.parse();
                setIsFbLoaded(true);
                clearInterval(checkFbInterval);
            }
        }, 300);

        
    }, []);

    return (
        <div className="contact-container">
            <h2 className="contact-fb-page-title">Page Facebook</h2>

                {!isFbLoaded && (
                <div className="fb-loader">
                    <div className="spinner"></div>
                </div>
                )}

                <div 
                    class="fb-page"
                    data-href="https://www.facebook.com/profile.php?id=61577391726886"
                    data-tabs="timeline" 
                    data-width="500"
                    data-height=""
                    data-small-header="false"
                    data-adapt-container-width="true"
                    data-hide-cover="false"
                    data-show-facepile="false"
                >
                    <blockquote 
                        cite="https://www.facebook.com/profile.php?id=61577391726886" 
                        class="fb-xfbml-parse-ignore"
                    >
                        <a href="https://www.facebook.com/profile.php?id=61577391726886">
                        </a>
                    </blockquote>
                </div>

        </div>
    );
}

export default Contact;
