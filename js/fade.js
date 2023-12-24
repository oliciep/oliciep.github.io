function fadeInOnScroll(selector) {
    const items = document.querySelectorAll(selector);
    items.forEach((item) => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
    });

    function checkScroll() {
        items.forEach((item) => {
            const position = item.getBoundingClientRect();
            if (position.top - window.innerHeight <= 0) {
                item.style.opacity = 1;
                item.style.transform = 'translateY(0)';
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Call the function once to check for visible items on page load
}

// Apply the fade-in animation to specific sections or elements by providing their selectors
fadeInOnScroll('.intro-text');
fadeInOnScroll('.social-buttons');
fadeInOnScroll('.education-card');
fadeInOnScroll('.style-card');
fadeInOnScroll('.project-card');
fadeInOnScroll('.timeline');
fadeInOnScroll('.education-card');
fadeInOnScroll('.contact-form');