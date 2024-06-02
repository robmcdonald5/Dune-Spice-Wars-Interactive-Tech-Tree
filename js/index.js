document.addEventListener('DOMContentLoaded', (event) => {
    const houseNavigationLinks = document.querySelectorAll('#house-navigation a');
    const contentArea = document.getElementById('main-content');

    // Function to load content
    function loadContent(house) {
        // Create a basic structure for the house page
        contentArea.innerHTML = `
            <div id="content"> 
                <header>
                    <h1>House ${house}</h1>
                    <a href="index.html" id="home-button">Home</a>
                </header>
                <nav id="${house}-navigation">
                    <ul>
                        <li><a href="#" data-section="tech-tree">Tech Tree</a></li>
                        <li><a href="#" data-section="units">Units</a></li>
                        <li><a href="#" data-section="faction-bonuses">Faction Bonuses</a></li>
                    </ul>
                </nav>
                <div id="${house}-content">
                    <h2>${house} Content</h2> 
                </div>
            </div>
        `;

        // Add event listeners to the new navigation links
        attachNavigationEvents();
    }

    // Function to attach event listeners to navigation links
    function attachNavigationEvents() {
        const navLinks = document.querySelectorAll('#content nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault(); 
                const section = link.getAttribute('data-section');
                // Here you'll load the content for the selected section
                console.log(`Loading ${section} content...`);
            });
        });
    }


    // Add event listeners to each house link
    houseNavigationLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); 
            const house = link.getAttribute('data-house');
            loadContent(house);
        });
    });
});