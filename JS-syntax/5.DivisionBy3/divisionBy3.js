/**
 * Created by Lusi on 15.7.2014 г..
 */

function divisionBy3(number){
    var numberLength = number.toString().length;
    var sum=0;
    for(var i=0; i<numberLength; i++){
        sum += number%10;
        number =  Math.floor(number/10);

    }
    if(sum % 3 > 0){
        console.log('the number is not divided by 3 without remainder')
    }else{
        console.log('the number is divided by 3 without remainder');
    }
}
divisionBy3(12);
divisionBy3(189);
divisionBy3(591);