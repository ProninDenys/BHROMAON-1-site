// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Check if the element with the given ID exists
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Toggle Mobile Menu
const burgerMenu = document.querySelector('.burger-menu');
const mobileNav = document.querySelector('.mobile-nav');
const closeIcon = document.querySelector('.close-icon');

if (burgerMenu && mobileNav) {
    burgerMenu.addEventListener('click', () => {
        mobileNav.style.display = 'flex';
    });
}

if (closeIcon && mobileNav) {
    closeIcon.addEventListener('click', () => {
        mobileNav.style.display = 'none';
    });
}

// Close mobile menu on link click
document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.style.display = 'none';
    });
});

// Scroll Down Button in Header
const scrollDownBtn = document.querySelector('.scroll-down a');
if (scrollDownBtn) {
    scrollDownBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const section1 = document.querySelector('#section1');
        if (section1) {
            section1.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}

// Form Validation
const searchForm = document.querySelector('.search-form');
if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchInput = document.querySelector('.search-description').value.trim();
        if (searchInput === '') {
            alert('Please enter a destination to search');
        } else {
            // Add logic here for submitting the request
            console.log(`Search: ${searchInput}`);
        }
    });
}

// Header Scroll Effect (Sticky Navigation)
const navigation = document.querySelector('.navigation');
if (navigation) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navigation.classList.add('sticky');
        } else {
            navigation.classList.remove('sticky');
        }
    });
}

// Animate Elements on Scroll (IntersectionObserver API)
const animatedElements = document.querySelectorAll('.animate-on-scroll');

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
} else {
    // Fallback for browsers that don't support IntersectionObserver
    animatedElements.forEach(element => {
        element.classList.add('animated');
    });
}
