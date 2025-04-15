// Инициализация на AOS
AOS.init({
    duration: 1000,
    once: true
});

// Анимация на броячите (само на началната страница)
if(document.querySelector('.counter')) {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the value, the faster the animation
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / speed;
        
        const updateCounter = () => {
            const count = +counter.innerText;
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCounter, 10);
            } else {
                counter.innerText = target;
            }
        };
        
        updateCounter();
    });
}

// Паралакс ефект
window.addEventListener('scroll', () => {
    const parallaxSections = document.querySelectorAll('.parallax-section');
    parallaxSections.forEach(section => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        section.style.transform = `translate3d(0px, ${rate}px, 0px)`;
    });
});

// Плавно превъртане до секциите
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Анимация на мобилното меню
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        // Toggle navigation
        nav.classList.toggle('nav-active');
        
        // Animate burger
        burger.classList.toggle('toggle');
    });
};

navSlide();

// Динамично генериране на карти с обекти
const featuredSites = [
    {
        name: 'Рилски манастир',
        image: 'rila-monastery.jpg',
        description: 'Най-големият манастир в България',
        year: 1983
    },
    // Добавете останалите обекти
];

const featuredGrid = document.querySelector('.featured-grid');
featuredSites.forEach(site => {
    const card = document.createElement('div');
    card.className = 'site-card';
    card.innerHTML = `
        <div class="card-image">
            <img src="${site.image}" alt="${site.name}">
        </div>
        <div class="card-content">
            <h3>${site.name}</h3>
            <p>${site.description}</p>
            <span class="year">ЮНЕСКО ${site.year}</span>
        </div>
    `;
    featuredGrid.appendChild(card);
});

// Добавяне на клас active на текущата страница в навигацията
const currentPage = window.location.pathname.split('/').pop();
document.querySelectorAll('.nav-links a').forEach(link => {
    if(link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});
