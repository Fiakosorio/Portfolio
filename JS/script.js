
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* Enlace activo de la sección de desplazamiento */
let secciones = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    secciones.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* Scroll Reveal */
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 100 
});

ScrollReveal().reveal('.inicio-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.inicio-img, .servicios-container, .portfolio-caja, .contacto-form', { origin: 'bottom'});
ScrollReveal().reveal('.inicio-content h1, .sobreMi-img', { origin: 'left'});
ScrollReveal().reveal('.inicio-content p, .sobreMi-content', { origin: 'right'});

const typed = new Typed('.multiple-text', {
    strings: [
        'Desarrollo Fullstack', 
        'WordPress Expert', 
        'Implementación de IA', 
        'Diseño Web'
    ],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

