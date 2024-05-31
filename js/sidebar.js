// js/sidebar.js 
document.addEventListener('DOMContentLoaded', () => {
    const sidebarLinks = document.querySelectorAll('#sidebar a');
    const contentSections = document.querySelectorAll('.content-section');
    const closeButtons = document.querySelectorAll('.close-overlay');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            if (link.getAttribute('href') === 'index.html') {
                return;
            }

            // Hide all content sections
            contentSections.forEach(section => {
                section.classList.remove('show');
            });

            const targetId = link.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            // Show the targeted content section
            targetSection.classList.add('show');
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Hide the parent content section
            button.closest('.content-section').classList.remove('show');
        });
    });
});