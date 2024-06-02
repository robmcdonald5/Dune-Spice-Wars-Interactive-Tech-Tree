function closeOverlay(overlayId) {
    document.getElementById(overlayId).style.display = "none";
}

// Event listener for all navigation links
const navLinks = document.querySelectorAll("#atreides-navigation a");
navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default link behavior

        const targetOverlayId = link.getAttribute("data-target");
        document.getElementById(targetOverlayId).style.display = "block";
    });
});