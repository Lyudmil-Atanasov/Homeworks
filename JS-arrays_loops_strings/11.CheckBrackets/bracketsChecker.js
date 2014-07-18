/**
 * Created by BitMix on 18.7.2014 г..
 */
function checkBrackets(value){
    var bracketsArr = new Array();
    var isCoorect = true;
    for( var i=0; i<value.length; i++){
        if(value[i] === '(' | value[i] === ')'){
            bracketsArr.push(value[i]);
        }
    }
    if(bracketsArr.length%2 != 0){
        isCoorect=false;
    }
    var openB = 0;
    var closeB =0;
    for(var i=0; i<value.length; i++){
        if(value[i] === '('){
            openB++;
        }
        if(value[i] === ')'){
            closeB++;
        }
    }
    if(openB != closeB){
        isCoorect=false;
    }
    for(var i=0; i<bracketsArr.length/2; i++){
        if(bracketsArr[(bracketsArr.length-1)-i] != ')'){
            isCoorect=false;
        }
    }

    console.log(isCoorect);
}
checkBrackets(')(');
checkBrackets('( ( a + b ) / 5 – d )');
checkBrackets(') ( a + b ) )');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )');

