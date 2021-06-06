//The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.

// take input from user (recurssion method)
const n = parseInt("Enter the number of terms: ");
let fibonacciSeries = function(n){
// if n = 1 then return [0], n=2 return [0,1]
// else push [n.length -1 + n.length-2] to the series and repeat 

if (n===1){
    return [0]
}
else if(n=== 2){
    return [0,1]
} else{
    let s = fibonacciSeries(n-1)
    s.push(s[s.length-1] + s[s.length-2])
    return s
    }
}

console.log(fibonacciSeries(10))

// loops
/*let n1=0 ; n2=1; nextTerm;
for(let i=1, i <= n; i++){
    nextTerm = n1 + n2;
    n1=n2;
    n2 = nextTerm;
}*/
