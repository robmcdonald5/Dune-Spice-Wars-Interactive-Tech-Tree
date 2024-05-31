export function initializeHouseNav(houseNames, onHouseSelect) {
    const houseNav = document.getElementById('house-nav');
    const navList = document.createElement('ul');
    const sidebar = document.createElement('div');
    sidebar.id = 'sidebar';
    document.body.appendChild(sidebar);

    houseNames.forEach(house => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `${house}/${house}.html`;
        link.textContent = house;

        link.addEventListener('click', (event) => {
            event.preventDefault();
            const activeLink = houseNav.querySelector('.active');
            if (activeLink) {
                activeLink.classList.remove('active');
            }
            link.classList.add('active');
            onHouseSelect(house); 
            populateSidebar(house);
        });

        listItem.appendChild(link);
        navList.appendChild(listItem);
    });

    houseNav.appendChild(navList);

    // Call populateSidebar on page load to initialize the sidebar
    populateSidebar(getCurrentHouse());

    function populateSidebar(houseName) {
        const sidebarUl = document.createElement('ul');
        const currentPath = window.location.pathname.split('/').pop();
        let navLinks = [
            { href: "../index.html", text: "Home" }
        ];

        if (houseName === 'Atreides') {
            if (currentPath !== 'atreides-tech-tree.html') {
                navLinks.push({ href: "Atreides/atreides-tech-tree.html", text: "Tech Tree" });
            }
            if (currentPath !== 'atreides-units.html') {
                navLinks.push({ href: "Atreides/atreides-units.html", text: "Units" });
            }
            if (currentPath !== 'atreides-buildings.html') {
                navLinks.push({ href: "Atreides/atreides-buildings.html", text: "Buildings" });
            }
            if (currentPath !== 'atreides-counselors.html') {
                navLinks.push({ href: "Atreides/atreides-counselors.html", text: "Counselors" });
            }
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

        sidebar.innerHTML = '';
        sidebar.appendChild(sidebarUl);
    }
    function getCurrentHouse() {
        const currentPath = window.location.pathname.split('/').pop();
        for (const house of houseNames) {
            if (currentPath.includes(house.toLowerCase())) {
                return house;
            }
        }
        return null; // Or some default house if needed
    }
}