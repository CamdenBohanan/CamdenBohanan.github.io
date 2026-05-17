document.addEventListener("DOMContentLoaded", () => {
    
    // ============================================================
    // 1. CAROUSEL BUTTON NAVIGATION LOGIC
    // ============================================================
    document.querySelectorAll('.carousel-wrapper').forEach(wrapper => {
        const carousel = wrapper.querySelector('.project-carousel');
        const prevBtn = wrapper.querySelector('.prev-btn');
        const nextBtn = wrapper.querySelector('.next-btn');

        // Safety check ONLY stops the carousel code if elements are missing
        if (!carousel || !prevBtn || !nextBtn) return;

        nextBtn.addEventListener('click', () => {
            const firstItem = carousel.querySelector('.carousel-item');
            const itemWidth = firstItem ? firstItem.clientWidth : carousel.clientWidth * 0.8;
            const gap = 20; 
            
            carousel.scrollBy({
                left: itemWidth + gap,
                behavior: 'smooth'
            });
        });

        prevBtn.addEventListener('click', () => {
            const firstItem = carousel.querySelector('.carousel-item');
            const itemWidth = firstItem ? firstItem.clientWidth : carousel.clientWidth * 0.8;
            const gap = 20;
            
            carousel.scrollBy({
                left: -(itemWidth + gap),
                behavior: 'smooth'
            });
        });
    });

   
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // This runs completely independently now, fixing other pages
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});