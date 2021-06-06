/* find the number of vowels in the given string
input = string
output = integer */
const vowels = function(str){
    // a, e, i, o ,u 
    // no of vowels = n 
     let n =0;
     const vowels = [ 'a', 'e', 'i', 'o', 'u']
     for(let elem of str){
         if(vowels.includes(elem)){
             n+=1}    
    } 
    return n 
}

console.log(vowels("baueits"))