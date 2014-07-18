/**
 * Created by BitMix on 18.7.2014 г..
 */

function findMaxSequence(value){
    var start = 0;
    var stop = 0;
    var sum = 0;
   for(var i=0; i<value.length; i++){
       var tempSum=0;
       for(var b=i+1; b<value.length; b++){
           if(value[i]<value[b]){
               tempSum++;
               if(tempSum>sum){
                   sum=tempSum;
                   start=i;
                   stop=b;
               }
           }else{
               break;
           }
       }
   }
    print(value, start, stop);
}

function print(value,start, stop){
    if(stop !=0){
        var str='';
        for(var i=start; i<=stop; i++){
            str+=value[i]+" ";
        }
        console.log(str);
    }else{
        console.log('no')
    }

}
findMaxSequence([100,3, 4,5, 2, 2, 4]);
findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]);
findMaxSequence([3, 2, 1]);