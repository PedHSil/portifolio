function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetWidth = entry.target.getAttribute('data-width');
                entry.target.style.width = `${targetWidth}%`;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => observer.observe(bar));
}

document.addEventListener('DOMContentLoaded', animateSkillBars);