// JavaScript functionality for sidebar navigation, hero slider, cart management, search, and animations

// Sidebar Navigation
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const totalSlides = slides.length;

const nextSlide = () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
};

setInterval(nextSlide, 3000);

// Cart Management
const cart = [];
const addToCart = (item) => {
    cart.push(item);
    console.log(`Item added to cart: ${item}`);
};

const removeFromCart = (item) => {
    const index = cart.indexOf(item);
    if (index > -1) {
        cart.splice(index, 1);
        console.log(`Item removed from cart: ${item}`);
    }
};

// Search Functionality
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    // Simulating search operation
    // Assuming we have an array of products called products
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    displaySearchResults(filteredProducts);
});

const displaySearchResults = (results) => {
    searchResults.innerHTML = '';
    results.forEach(product => {
        const resultItem = document.createElement('div');
        resultItem.textContent = product.name;
        searchResults.appendChild(resultItem);
    });
};

// Animations
const elementsToAnimate = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
});

elementsToAnimate.forEach(element => observer.observe(element));