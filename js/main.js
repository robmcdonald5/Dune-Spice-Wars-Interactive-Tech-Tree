import { initializeHouseNav } from './houseNav.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeHouseNav(
        ['Atreides', 'Harkonnen', 'Smugglers', 'Fremen', 'Corrino', 'Ecaz', 'Vernius'],
        (selectedHouse) => {
            console.log(`Selected house: ${selectedHouse}`);
            // You can add your logic here to handle house selection and load content
        }
    );
});