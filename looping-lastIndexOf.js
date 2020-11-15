function lastIndexOf(index, value){
    let output = 0;
    if (index === []){
    return output = -1;
    } else {
    for (let i=0; i<index.length; i++){
    if(index[i] === value){
    output = i;
    }
    }
    }
    return output;
    }
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1))
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2))
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3))
console.log(lastIndexOf([ 5, 5, 5 ], 5))
console.log(lastIndexOf([], 3))