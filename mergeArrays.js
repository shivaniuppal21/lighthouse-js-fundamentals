var merge = function(array1,array2){
    var concat = array1.concat(array2);
    return concat.sort()
}

merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]);