// given a n*n matrix, find the difference of sum of both diagonals

const diagonalSum = function(arr, n){
    // sums of diagonals 
    let d1=0 , d2=0
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(i===j){
                d1 += arr[i][j]
            }
            if(i=== n-1-j){
                d2 += arr[i][j]
            }
        }
    }
    return (d1-d2);
}
 let a = [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ],
[ 1, 2, 3, 4 ], [ 5, 6, 7, 0 ] ]

console.log(diagonalSum(a, 4))