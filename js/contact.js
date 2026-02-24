document.addEventListener('DOMContentLoaded', () => {
    
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0, 0);

    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navbar.classList.toggle('active');
            if (navbar.classList.contains('active')) {
                lenis.stop();
            } else {
                lenis.start();
            }
        });
    }

    const pillars = document.querySelectorAll('.arch-pillar');
    
    pillars.forEach(pillar => {
        
        pillar.addEventListener('click', function(e) {
            if (e.target.closest('.arch-close') || this.classList.contains('active')) return;

            pillars.forEach(p => {
                if (p !== this) {
                    p.classList.remove('active');
                    p.classList.add('inactive');
                }
            });
            
            this.classList.remove('inactive');
            this.classList.add('active');

            const maskTexts = this.querySelectorAll('.mask-text');
            gsap.fromTo(maskTexts, 
                { y: "110%" },
                { y: "0%", duration: 1, stagger: 0.1, ease: "power4.out", delay: 0.4 } 
            );

            const formElements = this.querySelectorAll('.form-el');
            gsap.fromTo(formElements, 
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out", delay: 0.6 }
            );
        });

        const closeBtn = pillar.querySelector('.arch-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                
                pillars.forEach(p => {
                    p.classList.remove('active');
                    p.classList.remove('inactive');
                });

                const maskTexts = pillar.querySelectorAll('.mask-text');
                const formElements = pillar.querySelectorAll('.form-el');
                gsap.to(maskTexts, { y: "110%", duration: 0.3 });
                gsap.to(formElements, { opacity: 0, y: 30, duration: 0.3 });
            });
        }

        const bgImg = pillar.querySelector('.bg-parallax');
        const glow = pillar.querySelector('.arch-red-glow');
        const magWrap = pillar.querySelector('.mag-close-wrap');
        const magClose = pillar.querySelector('.arch-close');
        
        if (window.innerWidth > 1024) {
            const glowX = gsap.quickTo(glow, "x", {duration: 0.4, ease: "power3"});
            const glowY = gsap.quickTo(glow, "y", {duration: 0.4, ease: "power3"});
            const imgX = gsap.quickTo(bgImg, "x", {duration: 1, ease: "power2.out"});
            const imgY = gsap.quickTo(bgImg, "y", {duration: 1, ease: "power2.out"});

            pillar.addEventListener("mousemove", (e) => {
                if(pillar.classList.contains('active')) {
                    const rect = pillar.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    glowX(x);
                    glowY(y);

                    const xOffset = ((x / rect.width) - 0.5) * -40; 
                    const yOffset = ((y / rect.height) - 0.5) * -40;
                    imgX(xOffset);
                    imgY(yOffset);
                }
            });

            if (magWrap && magClose) {
                magWrap.addEventListener('mousemove', (e) => {
                    if(pillar.classList.contains('active')) {
                        const rect = magWrap.getBoundingClientRect();
                        const x = e.clientX - rect.left - rect.width / 2;
                        const y = e.clientY - rect.top - rect.height / 2;
                        gsap.to(magClose, { x: x * 0.5, y: y * 0.5, duration: 0.3, ease: "power2.out" });
                    }
                });

                magWrap.addEventListener('mouseleave', () => {
                    gsap.to(magClose, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.4)" });
                });
            }
        }
    });

    const textareas = document.querySelectorAll('textarea');
    textareas.forEach(textarea => {
        textarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        });
    });
});