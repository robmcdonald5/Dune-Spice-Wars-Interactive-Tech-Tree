const houseNavigation = document.getElementById("house-navigation");
const contentContainer = document.getElementById("content");

const houses = [
  { name: "Atreides", href: "atreides.html" },
  { name: "Harkonnen", href: "harkonnen.html" },
  { name: "Smugglers", href: "smugglers.html" },
  { name: "Fremen", href: "fremen.html" },
  { name: "Corrino", href: "corrino.html" },
  { name: "Ecaz", href: "ecaz.html" },
  { name: "Vernius", href: "vernius.html" },
];

function createNavigationList() {
  const list = document.createElement("ul");

  houses.forEach((house) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = house.href;
    link.textContent = house.name;
    listItem.appendChild(link);
    list.appendChild(listItem);
  });

  return list;
}

function loadContent(house) {
  // Load content for the selected house
  fetch(house.href)
    .then((response) => response.text())
    .then((html) => {
      contentContainer.innerHTML = html;
    });
}

houseNavigation.appendChild(createNavigationList());

// Handle navigation clicks
houseNavigation.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    const selectedHouse = houses.find(
      (house) => house.name === event.target.textContent
    );
    loadContent(selectedHouse);
  }
});