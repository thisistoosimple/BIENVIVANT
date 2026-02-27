document.addEventListener('DOMContentLoaded', () => {
    
    const isMobile = window.innerWidth <= 768;

    // Animation d'apparition au scroll
    const observerOptions = {
        threshold: isMobile ? 0.05 : 0.15
    };

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.product-item, .material-card');
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 1.2s cubic-bezier(0.16, 1, 0.3, 1)";
        revealOnScroll.observe(el);
    });

    // Parallaxe (uniquement sur ordinateur pour la fluidité)
    if (!isMobile) {
        window.addEventListener('scroll', () => {
            const scroll = window.scrollY;
            const heroContent = document.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.transform = `translateY(${scroll * 0.15}px)`;
                heroContent.style.opacity = `${1 - scroll / 800}`;
            }
        });
    }
});