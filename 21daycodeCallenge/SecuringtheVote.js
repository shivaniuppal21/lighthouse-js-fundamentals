const name = 'Sally';
    const votes = [
      0, // Tim
      2, // Sally
      1 // Beth
    ]

const castVote = function(name,votes) {
        if (name === "Sally"){
            votes[1] += 1
        }
        else if (name === "Tim"){
            votes[0] += 1
        }
        else if (name === "Beth"){
            votes[2] += 1
        }
 return votes

}
console.log(castVote("Sally",[1,1,2]))