const container = document.querySelector(".container");
const changeGridBtn = document.querySelector(".change-grid");
const currentSize = document.querySelector("p");
const clearBtn = document.querySelector("button.clear");
let prev_size;

function setGridSize(grid_size) {
    currentSize.textContent = `Current Grid Size: ${grid_size} x ${grid_size}`;
    prev_size = grid_size;
    for (let i = 0; i < grid_size**2; i++) {
        const square = document.createElement("div");
        let width = 100/grid_size;
        square.style.cssText = `border: 1px solid black; width: ${width}%; aspect-ratio: 1; margin: 0; opacity: 0.0`;  
        container.appendChild(square);
        const color = getRandomColor();
        square.addEventListener("mouseover", (event) => {
            event.target.style.background = color;
            let currentOpacity = parseFloat(event.target.style.opacity);
            if (currentOpacity < 1) {
                event.target.style.opacity = currentOpacity + 0.1;
            }
        })
    }
}

function getRandomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function clearGrid() {
    container.innerHTML = "";
}

function getGridSize() {
    grid_size = Number(prompt("Enter grid size (1-100): "));
    if ((!Number.isInteger(grid_size)) || (grid_size < 1) || (grid_size > 100)) {
        alert("ERROR: Please enter an integer between 1 and 100");
        return prev_size;
    }
    return grid_size;
}

changeGridBtn.addEventListener("click", () => {
    clearGrid();
    grid_size = getGridSize();
    setGridSize(grid_size);
})

clearBtn.addEventListener("click", () => {
    clearGrid();
    setGridSize(prev_size);
})

setGridSize(16);