// https://github.com/SakibNoman/javascript-assignment


// ---===Kilometer to Meter===---

function kilometerToMeter(distanceInKilometer) {
    if (distanceInKilometer >= 0)   // Filtering valid input
    {
        var distanceInMeter = distanceInKilometer * 1000;   // Converting to meter(1km=1000m)
        return distanceInMeter;
    }
    else {
        return "Input is not valid";
    }
}


// ---===budget Calculator===---

function budgetCalculator(numberOfWatch, numberOfPhone, numberOfLaptop) {
    var watchUnitPrice = 50;
    var phoneUnitPrice = 100;
    var laptopUnitPrice = 500;
    if (numberOfWatch >= 0 && numberOfPhone >= 0 && numberOfLaptop >= 0) //filtering valid input
    {
        var totalBudget = (numberOfWatch * watchUnitPrice) + (numberOfPhone * phoneUnitPrice) + (numberOfLaptop * laptopUnitPrice);
        return totalBudget;
    }
    else {

        return "Please input valid value";
    }

}

// ---===hotel Cost===---

function hotelCost(stayingDays) {
    if (stayingDays >= 0) { //filtering valid input
        if (stayingDays <= 10) {
            var totalBill = stayingDays * 100;
            return totalBill;
        }
        else if (stayingDays <= 20) {
            var firstTenDaysBill = 10 * 100; //100 per day of first ten days
            var remainingDays = stayingDays - 10;
            var remainingDaysBill = remainingDays * 80; //20 discount per day for second 10 days
            var totalBill = firstTenDaysBill + remainingDaysBill;
            return totalBill;
        }
        else {
            var firstTenDaysBill = 10 * 100; //100 per day of first ten days
            var secondTenDaysBill = 10 * 80; //20 disccount per day for second 10 days
            var remainingDays = stayingDays - 20;
            var remainingDaysBill = remainingDays * 50; //50 discount per day after first 20 days
            var totalBill = firstTenDaysBill + secondTenDaysBill + remainingDaysBill;
            return totalBill;
        }
    }
    else {
        return "Please input valid value";
    }
}

// ---===Mega Friend===---

function megaFriend(arrayOfName) {
    var arrayOfNameLength = arrayOfName.length; //finding length of array
    if (arrayOfNameLength > 0) { //filtering valid input
        var maxName = arrayOfName[0];
        for (var i = 0; i < arrayOfName.length; i++) {
            if (arrayOfName[i].length > maxName.length) { //finding length of each element of array
                maxName = arrayOfName[i]; //longest name is initializing to maxName
            }
        }
        return maxName;
    }
    else {
        return "Please input valid value";
    }
}