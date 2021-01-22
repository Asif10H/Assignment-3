//problem-1
function kilometerToMeter(kilometer){
    if(kilometer < 0){ //If the value of kilometers is negative then this condition will be executed
        var meter = "kilometer can never be a negative number";
        return meter;
    }
    else{
        var meter = kilometer * 1000; // kilometers to meters conversion
        return meter;
    }
}
//input
var kilometer = 10;
var result = kilometerToMeter(kilometer); // function call
console.log(result); // output

// problem-2
function budgetCalculator(watch , phone, laptop){
    if((watch < 0) || (phone < 0) || (laptop < 0)){ // check negative price
        return "negative price found";
    }
    else{
        watch = watch * 50;
        phone = phone * 100;
        laptop = laptop * 500;
        var totalCost = watch + phone + laptop; // calculate total budget cost
        return totalCost;
    } 
}
//input
var watch = 10;
var phone = 11;
var laptop = 12;
var result = budgetCalculator(watch, phone, laptop); // function call
console.log(result); // output

//problem-3 
function hotelCost(day){
    if(day <= 0){
        var ans = "something wrong";
        return ans;
    }
    else if(day >= 1 && day <= 10){ //if the day value is within 1 to 10 then this condition will be executed
        var ans = day * 100; // calculate total cost
        return ans;
    }
    else if(day >= 11 && day <= 20){ //if the day value is within 11 to 20 then this condition will be executed
        var day11To20 = day - 10;
        var day1To10 = day - day11To20;
        var totalCost = day1To10 * 100 + day11To20 * 80; // calculate total cost
        return totalCost;
    }
    else{ //if the value of the day is more than 20 then this condition will be executed
        var day1To10 = 10;
        day -= 10;
        var day11To20 = 10;
        day -= 10;
        var otherDay = day;
        var totalCost = day1To10 * 100 + day11To20 * 80 + otherDay * 50; // calculate total cost
        return totalCost;
    }  
}
//input
var day = 10;
 var result = hotelCost(day); // function call
 console.log(result); // output

//problem-4
function megaFriend(nameList){
    var maxLenName;
    var check = 0;
    for(var i = 0; i < nameList.length; i++){
        var sizeOfName = nameList[i].length; // check single string size 
        if(sizeOfName > check){ // max size of string check
            maxLenName = nameList[i]; // max size of name store in ans variable
            check = sizeOfName;
        }
    }
    return  maxLenName;
}
//input
var nameOfList = ["asif", "hossain", "zia", "mizan", "abdullah", "mahabub"];  
var result = megaFriend(nameOfList) // function call
console.log(result); // output
