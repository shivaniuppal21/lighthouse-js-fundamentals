var repeatNumbers = function(data){
let string = "";
for (let row = 0; row < data.length; row++){
for (let col = 1; col <= data[row][1]; col++) {
string += data[row][0];
}
if(row < data.length - 1) {
string += ", ";
}
}
return string;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

