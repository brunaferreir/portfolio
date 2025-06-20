document.addEventListener('DOMContentLoaded', () => {
    // Exemplo: Scroll suave para âncoras (links internos)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Exemplo: Feedback visual simples ao clicar em botões sociais (opcional)
    document.querySelectorAll('.social-button').forEach(button => {
        button.addEventListener('click', function(e) {
            // Apenas para mostrar que um JS pode ser adicionado
            // console.log('Clicado:', this.textContent.trim());
            // alert('Você clicou em ' + this.textContent.trim());
            // Em um cenário real, você faria algo como enviar dados ou navegar.
        });
    });

    // Você poderia adicionar aqui lógica para:
    // - Um carrossel de projetos
    // - Filtragem de projetos
    // - Um formulário de contato dinâmico
    // - Animações no scroll (usando Intersection Observer API)
});