/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*===== MENU HIDDEN =====*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const header = document.getElementById('header');
    // when the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    
    // Check if element exists before trying to use it
    if (!scrollUp) return;
    
    // when the scroll is greater than 350 viewport height, add the show-scroll class to the scroll top class
    if (this.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUp);
/*==================== ABOUT TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('tab__active');
        });

        target.classList.add('tab__active');

        tabs.forEach((tab) => {
            tab.classList.remove('tab__active');
        });

        tab.classList.add('tab__active');
    });
});
/*=============== CONTACT FORM =============== */
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    const contactName = document.getElementById('contact-name'),
          contactEmail = document.getElementById('contact-email'),
          contactSubject = document.getElementById('contact-subject'),
          contactMessage = document.getElementById('contact-message'),
          errorMessage = document.getElementById('error-message');

    const sendEmail = (e) => {
        e.preventDefault();

        // Check if elements exist
        if (!contactName || !contactEmail || !contactSubject || !contactMessage || !errorMessage) return;

        // Check if the field has value
        if (
            contactName.value === '' || 
            contactEmail.value === '' || 
            contactSubject.value === '' || 
            contactMessage.value === ''
        ) {
            // Show message
            errorMessage.textContent = 'Please fill in all the input fields';
            errorMessage.classList.remove('color-first');
        } else {
            // ServiceID - templateID - #form - publickey
            emailjs.sendForm(
                'service_797yyww', 
                'template_hctp0tv', 
                '#contact-form', 
                'GOgV4nN1fZNFxAT-e'
            ).then(
                () => {
                    // Show message and add color
                    errorMessage.classList.add('color-first');
                    errorMessage.textContent = 'Message sent ✔️';

                    // Remove message after 5 seconds
                    setTimeout(() => {
                        errorMessage.textContent = '';
                    }, 5000);
                },
                (error) => {
                    errorMessage.textContent = 'Oops! Something went wrong. Please try again.';
                    console.error('EmailJS Error:', error);
                }
            );

            // Clear input fields
            contactName.value = '';
            contactEmail.value = '';
            contactSubject.value = '';
            contactMessage.value = '';
        }
    };

    contactForm.addEventListener('submit', sendEmail);
}