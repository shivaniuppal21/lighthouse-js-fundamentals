const name = 'Bradley';
const unregisteredVoters = ['Jake', 'Alanna', 'Bradley', 'Stephanie'];


const registerToVote = function(name, unregisteredVoters){
    if (unregisteredVoters.includes(name)){
        return unregisteredVoters.filter( voter => voter !== name) 
        }
    }

console.log(registerToVote(name, unregisteredVoters))