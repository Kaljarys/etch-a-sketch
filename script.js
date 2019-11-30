gridGeneration(16);




function gridGeneration(row){
    var container = document.getElementById("container");
    container.style.gridTemplateColumns = " 1fr".repeat(row);
    container.style.gridTemplateRows = " 1fr".repeat(row); 
    for(var i = 0; i < row*row; i++){
            const grid = document.createElement("div");
            grid.className = "grid";
            container.appendChild(grid); 
    }

    var grids = document.querySelectorAll(".grid");
        grids.forEach((grid) => {
            grid.addEventListener("mouseover", (e) => {
            e.target.style.background = "black";
    })
})
    var clearGrid = document.querySelector("#clearGrid");
        grids.forEach((grid) => {
            clearGrid.addEventListener("click", (e) => {
            grid.style.background = "white";
    })
})

    var selectSize =  document.querySelector("#selectSize");

    selectSize.addEventListener("click", () => {
             grids.forEach((grid) => {
            document.getElementById("container").removeChild(grid);
        })
    var number = window.prompt("How many rows?");
    gridGeneration(number);
})
}








 

