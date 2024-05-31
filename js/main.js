import { initializeHouseNav } from './houseNav.js';
import { initializeTechTree } from './components/techTree.js';
import { loadTechTreeData } from './data.js'; // Import data loading function

document.addEventListener('DOMContentLoaded', async () => {
    const techTreeData = await loadTechTreeData();
    initializeHouseNav(
        ['Atreides', 'Harkonnen', 'Smugglers', 'Fremen', 'Corrino', 'Ecaz', 'Vernius'],
        (selectedHouse) => {
            console.log(`Selected house: ${selectedHouse}`); 
            // Add logic to handle house selection and load content if needed
        }
    );
});