// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scroll untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // offset untuk navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Animasi scroll reveal
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Tambahkan animasi fade-in untuk semua section
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Active nav link berdasarkan scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Counter animation untuk statistics
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '%';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + '%';
        }
    }, 16);
};

// Jalankan counter animation ketika statistics section terlihat
const statisticsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target.querySelector('.statistics-number h1');
            if (counter && !counter.classList.contains('animated')) {
                counter.classList.add('animated');
                animateCounter(counter, 85);
            }
        }
    });
}, { threshold: 0.5 });

const statisticsSection = document.querySelector('.statistics');
if (statisticsSection) {
    statisticsObserver.observe(statisticsSection);
}

// Parallax effect untuk hero image
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-right img');
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Hover effect untuk team cards
document.querySelectorAll('.team-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) translateY(-10px)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) translateY(0)';
    });
});

// Hover effect untuk competition cards
document.querySelectorAll('.competition-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.transition = 'transform 0.3s ease';
        this.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });
});

// Animasi untuk objectives circle icons
const circleIcons = document.querySelectorAll('.circle-icon');
let iconRotation = 0;

setInterval(() => {
    iconRotation += 0.5;
    circleIcons.forEach((icon, index) => {
        const angle = (iconRotation + (index * 90)) * Math.PI / 180;
        const radius = 165;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        icon.style.transform = `translate(${x}px, ${y}px)`;
    });
}, 50);

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Animasi untuk timeline items
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 150);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.timeline-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-50px)';
    item.style.transition = 'all 0.5s ease';
    timelineObserver.observe(item);
});

// Animasi untuk overview items
const overviewObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
            }, index * 100);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.overview-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'scale(0.8)';
    item.style.transition = 'all 0.5s ease';
    overviewObserver.observe(item);
});

console.log('Business Proposal Website Loaded Successfully! 🚀');