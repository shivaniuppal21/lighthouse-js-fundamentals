const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  
function finalPosition(moves){
let coordinates = [0,0]
for(var position of moves){
    if (position === "north"({
        coordinates[1] += 1;  
    else if (position === "south"){
        coordinates[1] -= 1;
    else if (position === "east"){
        coordinates[0] += 1
    else if (position === "west"){
        coordinates[0] += 1
            }
        }
    }
return coordinates;
}

       
        


    






finalPosition(moves);
