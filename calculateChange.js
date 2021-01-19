const calculateChange = function(total,cash){
    let change = (cash - total)*100;
    let cashType = {
        twentyDollar:0,
        tenDollar:0,
        fiveDollar:0,
        twoDollar:0,
        oneDollar:0,
        quarter:0,
        dime:0,
        nickel:0,
        penny:0
        }
    while(change > 0){
        if(change - 2000 >= 0){
            cashType.twentyDollar += 1;
            change -= 2000;
        }
        if(change - 1000 >= 0){
            cashType.tenDollar += 1;
            change -= 1000;
        }
        else if(change - 500 >= 0){
            cashType.fiveDollar += 1;
            change -= 500;        
        }
        else if(change - 200 >= 0){
            cashType.twoDollar += 1;
            change -= 200;
        }
        else if(change - 100 >= 0){
            cashType.oneDollar += 1;
            change -= 100;
        }
        else if(change - 25 >= 0){
            cashType.quarter += 1;
            change -= 25;
        }
        else if(change - 10 >= 0){
            cashType.dime += 1;
            change -= 10;    
        }
        else if(change - 5 >= 0){
            cashType.nickel += 1;
            change -= 5;
        }
        else if(change - 1 >= 0){
            cashType.penny += 1;
            change -= 1;

        }else if (change - 0.9 >= 0) {
            cashType.penny += 1;
            change -= 0.9;
          }
          else {
            break;
          }
        }
        if (cashType.twentyDollar === 0){
          delete cashType.twentyDollar;
        }
        if (cashType.tenDollar === 0){
          delete cashType.tenDollar;
        }
        if (cashType.fiveDollar === 0){
          delete cashType.fiveDollar;
        }
        if (cashType.twoDollar === 0){
          delete cashType.twoDollar;
        }
        if (cashType.oneDollar === 0){
          delete cashType.oneDollar;
        }
        if (cashType.quarter === 0){
          delete cashType.quarter;
        }
        if (cashType.dime === 0){
          delete cashType.dime;
        }
        if (cashType.nickel === 0){
          delete cashType.nickel;
        }
        if (cashType.penny === 0){
          delete cashType.penny;
        }
        return cashType;
        }
        
        console.log(calculateChange(17.87, 20));
        console.log(calculateChange(26.23, 40));
        console.log(calculateChange(5.01, 10));

