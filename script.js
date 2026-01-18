let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');
let slideInterval;

// Función para cambiar de slide
function showSlide(index) {
    // Ocultar todas las slides
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Asegurar que el índice esté en el rango válido
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }
    
    // Mostrar la slide actual
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

// Función para cambiar al siguiente/anterior slide
function changeSlide(direction) {
    showSlide(currentSlideIndex + direction);
    resetInterval();
}

// Función para ir a un slide específico
function currentSlide(index) {
    showSlide(index - 1);
    resetInterval();
}

// Función para auto-play del carousel
function startAutoPlay() {
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 5000); // Cambia cada 5 segundos
}

// Función para resetear el intervalo
function resetInterval() {
    clearInterval(slideInterval);
    startAutoPlay();
}

// Inicializar el carousel
showSlide(0);
startAutoPlay();

// Pausar el auto-play cuando el usuario interactúa con los controles
document.querySelectorAll('.carousel-btn, .dot').forEach(element => {
    element.addEventListener('click', () => {
        resetInterval();
    });
});

// Pausar el auto-play cuando el mouse está sobre el carousel
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

carouselContainer.addEventListener('mouseleave', () => {
    startAutoPlay();
});
