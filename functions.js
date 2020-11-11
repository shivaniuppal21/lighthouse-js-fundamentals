funtion reverseString(reverseMe){
var reversed = "";
for (var i = reverseMe.length-1; i >= 0; 1--){
    reversed += reverseMe[i]
}
return reversed;
}
console.log(reverseString("Shivani"));
