const camelCase = function(input){
    let string = ''
    for(var i=0;i<input.length;i++)
    {
        if (input[i] === " "){
            if (i === 0)
            {
                string = string + input[i+1].toLowerCase()
            }
            else{
                string = string + input[i+1].toUpperCase()
            }
            i += 1;
        }
        else{
            string = string + input[i]
        }
    }
    return string
}
console.log(camelCase(" This is a string"));
