const blocksAway = function(direction){
    let grid = {east:0, north:0};
    var old_direction = "right"
    if (direction[0] === "right"){
        for (let i=0;i<direction.length;i+=4)
        {
            if (direction[i] === "right"){
                grid.east += direction[i+1];
    
            }
            else{
                grid.east -= direction[i+1];
            }
        }
        for (let i=2;i<direction.length;i+=4)
        {
            if (direction[i] === "left" ){
                grid.north += direction[i+1]; 
    
            }
            else{
                grid.north -= direction[i+1];
            }
        }
    }
    else{
        for (let i=0;i<direction.length;i+=4)
        {
            if (direction[i] === "left"){
                grid.north += direction[i+1];
    
            }
            else{
                grid.north -= direction[i+1];
            }
        }
        for (let i=2;i<direction.length;i+=4)
        {
            if (direction[i] === "right" && old_direction !== "right" ){
                grid.east += direction[i+1];
                old_direction = "right"
    
            }
            else{
                grid.east -= direction[i+1];
                old_direction = "left"
            }
        }

    }
return grid;
}


console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));