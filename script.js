gridGeneration(16);

// Size Input Event Action
// J'attache une seule et unique fois l'event 'click' sur le bouton (en règle générale: un seul event 'clic' par bouton).
// A chaque clic il executera la fonction (() => {...}) passée en parametre
document
    .querySelector("#selectSize")
    .addEventListener("click", () => {
        var number = window.prompt("How many rows?");
        var emptyGrid = document.createElement('div')
        document.getElementById("house").replaceChild(emptyGrid, document.getElementById('container'))
        emptyGrid.id = 'container'
        gridGeneration(number);
    })

// Clear Grid Event Action
// idem
document
    .querySelector("#clearGrid") 
    .addEventListener("click", () => {
        var grids = getGrids()
        grids.forEach((grid) => {
            grid.style.background = "white";
        })
    })


function gridGeneration(row) {
    var container = document.getElementById("container");
    container.style.gridTemplateColumns = " 1fr".repeat(row);
    container.style.gridTemplateRows = " 1fr".repeat(row);
    for (var i = 0; i < row * row; i++) {
        const grid = document.createElement("div");
        grid.className = "grid";
        container.appendChild(grid);
    }
    var grids = getGrids()
    // ici on laisse le addEventListener dans la fonction car on detruit les cases pour recréer notre nouvelle grille
    // il faudra donc re-attacher le mouseover pour chaque case 
    grids.forEach((grid) => {
        grid.addEventListener("mouseover", (e) => {
            e.target.style.background = 'black';
        })
    })
}

function getGrids() {
    return document.querySelectorAll(".grid");
}
