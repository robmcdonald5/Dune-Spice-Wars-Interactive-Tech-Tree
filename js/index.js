function closeOverlay(overlayId) {
    document.getElementById(overlayId).style.display = "none";
}

// Function to show tooltip
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
// Event listener for all navigation links (needs to be applied after the DOM is fully loaded)
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll("a[data-target]"); // Select all links with a data-target attribute

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default link behavior

            const targetOverlayId = link.getAttribute("data-target");
            const overlayContent = document.getElementById(targetOverlayId).querySelector('.overlay-content');

            // Fetch content from the href and inject it into the overlay
            fetch(link.getAttribute("href"))
                .then(response => response.text())
                .then(html => {
                    // Find the h2 tag in the overlay content 
                    const h2 = overlayContent.querySelector('h2');

                    // Insert the fetched HTML after the h2
                    h2.insertAdjacentHTML('afterend', html);

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
});