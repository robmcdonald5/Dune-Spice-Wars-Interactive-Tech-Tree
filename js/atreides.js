function closeOverlay(overlayId) {
    document.getElementById(overlayId).style.display = "none";
}

// Event listener for all navigation links
const navLinks = document.querySelectorAll("#atreides-navigation a");
navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default link behavior

        const targetOverlayId = link.getAttribute("data-target");
        const overlayContent = document.getElementById(targetOverlayId).querySelector('.overlay-content');

        // Fetch content from the href and inject it into the overlay
        fetch(link.getAttribute("href"))
            .then(response => response.text())
            .then(html => {
                overlayContent.innerHTML = html; // Update overlay content

                // After content is loaded, re-attach event listeners for tooltips
                const techNodes = document.querySelectorAll('.tech-node');
                techNodes.forEach(node => {
                    node.addEventListener('mouseover', showTooltip);
                    node.addEventListener('mouseout', hideTooltip);
                });
            });

        document.getElementById(targetOverlayId).style.display = "block";
    });
});

function showTooltip(event) {
    const node = event.target;
    const info = node.getAttribute('data-tech-info');
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = info;
    node.appendChild(tooltip);
}

// Function to hide tooltip
function hideTooltip(event) {
    const node = event.target;
    const tooltip = node.querySelector('.tooltip');
    if (tooltip) {
        node.removeChild(tooltip);
    }
}