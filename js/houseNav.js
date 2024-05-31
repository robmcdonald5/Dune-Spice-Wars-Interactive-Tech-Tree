export function initializeHouseNav(houseNames, onHouseSelect) {
    const houseNav = document.getElementById('house-nav');
    const navList = document.createElement('ul');
    const sidebar = document.createElement('div'); // Create the sidebar <div>
    sidebar.id = 'sidebar';
    document.body.appendChild(sidebar); // Add sidebar to the page

    houseNames.forEach(house => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `${house}/${house}.html`; // Link to house page
        link.textContent = house;

        link.addEventListener('click', (event) => {
            event.preventDefault();
            // Remove 'active' class from all links
            const activeLink = houseNav.querySelector('.active');
            if (activeLink) {
                activeLink.classList.remove('active');
            }
            // Add 'active' class to the clicked link
            link.classList.add('active');
            onHouseSelect(house);
            populateSidebar(house); // Populate the sidebar for the selected house
        });

        listItem.appendChild(link);
        navList.appendChild(listItem);
    });

    houseNav.appendChild(navList);

    // Function to populate the sidebar based on the selected house
    function populateSidebar(houseName) {
        const sidebarUl = document.createElement('ul');
        let navLinks = [];

        if (houseName === 'Atreides') {
            navLinks = [
                { href: "../index.html", text: "Home" },
                { href: "Atreides/atreides-tech-tree.html", text: "Tech Tree" },
                { href: "Atreides/atreides-units.html", text: "Units" },
                { href: "Atreides/atreides-buildings.html", text: "Buildings" },
                { href: "Atreides/atreides-counselors.html", text: "Counselors" }
            ];
        } 
        // Add else if blocks for other houses similarly...

        navLinks.forEach(link => {
            const listItem = document.createElement('li');
            const linkElement = document.createElement('a');
            linkElement.href = link.href;
            linkElement.textContent = link.text;
            listItem.appendChild(linkElement);
            sidebarUl.appendChild(listItem);
        });

        sidebar.innerHTML = ''; // Clear existing content
        sidebar.appendChild(sidebarUl);
    }
}