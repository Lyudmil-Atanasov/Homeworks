/**
 * Created by Lusi on 17.7.2014 г..
 */

function findMaxSequence(seq){
    var start = 0;
    var stop = 0;
    var sum = 1;
    for(var i=0; i<seq.length; i++){
        var tempSum=1;
        for(var b=i+1; seq.length; b++){
            if(seq[i] === seq[b]){
                tempSum++;
            }else{
                break;
            }
            if(sum<=tempSum){
                sum=tempSum;
                start = i;
                stop = b;
            }
        }
    }
    for(var i=start; i<=stop; i++){
        console.log(seq[i]);
    }
}
findMaxSequence([2, 1, 1, 2,3, 3, 2, 2, 2, 1]);
findMaxSequence(['happy']);
findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']);