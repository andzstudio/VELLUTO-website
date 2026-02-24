document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.gs-vtext').forEach((text, i) => {
        gsap.to(text, {
            y: i % 2 === 0 ? -150 : 150,
            ease: "none",
            scrollTrigger: {
                trigger: "#our-story",
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });
    });

    const cards = gsap.utils.toArray('.gs-card');
    
    cards.forEach((card, index) => {
        gsap.fromTo(card, 
            { 
                opacity: 0, 
                y: 50,
                rotation: window.innerWidth > 768 ? 2 : 0
            },
            {
                opacity: 1,
                y: 0,
                rotation: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
});