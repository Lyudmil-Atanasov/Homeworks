/**
 * Created by Lusi on 15.7.2014 г..
 */

function bitChecker(number){
    var mask = 1 << 3;
    var result = number & mask;
    if(result != 0){
        console.log(true);
    }else{
        console.log(false);
    }
}
bitChecker(333);
bitChecker(425);
bitChecker(2567564754);