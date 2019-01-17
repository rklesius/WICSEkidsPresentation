function CountCoins(change)
{   
    //Start off with zero of each coin
    let quarterCount = 0;
    let dimeCount = 0;
    let nickelCount = 0;
    let pennyCount = 0;
    
    //Check user input
    if(isNaN(change) || (change < 1 || change > 99))
    {
        alert("Please enter a valid number");
        return;
    }
    
    //Find the amount of each coin we need
    while (change != 0)
    {
        if(change > 25)
        {
            quarterCount = quarterCount + 1;
            change = change - 25;
            continue;
        }
        
        if(change > 10)
        {
            dimeCount = dimeCount + 1;
            change = change - 10;
            continue;
        }
        
        if(change > 5)
        {
            nickelCount = nickelCount + 1;
            change = change - 5;
            continue;
        }
        
        else
        {
            pennyCount = change;
            change = 0;
        }
    }
    
    //Send the data to the HTML page
    let output;
    output = "Quarters: " + quarterCount + "\nDimes: " + dimeCount + "\nNickels: " + nickelCount + "\nPennies: " + pennyCount + "\n";
    alert(output);

}