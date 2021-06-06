/* create function that checks a palindrome
input: string
output: boolean, true if palindrome else false
*/
const palindrome =  function(input){
    // input[0] === input[length-1] and so on..

    for(let i=0; i<input.length; i++){
        if(input[i]=== input[input.length-i-1]){
        }else{
            return false
        }
    }return true 
}
// driver code 
console.log(palindrome("abcba"))
console.log(palindrome('asdfg'))
console.log(palindrome('abba'))