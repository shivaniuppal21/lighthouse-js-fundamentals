/* find number of even numbers in the given list
input= list
output = integer*/
 const even = function(list){
    //n/2 === 0; even then push to a new empty list 
   const newList = list.filter((n) => {
        return n%2 === 0
    })
    return [newList, newList.length]

 } 

 // driver code 
 console.log(even([1,2,3,4,5,6,9,5,4]))