/**
 * Created by Lusi on 17.7.2014 г..
 */

function printNumbers(number){
    var res=' ';
    for(var i=1; i<=number; i++){
        if((i % 4 != 0) && (i%5 != 0)){
            res=res+i+" ";
        }
    }
    if(number<=0){
        console.log(' no')
    }else{
        console.log(res);
    }

}
printNumbers(20);
printNumbers(-5);
printNumbers(13);
