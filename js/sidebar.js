document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const sidebarUl = document.querySelector('#sidebar ul'); // Select the <ul> element
    const currentPath = window.location.pathname.split('/').pop(); 

    let navLinks = [];

    if (currentPath === 'index.html') {
        sidebar.style.display = 'none'; 
    } else if (currentPath.includes('atreides')) {
        navLinks = [
            { href: "../index.html", text: "Home" },
            { href: "Atreides/atreides-tech-tree.html", text: "Tech Tree" },
            { href: "Atreides/atreides-units.html", text: "Units" },
            { href: "Atreides/atreides-buildings.html", text: "Buildings" },
            { href: "Atreides/atreides-counselors.html", text: "Counselors" }
        ];
    } 
    // Add else if blocks for other houses similarly...

    // Create the sidebar navigation 
    sidebarUl.innerHTML = ''; // Clear the content of the <ul>
    navLinks.forEach(link => {
        const listItem = document.createElement('li');
        const linkElement = document.createElement('a');
        linkElement.href = link.href;
        linkElement.textContent = link.text;
        listItem.appendChild(linkElement);
        sidebarUl.appendChild(listItem);
    });
});