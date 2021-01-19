const multiplicationTable = function (maxValue){
    let result = ""
    for(var i=1 ; i<= maxValue; i++){
        for (var j=1; j<= maxValue; j++){
            if (j % maxValue === 0) {
                result = result + (i*j) + "\n";
            }
            else {
                result = result + (i*j) + " ";
            }       
        } 
    }
    return result
}
console.log(multiplicationTable(5));