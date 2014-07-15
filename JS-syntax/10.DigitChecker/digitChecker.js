/**
 * Created by Lusi on 15.7.2014 г..
 */

function checkDigit(number){
    number = Math.floor(number/100);
    var digit = number%10;
    digit == 3? console.log(true):console.log(false);
}
checkDigit(1235);
checkDigit(25368);
checkDigit(123456);