const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

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

function scrollActive() {
    const currentPage = window.location.pathname.split('/').pop();
    
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
                document.querySelectorAll('.nav__menu a').forEach(link => {
                    link.classList.remove('active-link');
                });
                activeLink.classList.add('active-link');
            }
        }
    });
}

function scrollHeader() {
    const header = document.getElementById('header');
    if (header && this.scrollY >= 80) {
        header.classList.add('scroll-header');
    } else if (header) {
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

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
            errorMessage.classList.add('error-message');
            return;
        }

        errorMessage.textContent = 'Sending message...';
        errorMessage.classList.remove('color-first', 'error-message');

        if (typeof emailjs === 'undefined') {
            errorMessage.textContent = 'Email service not loaded. Please refresh the page.';
            errorMessage.classList.add('error-message');
            return;
        }

        emailjs.sendForm(
            'service_0wt0p2q', 
            'template_hctp0tv', 
            '#contact-form', 
            'd7Fsk1hnjBTfgBSXw' 
        ).then(
            (response) => {
                console.log('SUCCESS!', response.status, response.text);
                errorMessage.classList.add('color-first');
                errorMessage.textContent = 'Message sent successfully! ✔️';

                contactName.value = '';
                contactEmail.value = '';
                contactSubject.value = '';
                contactMessage.value = '';

                setTimeout(() => {
                    errorMessage.textContent = '';
                }, 5000);
            },
            (error) => {
                console.error('FAILED...', error);
                errorMessage.textContent = 'Oops! Something went wrong. Please try again.';
                errorMessage.classList.add('error-message');
            }
        );
    };

    contactForm.addEventListener('submit', sendEmail); 
} 

function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav__link');
    
    navLinks.forEach(link => {
        link.classList.remove('active-link');
    });
    
    if (currentPage === 'business.html') {
        const businessLink = document.querySelector('.nav__link[href="business.html"]');
        if (businessLink) {
            businessLink.classList.add('active-link');
        }
    } else if (currentPage === 'index.html' || currentPage === '') {
        window.addEventListener('scroll', scrollActive);
        if (window.scrollY < 100) {
            const homeLink = document.querySelector('.nav__link[href="#home"]');
            if (homeLink) {
                homeLink.classList.add('active-link');
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    updateActiveNavLink();
    
    if (window.location.pathname.split('/').pop() === 'index.html' || 
        window.location.pathname.split('/').pop() === '') {
        scrollActive();
    }
});