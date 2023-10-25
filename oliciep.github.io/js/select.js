let slideIndex = 0;
const slides = document.querySelectorAll('.slideshow-card');

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = 'block';
    setTimeout(showSlides, 10000); // Change slide every 10 seconds
}

showSlides();