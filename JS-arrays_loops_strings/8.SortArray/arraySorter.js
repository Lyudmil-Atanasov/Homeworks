/**
 * Created by BitMix on 18.7.2014 г..
 */

function sortArray(value){
    console.log(value);
    for(var i=0; i<value.length-1; i++){
        var minEl=value[i];
        for(var b=i+1; b<value.length; b++){
            if (minEl > value[b]){
                minEl = value[b];
                value[b]=value[i];
                value[i]=minEl;
            }
        }
    }
    console.log(value);
}
sortArray([5, 4, 3, 2, 1]);
sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]);
