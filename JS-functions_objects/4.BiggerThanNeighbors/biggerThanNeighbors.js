/**
 * Created by BitMix on 23.7.2014 г..
 */

function biggerThanNeighbors(index, arr){
    if(isLeagal(index, arr)){
        if(isFirstOrLast(index, arr)){
         if(index == 0){
             console.log('First element');
             return 0;
         }else{
             console.log('Last Element');
             return 0;
         }
        }else{
           return isBigger(index, arr);
        }
    }else{
        return undefined;
    }
}

function isBigger(index, arr){
    if(arr[index] > arr[index+1] && arr[index]>arr[index]-1){
        return true;
    }
    return false;
}

function isLeagal(index, arr){
    if(index >=0 && index<=arr.length-1){
        return true;
    }
    return false;
}

function isFirstOrLast(index, arr){
    if(index == arr.length-1 || index == 0){
        return true;
    }
    return false;
}

function printRes(param){
    if(param == undefined){
        console.log('not valid index');
    }else if(param != 0) {
        if(param){
            console.log('bigger');
        }else{
            console.log('not bigger');
        }
    }
}

printRes(biggerThanNeighbors(2, [1, 2, 3, 3, 5]));
printRes(biggerThanNeighbors(2, [1, 2, 5, 3, 4]));
printRes(biggerThanNeighbors(5, [1, 2, 5, 3, 4]));
printRes(biggerThanNeighbors(0, [1, 2, 5, 3, 4]));
