const judgeVegetable = function (vegetables, metric) {
    // Your code in here ...
    let metricval = 0
    let correspondingsubmitter = ''
    for (let i=0;i<vegetables.length;i++)
    {
        if(vegetables[i][metric] > metricval){
            metricval = vegetables[i][metric]
            correspondingsubmitter = vegetables[i].submitter
        }
    }
    return correspondingsubmitter

  }
  
  const vegetables = [
    {
      submitter: 'Old Man Franklin',
      redness: 10,
      plumpness: 5
    },
    {
      submitter: 'Sally Tomato-Grower',
      redness: 2,
      plumpness: 8
    },
    {
      submitter: 'Hamid Hamidson',
      redness: 4,
      plumpness: 3
    }
  ]
  
  const metric = 'redness'
  
  console.log(judgeVegetable(vegetables, metric))