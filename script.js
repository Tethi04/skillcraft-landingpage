// JavaScript for Task 1 - Responsive Landing Page
document.addEventListener('DOMContentLoaded', function() {
    
    // Navigation scroll effect
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            nav.style.backgroundColor = '#0f1123';
            nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            nav.style.backgroundColor = '#1a1a2e';
            nav.style.boxShadow = 'none';
        }
    });
    
    // Hover effect for navigation links
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Button click effect
    const button = document.querySelector('.btn');
    if (button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    }
    
    // Card hover animation
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});
