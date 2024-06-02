const atreidesNavigation = document.getElementById("atreides-navigation");
const atreidesContent = document.getElementById("atreides-content");

const atreidesData = {
  techTree: {
    // Tech tree data (can be loaded from atreides-data.json)
  },
  units: {
    // Units data (can be loaded from atreides-data.json)
  },
  factionBonuses: {
    // Faction Bonuses data (can be loaded from atreides-data.json)
  },
};

function loadAtreidesContent(section) {
  switch (section) {
    case "techTree":
      // Load tech tree content
      atreidesContent.innerHTML = `
        <h2>Atreides Tech Tree</h2>
        <!-- Display tech tree data here -->
      `;
      break;
    case "units":
      // Load units content
      atreidesContent.innerHTML = `
        <h2>Atreides Units</h2>
        <!-- Display units data here -->
      `;
      break;
    case "factionBonuses":
      // Load faction bonuses content
      atreidesContent.innerHTML = `
        <h2>Atreides Faction Bonuses</h2>
        <!-- Display faction bonuses data here -->
      `;
      break;
    default:
      atreidesContent.innerHTML = "Invalid section";
  }
}

atreidesNavigation.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    const section = event.target.id.replace("atreides-", "");
    loadAtreidesContent(section);
  }
});