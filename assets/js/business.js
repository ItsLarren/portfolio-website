// Business page specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Business page loaded successfully!');
    
    // Business contact form handling
    const businessContactForm = document.getElementById('business-contact-form');
    
    if (businessContactForm) {
        businessContactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const projectType = formData.get('project-type');
            const description = formData.get('description');
            
            // Simple validation
            if (!name || !email || !description) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Here you would typically send the data to your server or EmailJS
            // For now, we'll just show a success message
            alert('Thank you for your inquiry! I will get back to you within 24 hours.');
            this.reset();
        });
    }
    
    // Business page scroll functionality
    function businessScrollUp() {
        const scrollUp = document.getElementById('scroll-up');
        
        if (!scrollUp) return;
        if (window.scrollY >= 350) {
            scrollUp.classList.add('show-scroll');
        } else {
            scrollUp.classList.remove('show-scroll');
        }
    }
    
    window.addEventListener('scroll', businessScrollUp);
    
    // Set active navigation for business page
    function setBusinessActiveNav() {
        const navLinks = document.querySelectorAll('.nav__link');
        const businessLink = document.querySelector('.nav__link[href="business.html"]');
        
        // Remove active class from all links
        navLinks.forEach(link => {
            link.classList.remove('active-link');
        });
        
        // Add active class to business link
        if (businessLink) {
            businessLink.classList.add('active-link');
        }
    }
    
    setBusinessActiveNav();
});