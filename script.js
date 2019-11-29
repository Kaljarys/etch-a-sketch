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
    
}



var grids = document.querySelectorAll(".grid");
grids.forEach((grid) => {
    grid.addEventListener("mouseover", (e) => {
        e.target.style.background = 'black';
    })
})

var clearGrid = document.querySelector("#clearGrid");
grids.forEach((grid) => {
    clearGrid.addEventListener("click", (e) => {
        grid.style.background = "white";
    })
})

let selectSize =  document.querySelector("#selectSize");
let number = () => +(window.prompt("How many rows?"));
selectSize.addEventListener("click", () => {
    number();
     grids.forEach(function(grid){
         grid.parentNode.removeChild(grid);
     })   
    gridGeneration(number);
})
 

