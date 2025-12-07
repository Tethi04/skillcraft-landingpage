// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== NAVIGATION SCROLL EFFECT ==========
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // Change navbar style on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active nav link based on scroll position
        updateActiveNavLink();
    });
    
    // ========== MOBILE MENU TOGGLE ==========
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // ========== SMOOTH SCROLLING ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========== ACTIVE NAV LINK ON SCROLL ==========
    function updateActiveNavLink() {
        let currentSection = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = '#' + section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentSection) {
                link.classList.add('active');
            }
        });
        
        // Special case for home
        if (window.scrollY < 100) {
            document.querySelector('a[href="#home"]').classList.add('active');
        }
    }
    
    // ========== NAV LINK HOVER EFFECT ==========
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
        });
        
        link.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.color = '';
            }
        });
    });
    
    // ========== NAV BUTTON HOVER EFFECT ==========
    const navButton = document.querySelector('.nav-btn');
    
    navButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    navButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    // ========== FLOATING SHAPES ANIMATION ==========
    const shapes = document.querySelectorAll('.floating-shape');
    
    shapes.forEach((shape, index) => {
        // Add random initial rotation
        shape.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        // Add mouse move effect
        document.addEventListener('mousemove', function(e) {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            shape.style.transform = `translate(${x * 20 - 10}px, ${y * 20 - 10}px) rotate(${x * 20}deg)`;
        });
    });
    
    // ========== FEATURE CARDS HOVER EFFECT ==========
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.feature-icon');
            icon.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.feature-icon');
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // Initialize
    updateActiveNavLink();
});
