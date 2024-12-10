document.addEventListener("DOMContentLoaded", () => {
    // Adiciona comportamento suave ao scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Alerta ao enviar o formulário
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.');
    });

    // Adiciona imagens de fundo dinamicamente
    document.querySelectorAll("[data-bg]").forEach((element) => {
        const bgImage = element.getAttribute("data-bg");
        if (bgImage) {
            element.style.backgroundImage = `url(${bgImage})`;
        }
    });

    // Controle do menu hamburger
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('header nav ul');

    if (hamburger && menu) {
        hamburger.addEventListener('click', () => {
            menu.classList.toggle('active'); // Alterna a classe 'active' para mostrar ou esconder o menu
        });
    }
});
