/* find all prime numbers between 20 and 100
input = list
output = list */
const prime = function(start, end ){
    let primeList = []
    for(let i = start; i<=end; i++){
        for(let j=2 ; j < i; j++) {
            if(i%j === 0 ){
                break
            }
            if(j===i-1){
                primeList.push(i)}
        }
    } return primeList
}
// driver code 
console.log(prime(20,100))