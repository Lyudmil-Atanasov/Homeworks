/**
 * Created by BitMix on 18.7.2014 г..
 */

function findPalindromes(value){
    value=value.substring(0, value.length-1);
    var wordsArr = value.split(/[ .,]+/);
    var res = new Array();
    for(var i=0; i<wordsArr.length; i++){
        var check = true;
        var word = wordsArr[i];
        ispolidrome(word);
    }
}

function ispolidrome(word){
    var check=true;
    for(var i=0; i<word.length/2; i++){
        if(word[i].toLowerCase() != word[(word.length-1)-i].toLowerCase()){
            check=false;
        }
    }
    if(check){
        console.log(word);
    }
}

findPalindromes("There is a man, his name. was Bob.");