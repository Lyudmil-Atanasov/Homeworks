/**
 * Created by BitMix on 23.7.2014 г..
 */

function  findLargestBySumOfDigits(){
    for(var i=0; i<arguments.length; i++){
        var number = Number(arguments[i]);
        if((number%1 != 0) || (typeof arguments[i] != 'number')){
           return undefined;
        }
    }
    var sum = 0;
    var number=arguments[0];
    var tempSum = 0;
    for(var i=0; i<arguments.length; i++){
        tempSum = getSum(arguments[i]);
        if(sum < tempSum ){
            sum=tempSum;
            number = arguments[i];
        }
    }
    return number;
}

function getSum(number){
  var parsedNumber=parseInt(number);
  parsedNumber <0? parsedNumber*=-1:parsedNumber=1;
  number = parsedNumber.toString();
  var sum=0;
  for(var i=0; i<number.length; i++){
    sum+=parseInt(number[i]);
  }
    return sum;
}


console.log(findLargestBySumOfDigits(5, 10, -15, 111));
console.log(findLargestBySumOfDigits(33, 44, -99, 0, 20));
console.log(findLargestBySumOfDigits('hello'));
console.log(findLargestBySumOfDigits(5, 3.3));