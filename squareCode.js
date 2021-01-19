const squareCode = function(message) {
    let codedMessage = message.replace(/ /g,'')
    let rows = []
    let output = ''
    let square = Math.ceil(Math.sqrt(codedMessage.length))
    for(let i = 0; i < codedMessage.length; i += square){
       rows.push(codedMessage.slice(i,i+square))
        //return rows.push(codedMessage.slice(i,i+square))
    }console.log(rows)
    for(let j = 0; j < rows[0].length; j++){

      for( let k = 0; k < rows.length; k++){
        if(rows[k][j]){
          output += rows[k][j]

        }
      }
      output += " "
    }
    return output
  };
  
console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));