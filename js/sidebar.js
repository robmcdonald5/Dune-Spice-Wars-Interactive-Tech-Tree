// js/sidebar.js
document.addEventListener('DOMContentLoaded', () => {
    const sidebarLinks = document.querySelectorAll('#sidebar a');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const targetId = link.getAttribute('data-target');
            const contentSections = document.querySelectorAll('.content-section');

            // Remove active class from all links
            sidebarLinks.forEach(l => l.classList.remove('active'));

            // Add active class to clicked link
            link.classList.add('active');

            // Show the target section, hide others
            contentSections.forEach(section => {
                if (section.id === targetId) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });
});