document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.header__nav a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    const form = document.querySelector('.contact__form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simulamos la validación
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('¡Mensaje enviado con éxito!');
            form.reset();
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
    
    const themeToggleButton = document.querySelector('.theme-toggle');

    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.querySelector('.header').classList.toggle('dark-mode');
        document.querySelectorAll('.profile, .education, .skills, .languages, .contact').forEach(section => {
            section.classList.toggle('dark-mode');
        });
    });

});
