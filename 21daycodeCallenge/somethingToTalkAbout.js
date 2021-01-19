const interviewAnswer = function(topic){
    if(topic === "economy"){
        return "Time is Money"
    }
        else if (topic === "transportation"){
        return "It's going to be a long road, so we better get moving."
    }
        else if (topic === "arts funding"){
        return "We'll have to get creative!"
    }
    else {
        return "QUACK"
    }
}
console.log(interviewAnswer("arts funding "))