import React, { useEffect } from "react";

// this hook is used to trigger the css animation when the element is shown after scrollin
function useRevealOnScroll(selector) {
    useEffect(() => {
        const elements = document.querySelectorAll(selector);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.1 } // triggering when we see 10% of the element
        );

        elements.forEach(el => observer.observe(el));

        return () => {
            elements.forEach(el => observer.unobserve(el));
        };
    }, [selector]);
}

export default useRevealOnScroll;