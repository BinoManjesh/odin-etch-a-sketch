let gridSize = 16;
let grid = document.createElement("div");
grid.classList.add("grid");
for (let i = 1; i <= gridSize; ++i) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 1; j <= gridSize; ++j) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        row.appendChild(cell);
    }
    grid.appendChild(row);
}
document.querySelector("body").appendChild(grid);
