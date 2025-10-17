const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// Mobile menu functionality
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Close mobile menu when clicking on links
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        navMenu.classList.remove('show-menu');
    }
}
if (navLink.length > 0) {
    navLink.forEach(n => n.addEventListener('click', linkAction));
}

// Scroll active link functionality (only for index.html)
function scrollActive() {
    const currentPage = window.location.pathname.split('/').pop();
    
    // Only run this on index.html or home page
    if (currentPage !== 'index.html' && currentPage !== '') return;
    
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            const activeLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
            if (activeLink) {
                // Remove active class from all links first
                document.querySelectorAll('.nav__menu a').forEach(link => {
                    link.classList.remove('active-link');
                });
                // Add active class to current section link
                activeLink.classList.add('active-link');
            }
        }
    });
}

// Header scroll effect
function scrollHeader() {
    const header = document.getElementById('header');
    if (header && this.scrollY >= 80) {
        header.classList.add('scroll-header');
    } else if (header) {
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

// Scroll up button functionality
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    
    if (!scrollUp) return;
    if (this.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUp);

// Tabs functionality (only for index.html)
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

if (tabs.length > 0) {
    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.target);

            if (target) {
                tabContents.forEach((tabContent) => {
                    tabContent.classList.remove('tab__active');
                });

                target.classList.add('tab__active');

                tabs.forEach((tab) => {
                    tab.classList.remove('tab__active');
                });

                tab.classList.add('tab__active');
            }
        });
    });
}

// Contact form functionality (only for index.html)
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    const contactName = document.getElementById('contact-name'),
          contactEmail = document.getElementById('contact-email'),
          contactSubject = document.getElementById('contact-subject'),
          contactMessage = document.getElementById('contact-message'),
          errorMessage = document.getElementById('error-message');

    const sendEmail = (e) => {
        e.preventDefault();

        if (!contactName || !contactEmail || !contactSubject || !contactMessage || !errorMessage) return;
        if (
            contactName.value === '' || 
            contactEmail.value === '' || 
            contactSubject.value === '' || 
            contactMessage.value === ''
        ) {
            errorMessage.textContent = 'Please fill in all the input fields';
            errorMessage.classList.remove('color-first');
        } else {
            emailjs.sendForm(
                'service_797yyww', 
                'template_hctp0tv', 
                '#contact-form', 
                'GOgV4nN1fZNFxAT-e'
            ).then(
                () => {
                    errorMessage.classList.add('color-first');
                    errorMessage.textContent = 'Message sent ✔️';

                    setTimeout(() => {
                        errorMessage.textContent = '';
                    }, 5000);
                },
                (error) => {
                    errorMessage.textContent = 'Oops! Something went wrong. Please try again.';
                    console.error('EmailJS Error:', error);
                }
            );

            contactName.value = '';
            contactEmail.value = '';
            contactSubject.value = '';
            contactMessage.value = '';
        }
    };

    contactForm.addEventListener('submit', sendEmail);
}

// Update navigation active links based on current page
function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav__link');
    
    // Remove active class from all links
    navLinks.forEach(link => {
        link.classList.remove('active-link');
    });
    
    // Set active class based on current page
    if (currentPage === 'business.html') {
        // For business page, activate the business link
        const businessLink = document.querySelector('.nav__link[href="business.html"]');
        if (businessLink) {
            businessLink.classList.add('active-link');
        }
    } else if (currentPage === 'index.html' || currentPage === '') {
        // For index page, use scroll-based activation
        window.addEventListener('scroll', scrollActive);
        // Also set home as active by default if at top
        if (window.scrollY < 100) {
            const homeLink = document.querySelector('.nav__link[href="#home"]');
            if (homeLink) {
                homeLink.classList.add('active-link');
            }
        }
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateActiveNavLink();
    
    // Initial scroll active check
    if (window.location.pathname.split('/').pop() === 'index.html' || 
        window.location.pathname.split('/').pop() === '') {
        scrollActive();
    }
});