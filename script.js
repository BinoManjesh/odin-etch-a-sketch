let grid = document.createElement("div");
const body = document.querySelector("body");
body.appendChild(grid);
changeGridSize(16);

function onClick() {
    const gridSize = +prompt("Enter number of pixels per row: ")
    if (Number.isInteger(gridSize) && 0 < gridSize && gridSize <= 100) {
        changeGridSize(gridSize);
    }
}

function changeColor(e) {
    switch(e.buttons) {
        case 1: case 3: case 5: case 9: case 17:
            e.target.style.backgroundColor = "black";
    }
}

function changeGridSize(gridSize) {
    body.removeChild(grid);
    grid = document.createElement("div");
    grid.classList.add("grid");
    for (let i = 1; i <= gridSize; ++i) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 1; j <= gridSize; ++j) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.addEventListener("mousemove", changeColor);
            cell.addEventListener("mousedown", changeColor);
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
    body.appendChild(grid);
}
