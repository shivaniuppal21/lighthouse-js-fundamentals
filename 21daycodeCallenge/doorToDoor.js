const volunteers = [
    'Sally',
    'Jake',
    'Brian',
    'Hamid'
  ];

  const neighbourhoods = [
    'Central Valley',
    'Big Mountain',
    'Little Bridge',
    'Bricktown',
    'Brownsville',
    "Paul's Boutique",
    'Clay Park',
    'Fox Nest'
  ];

  const DoorToDoor = function(volunteers, neighbourhoods){
    let ratio = 0
    numVolunteers = volunteers.length
    numNeighbourhoods = neighbourhoods.length
    ratio = Math.ceil(numNeighbourhoods/numVolunteers)
    return ratio
}
console.log(DoorToDoor(volunteers, neighbourhoods))