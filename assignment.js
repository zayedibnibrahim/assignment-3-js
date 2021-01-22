function kilometerToMeter(km) {
    if (km >= 0) {
        //1 kilometer = 1000 meter
        var meter = km * 1000;
        return meter;
    }
    else {
        //Error message for invalid parameter.
        return "sorry, Kilometer cant be negative, enter a correct value";
    }

}

function budgetCalculator(watch, mobile, laptop) {

    var untilValid = watch + mobile + laptop;
    if (untilValid >= 0 && Number.isInteger(untilValid) !== false) {
        var watchCost = watch * 50;
        var mobileCost = mobile * 100;
        var laptopCost = laptop * 500;

        var totalCost = watchCost + mobileCost + laptopCost;
        return totalCost;
    }
    else {
        //Error message for invalid parameter.
        return "Sorry, You have entered an Invalid Value";
    }
}

function hotelCost(day) {

    if (day >= 0) {
        var expense = 0;
        if (day <= 10) { //Expense for first 10 days
            expense = day * 100;
        }
        else if (day <= 20) { //Expense for first 20 days
            var firstTenDays = 10 * 100;
            var remainingDays = day - 10;
            var secondTenDays = remainingDays * 80;
            expense = firstTenDays + secondTenDays;
        }
        else { //Expense after 21 days
            var firstTenDays = 10 * 100;
            var secondTenDays = 10 * 80;
            var remainingDays = day - 20;
            var afterTwentyDayes = remainingDays * 50;

            expense = firstTenDays + secondTenDays + afterTwentyDayes;
        }
        return expense;

    }
    else {
        //Error message for invalid parameter.
        return "sorry, Number of Days Cant be Negative, Enter a Correct value";
    }
}

function megaFriend(friends) {
    if (friends.length !== 0) {

        var maxFriendsName = friends[0];
        for (i = 0; i < friends.length; i++) {
            var eachName = friends[i];
            if (eachName.length > maxFriendsName.length) {
                maxFriendsName = eachName;
            }
        }
        return maxFriendsName;
    }
    else {
        //Error message for invalid parameter.
        return "Please enter your friends name";
    }
}