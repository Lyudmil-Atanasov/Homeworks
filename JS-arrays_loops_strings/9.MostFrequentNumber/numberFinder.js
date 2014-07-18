/**
 * Created by BitMix on 18.7.2014 г..
 */


function findMostFreqNum(value){
    var number=value[0];
    var sum=1;

    for(var i=0; i<value.length-1; i++){
        var tempSum=1;
        for(var b=i+1; b<value.length; b++){
            if(value[i] == value[b]){
                tempSum++;
            }
            if(sum<tempSum){
                sum=tempSum;
                number=value[b];
            }
        }
    }
    console.log(number+' ('+sum+' times)');
}

findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]);
findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);