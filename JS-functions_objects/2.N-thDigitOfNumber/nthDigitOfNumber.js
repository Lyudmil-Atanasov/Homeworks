/**
 * Created by BitMix on 23.7.2014 г..
 */

function findNthDigit(){
    var pos = arguments[0][0];
    var number = arguments[0][1].toString().replace('.','');
    if(pos > number.toString().length){
       console.log('The number doesn’t have '+pos+' digits');
       return undefined;
    }else{
        var digit = number[number.length-pos];
        return digit;
    }
}

function checkResult(param){
    if(! (param == undefined)){
        console.log(param);
    }
}

(function(){
    checkResult(findNthDigit([1, 6]));
    checkResult(findNthDigit([2, -55]));
    checkResult(findNthDigit([6, 923456]));
    checkResult(findNthDigit([3, 1451.78]));
    checkResult(findNthDigit([6, 888.88]));
}());
