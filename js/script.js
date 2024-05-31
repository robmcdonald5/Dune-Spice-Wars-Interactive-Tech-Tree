// js/script.js
const techTreeContainer = d3.select("#tech-tree-container");
const width = 1200; // Adjust based on your tech tree size
const height = 800;

// Create SVG element within the container
const svg = techTreeContainer.append("svg")
    .attr("width", width)
    .attr("height", height);

// Tooltip Setup (append to body, not svg)
const tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0); 

// ... (Load your techTreeData - see data representation from previous responses)

// Force Simulation
const simulation = d3.forceSimulation(techTreeData.nodes)
  .force("link", d3.forceLink(techTreeData.edges).id(d => d.id).distance(150))
  .force("charge", d3.forceManyBody().strength(-300))
  // ... (Add custom forces if needed to position category nodes)

// Create links (gold lines)
const link = svg.append("g")
  .attr("class", "links")
  .selectAll("line")
  .data(techTreeData.edges)
  .enter().append("line")
  .attr("class", "link");

// ... (Style links dynamically if needed based on the game's CSS)

// Create nodes
const node = svg.append("g")
  .attr("class", "nodes")
  .selectAll("g")
  .data(techTreeData.nodes)
  .enter().append("g")
  .attr("class", d => d.category ? "node category" : "node") // Add category class 
  .on("mouseover", (event, d) => { // Tooltip on mouseover
    tooltip.transition()
      .duration(200)
      .style("opacity", 0.9); 
    tooltip.html(`<h3>${d.label}</h3><p>${d.description}</p>`) 
      .style("left", (event.pageX + 10) + "px")
      .style("top", (event.pageY - 28) + "px");
  })
  .on("mouseout", () => { // Hide tooltip on mouseout
    tooltip.transition()
      .duration(500)
      .style("opacity", 0);
  });

// Append elements within each node (image, text) - example:
node.append("image") 
  .attr("xlink:href", d => d.icon) // Assuming 'icon' is in your data
  .attr("width", 32)
  .attr("height", 32)
  .attr("x", -16) // Center the image
  .attr("y", -16); 

node.append("text")
  .text(d => d.label)
  .attr("text-anchor", "middle") 
  .attr("dy", "1.35em"); // Position text below the image

// Update positions on tick
simulation.on("tick", () => {
  link
    .attr("x1", d => d.source.x)
    .attr("y1", d => d.source.y)
    .attr("x2", d => d.target.x)
    .attr("y2", d => d.target.y);

  node.attr("transform", d => `translate(${d.x}, ${d.y})`);
});