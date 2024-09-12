// Toggle Dark Mode
const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Toggle Hamburger Menu
const hamburguer = document.getElementById('hamburguer');
const navLinks = document.getElementById('nav-links');
hamburguer.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// // Carrossel Automático
// let carouselIndex = 0;
// const carouselItems = document.querySelectorAll('.carousel-item');

// function showCarouselItem(index) {
//     carouselItems.forEach((item, i) => {
//         item.style.transform = `translateX(${(i - index) * 100}%)`;
//     });
// }

// function nextCarouselItem() {
//     carouselIndex = (carouselIndex + 1) % carouselItems.length;
//     showCarouselItem(carouselIndex);
// }

// setInterval(nextCarouselItem, 3000);  // Troca a cada 3 segundos

// // Inicializar carrossel com a primeira imagem visível
// showCarouselItem(carouselIndex);
