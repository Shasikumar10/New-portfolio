/*
   Portfolio Website - Shasi Kumar Uppu
   Custom JavaScript
*/

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        once: true,
        mirror: false,
        offset: 50,
        easing: 'ease-in-out',
        delay: 100
    });
    
    // Add hover animations to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'all 0.3s ease';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add animation to skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        tag.style.animationDelay = `${index * 0.1}s`;
        tag.classList.add('skill-animation');
    });
    
    // Start typing animation if elements exist
    if(document.querySelector(".typed-text")) {
        // Will be handled by the typing animation code below
    }
});

// Initialize animations for project cards and skill tags
function initializeAnimations() {
    // Add hover animations to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'all 0.3s ease';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add animation to skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        tag.style.animationDelay = `${index * 0.1}s`;
        tag.classList.add('skill-animation');
    });
}

// Initialize animations for project cards and skill tags
function initializeAnimations() {
    // Add hover animations to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'all 0.3s ease';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add animation to skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        tag.style.animationDelay = `${index * 0.1}s`;
        tag.classList.add('skill-animation');
    });
}

// Typing animation
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["AI & Data Science Undergraduate", "Machine Learning Enthusiast", "Problem Solver", "Innovator"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } 
    else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } 
    else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if(textArray.length) setTimeout(type, newTextDelay + 250);
    
    // Add smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', (index * 100).toString());
    });
    
    // Add animation to skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        tag.setAttribute('data-aos', 'zoom-in');
        tag.setAttribute('data-aos-delay', (index * 50).toString());
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', function() {
    // Navbar background change on scroll
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Back to top button visibility
    if (window.scrollY > 300) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

// Smooth scrolling for navigation links with improved animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (this.getAttribute('href') === '#') return;
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(navLink => {
                navLink.classList.remove('active');
            });
            this.classList.add('active');
            
            // Add flash effect to the target section
            targetElement.classList.add('section-highlight');
            setTimeout(function() {
                targetElement.classList.remove('section-highlight');
            }, 1000);
        }
    });
});

// Update active nav link on scroll with improved accuracy
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionBottom = sectionTop + sectionHeight;
        
        if (window.scrollY >= sectionTop - 100 && window.scrollY <= sectionBottom) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(navLink => {
        navLink.classList.remove('active');
        if (navLink.getAttribute('href') === `#${current}`) {
            navLink.classList.add('active');
        }
    });
});

// Mobile menu collapse on click
const navLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    });
});

// Form submission handling with enhanced feedback
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelector('input[placeholder="Subject"]').value;
        const message = this.querySelector('textarea').value;
        
        // Simple form validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Disable submit button and show loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...';
        
        // Simulate AJAX delay (replace with actual AJAX in production)
        setTimeout(() => {
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form and button
            this.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }, 1500);
    });
}

// Add typing animation to hero section with enhanced effects
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-section h1');
    const heroTagline = document.querySelector('.hero-section .lead');
    
    if (heroTitle && heroTagline) {
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
            
            setTimeout(() => {
                heroTagline.style.opacity = '1';
                heroTagline.style.transform = 'translateY(0)';
            }, 500);
        }, 300);
    }
    
    // Add typed.js effect if element exists
    if (document.querySelector('.typed-text')) {
        var typed = new Typed('.typed-text', {
            strings: ["AI Enthusiast", "Data Scientist", "Machine Learning Engineer", "Problem Solver", "Innovator"],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1000,
            loop: true,
            cursorChar: '|',
            smartBackspace: true
        });
    }
});

// Project cards hover effect with enhanced animation
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.style.animationDelay = (index * 0.1) + 's';
    
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.1)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.05)';
    });
});

// Skill tags animation with staggered delay
const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach((tag, index) => {
    tag.style.animationDelay = (index * 0.05) + 's';
    
    tag.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'var(--primary-color)';
        this.style.color = 'var(--white-color)';
        this.style.transform = 'translateY(-3px)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'var(--white-color)';
        this.style.color = 'var(--secondary-color)';
        this.style.transform = 'translateY(0)';
    });
});

// Add parallax effect for sections
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const parallaxSections = document.querySelectorAll('.parallax-section');
    
    parallaxSections.forEach(section => {
        section.style.backgroundPositionY = (scrollPosition * 0.5) + 'px';
    });
});

// Add scroll indicator
document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    
    const scrollProgress = document.createElement('div');
    scrollProgress.className = 'scroll-indicator-progress';
    
    scrollIndicator.appendChild(scrollProgress);
    body.appendChild(scrollIndicator);
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY;
        const docHeight = document.body.offsetHeight;
        const winHeight = window.innerHeight;
        const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    });
});

// Add year to copyright
const copyrightYear = document.querySelector('.copyright');
if (copyrightYear) {
    const year = new Date().getFullYear();
    copyrightYear.innerHTML = `&copy; ${year} Shasi Kumar Uppu. All Rights Reserved.`;
}