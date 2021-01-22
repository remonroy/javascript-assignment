function hotelCost(hotelDay) {
    var amount = 0;
    if (hotelDay <= 10) {
        amount = hotelDay * 100;
    }
    else if (hotelDay <= 20) {
        var firsthotelPrice = 10 * 100;
        var hotelPriceCoutDay = hotelDay - 10;
        var secondHotelPrice = hotelPriceCoutDay * 80;
        amount = firsthotelPrice + secondHotelPrice;
    }
    else {
        var firsthotelPrice = 10 * 100;
        var secondHotelPrice = 10 * 80;
        var thardHotelPriceCountDay = hotelDay - 20;
        var thardHotelPrice = thardHotelPriceCountDay * 50;
        amount = firsthotelPrice + secondHotelPrice + thardHotelPrice;
    }
    return amount;
}
var total=hotelCost(21);


function budgetCalculator(ghori, phn, laptop) {
    var bagetGori = ghori * 50;
    var bajectPhone = phn * 100;
    var bajectLaptop = laptop * 500;
    var total = bagetGori + bajectPhone + bajectLaptop;
    return total;

}
var result = budgetCalculator(2, 3, 2);


function kilometerToMeter(kilomiter) {
    var miter = 0;

    if (kilomiter > 0) {
        miter = kilomiter * 1000;
    }
    return miter;
}
var result = kilometerToMeter(6);


function megaFriend(number) {
    var firstNumber =[0];
    for (var i = 0; i < number.length; i++) {
        var element = number[i];
        
        if (element.length > firstNumber.length) {
            firstNumber =element;
        }
    }
    return firstNumber;
}
var number =megaFriend(["remon", "nil", "bangladesh", "akash"]);



