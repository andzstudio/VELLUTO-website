document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.wow-card');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            if (this.classList.contains('active')) return;

            cards.forEach(c => c.classList.remove('active'));
            
            this.classList.add('active');
        });

        const video = card.querySelector('.wow-hover-video');
        
        if (video) {
            card.addEventListener('mouseenter', () => {
                if (card.classList.contains('active')) {
                    video.play().catch(e => console.log("Autoplay împiedicat de browser."));
                }
            });

            card.addEventListener('mouseleave', () => {
                video.pause();
            });
        }
    });
});