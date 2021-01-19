const talkingCalendar = function(date) {
    let y = date.slice(0, 4);
    let m = date.slice(5, 7);
    let d = date.slice(8, 10);
    let numSuffix;
    
    switch (m) {
        case '01': m = 'January'; break;  
        case '02': m = 'February'; break;
        case '03': m = 'March'; break;
        case '04': m = 'April'; break;
        case '05': m = 'May'; break;
        case '06': m = 'June'; break;
        case '07': m = 'July'; break;
        case '08': m = 'August'; break;
        case '09': m = 'September'; break;
        case '10': m = 'October'; break;
        case '11': m = 'November'; break;
        case '12': m = 'December'; break;
    }

    switch (d) {
        case '01': numSuffix = 'st'; break;
        case '02': numSuffix = 'nd'; break;
        case '03': numSuffix = 'rd'; break;
        case '21': numSuffix = 'st'; break;
        case '22': numSuffix = 'nd'; break;
        case '23': numSuffix = 'rd'; break;
        case '31': numSuffix = 'st'; break;
        default: numSuffix = 'th'; break;
    }
    return `${m} ${Number(d)}${numSuffix}, ${y}` 
  };
  
  console.log(talkingCalendar("2017/12/02"));
  console.log(talkingCalendar("2007/11/11"));
  console.log(talkingCalendar("1987/08/24"));