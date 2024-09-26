document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para enviar o formulário
        // Por exemplo, usando fetch para enviar os dados para um servidor
        console.log('Formulário enviado!');
        alert('Obrigado por entrar em contato! Retornaremos em breve.');
        form.reset();
    });
});