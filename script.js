const grid = document.querySelector(".grid");
const resizeButton = document.querySelector(".button-78");

const maxWidth = 960;
let itemMargin = 1;

createGrid(16);

function createGrid(gridSize) {
  const size = getItemSize(gridSize);
  for (let i = 0; i < gridSize; i++) {
    let container = document.createElement("div");
    container.setAttribute("class", "container");
    for (let j = 0; j < gridSize; j++) {
      let item = document.createElement("div");
      item.setAttribute("class", "item");
      item.style.width = `${size}px`;
      item.style.height = `${size}px`;
      item.style.margin = `${itemMargin}px`;
      item.addEventListener("mouseover", hover);
      container.appendChild(item);
    }
    grid.appendChild(container);
  }
}

function getItemSize(gridSize) {
  return maxWidth / gridSize - itemMargin * 2;
}

function redrawGrid() {
  let gridSize = prompt("Enter grid size");
  if (isNaN(gridSize) || gridSize <= 0 || gridSize > 99) return;
  grid.innerHTML = "";
  itemMargin = (100 - gridSize) / 50;
  createGrid(gridSize);
}

function hover() {
  const [r1, r2, r3] = [
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255)
  ];

  this.style.backgroundColor = `rgba(${r1}, ${r2}, ${r3})`;
}

resizeButton.addEventListener("click", redrawGrid);
