document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal-up');

    setTimeout(() => {
        revealElements.forEach(element => {
            element.classList.add('is-visible');
        });
    }, 100);
});