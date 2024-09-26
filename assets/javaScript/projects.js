document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-button');
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('projectModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const closeModal = document.querySelector('.close-modal');

    function filterProjects(category) {
        projectCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            if (category === 'all' || cardCategory === category) {
                card.style.display = 'block';
                setTimeout(() => card.classList.add('show'), 50);
            } else {
                card.classList.remove('show');
                setTimeout(() => card.style.display = 'none', 300);
            }
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const category = button.getAttribute('data-filter');
            filterProjects(category);
        });
    });

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const image = card.querySelector('.project-image').src;
            const title = card.querySelector('.project-title').textContent;
            const description = card.querySelector('.project-description').textContent;

            modalImage.src = image;
            modalTitle.textContent = title;
            modalDescription.textContent = description;
            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Inicializar com todos os projetos visíveis
    filterProjects('all');
});