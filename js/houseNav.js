// js/houseNav.js
export function initializeHouseNav(houseNames, onHouseSelect) {
    const houseNav = document.getElementById('house-nav');
    const navList = document.createElement('ul');

    houseNames.forEach(house => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = '#'; 
        link.textContent = house;

        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior

            // 1. Remove 'active' class from all links
            const activeLink = houseNav.querySelector('.active');
            if (activeLink) {
                activeLink.classList.remove('active');
            }

            // 2. Add 'active' class to the clicked link
            link.classList.add('active');

            // 3. Call the callback function (from main.js)
            onHouseSelect(house); 
        });

        listItem.appendChild(link);
        navList.appendChild(listItem);
    });

    houseNav.appendChild(navList);
}