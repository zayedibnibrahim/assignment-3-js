function kilometerToMeter(km) {
    if (km > 0) {
        var meter = km * 1000;
        return meter;
    }
    else {
        return "Invalide Input";
    }

}

function budgetCalculator(watch, mobile, laptop) {

    var untilValid = watch + mobile + laptop;
    if (untilValid >= 0) {
        var watchCost = watch * 50;
        var mobileCost = mobile * 100;
        var laptopCost = laptop * 500;

        var totalCost = watchCost + mobileCost + laptopCost;
        return totalCost;
    }
    else{
        return "Sorry, You have entered an Invalid Input";
    }
}

function hotelCost(day) {

    if (day >= 0) {
        var expense = 0;
        if (day <= 10) {
            expense = day * 100;
        }
        else if (day <= 20) {
            var firstTenDays = 10 * 100;
            var remainingDays = day - 10;
            var secondTenDays = remainingDays * 80;
            expense = firstTenDays + secondTenDays;
        }
        else {
            var firstTenDays = 10 * 100;
            var secondTenDays = 10 * 80;
            var remainingDays = day - 20;
            var afterTwentyDayes = remainingDays * 50;

            expense = firstTenDays + secondTenDays + afterTwentyDayes;
        }
        return expense;

    }
    else {
        return "sorry, Number of Days Cant be Negative, Enter a Correct value";
    }
}

function megaFriend(friends) {
    var maxFriendsName = friends[0];
    for (i = 0; i < friends.length; i++) {
        var eachName = friends[i];
        if (eachName.length > maxFriendsName.length) {
            maxFriendsName = eachName;
        }
    }
    return maxFriendsName;
}
