// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle Mobile Menu
const burgerMenu = document.querySelector('.burger-menu');
const mobileNav = document.querySelector('.mobile-nav');
const closeIcon = document.querySelector('.close-icon');

burgerMenu.addEventListener('click', () => {
    mobileNav.style.display = 'flex';
});

closeIcon.addEventListener('click', () => {
    mobileNav.style.display = 'none';
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.style.display = 'none';
    });
});

// Scroll Down Button in Header
const scrollDownBtn = document.querySelector('.scroll-down a');
scrollDownBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#section1').scrollIntoView({
        behavior: 'smooth'
    });
});

// Form Validation
const searchForm = document.querySelector('.search-form');
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchInput = document.querySelector('.search-description').value.trim();
    if (searchInput === '') {
        alert('Please enter a destination to search');
    } else {
        // Здесь можно добавить логику для отправки запроса
        console.log(`Searching for: ${searchInput}`);
    }
});


// Header Scroll Effect (Sticky Navigation)
const navigation = document.querySelector('.navigation');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navigation.classList.add('sticky');
    } else {
        navigation.classList.remove('sticky');
    }
});

// Animate Elements on Scroll (IntersectionObserver API)
const animatedElements = document.querySelectorAll('.animate-on-scroll');

const animateOnScroll = (element) => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(element);
};

animatedElements.forEach(animateOnScroll);
