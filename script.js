<<<<<<< HEAD

=======
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

document.getElementByClass("grid").addEventListener("mouseover", function(hover{
    
    hover.grid.className = "hover";
});


    

>>>>>>> grid OK
