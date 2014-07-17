/**
 * Created by Lusi on 17.7.2014 г..
 */

function minMax(numbers){
    var min = Number.MAX_VALUE;
    var max = Number.MIN_VALUE;
    for(var i=0; i<numbers.length; i++){
        if(numbers[i]>max){
            max = numbers[i];
        }
        if(numbers[i]<min){
         min = numbers[i];
        }
    }
    console.log('Min -> '+min);
    console.log('Max -> '+max)
}
minMax([1, 2, 1, 15, 20, 5, 7, 31]);
console.log('-------------------');
minMax([2, 2, 2, 2, 2]);
console.log('-------------------');
minMax([500, 1, -23, 0, -300, 28, 35, 12])