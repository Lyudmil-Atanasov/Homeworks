/**
 * Created by Lusi on 17.7.2014 г..
 */

function compareChars(a, b){
    var isEqual = true;
    if(a.length != b.length){
        isEqual = false;
    }
    for(var i=0; i< a.length; i++){
        if(a[i] != b[i]){
            isEqual = false;
        }
    }
    return isEqual;
}

if(compareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'], ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'])){
    console.log('Equal');
}else{
    console.log('Not Equal');
}
console.log('----------------');
if(compareChars(['3', '5', 'g', 'd'], ['5', '3', 'g', 'd'])){
    console.log('Equal');
}else{
    console.log('Not Equal');
}
console.log('----------------');

if(compareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'], ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r'])){
    console.log('Equal');
}else{
    console.log('Not Equal');
}