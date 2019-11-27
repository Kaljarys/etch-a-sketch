var container = document.getElementById("container");
var grid = document.createElement("div"); 
grid.setAttribute("id", "grid");
var row = 16; 
var column = row; 
var gridSize = 700 / row;
grid.style.width = gridSize + "px";
grid.style.height = gridSize + "px"; 

function gridGeneration(row, column){
    for(var i = 0; i < column; i++){
        for(var e = 0; e < row; e++){
            container.appendChild(grid);
            console.log("grid created" + e + i);  
        }
    }
}
gridGeneration(row, column);