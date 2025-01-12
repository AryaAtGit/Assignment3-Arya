document.addEventListener('DOMContentLoaded', () => {
    // Toggle for mobile navigation
    const CSbody = document.querySelector("body");
    const CSnavbarMenu = document.querySelector("#cs-navigation");
    const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

    if (CShamburgerMenu) {
        CShamburgerMenu.addEventListener('click', () => {
            CShamburgerMenu.classList.toggle("cs-active");
            CSnavbarMenu.classList.toggle("cs-active");
            CSbody.classList.toggle("cs-open");
        });
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Dynamic overlays
    const overlays = document.querySelectorAll('.overlay');
    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.toggle('active');
        });
    });
});
