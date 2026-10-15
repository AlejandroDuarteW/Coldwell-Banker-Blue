// Cambiar sombra y opacidad del Header al hacer scroll
const siteHeader = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  if(window.scrollY > 40) {
    siteHeader.classList.add('scrolled');
  } else {
    siteHeader.classList.remove('scrolled');
  }
});

// Menú móvil desplegable e interactivo
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if(navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    navToggle.classList.toggle('active');
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !expanded);
  });
}

// Cerrar menú móvil al hacer clic en cualquier enlace
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if(mainNav.classList.contains('open')) {
      mainNav.classList.remove('open');
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// Lógica y validación del formulario de contacto
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const submitBtn = document.getElementById('submitBtn');

if(contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if(!nombre || !email || !mensaje) {
      formStatus.style.color = '#E4CB8E';
      formStatus.textContent = 'Por favor, completá los campos obligatorios.';
      return;
    }

    // Simulación de estado de envío cargando
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';
    formStatus.textContent = '';

    setTimeout(() => {
      formStatus.style.color = '#E4CB8E';
      formStatus.textContent = '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.';
      contactForm.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = 'Enviar mensaje';

      setTimeout(() => {
        formStatus.textContent = '';
      }, 6000);
    }, 1000);
  });
}