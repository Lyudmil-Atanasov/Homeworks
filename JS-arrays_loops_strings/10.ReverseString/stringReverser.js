/**
 * Created by BitMix on 18.7.2014 г..
 */

function reverseString(value){
    value = value.split("").reverse().join('');
    console.log(value);
}
reverseString('AAABBBCCC');