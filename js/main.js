// js/main.js
import { initializeHouseNav } from './houseNav.js';
import { initializeTechTree } from './components/techTree.js';
import { loadTechTreeData } from './data.js';

document.addEventListener('DOMContentLoaded', async () => {
    const techTreeData = await loadTechTreeData(); // Placeholder for now
    const mainContent = document.getElementById('main-content');

    initializeHouseNav(
        ['Atreides', 'Harkonnen', 'Fremen', 'Smugglers'], // House names 
        (selectedHouse) => {  // Callback when a house is selected
            // 1. Clear existing content in mainContent
            mainContent.innerHTML = '';

            // 2. Load and display the appropriate component 
            if (selectedHouse === 'Atreides') {
                initializeTechTree(mainContent, techTreeData); 
                // (Add logic for other components when ready)
            } else {
                // Placeholder for now:
                mainContent.textContent = `Content for ${selectedHouse} coming soon!`;
            }
        }
    );
});