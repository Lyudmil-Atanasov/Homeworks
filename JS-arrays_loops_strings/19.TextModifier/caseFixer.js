/**
 * Created by BitMix on 21.7.2014 г..
 **/

function fixCasing(value){
   var txt = toUpperCase(value);
   txt = toLowerCase(txt);
   txt = toRamdomCase(txt);
   console.log(txt);
}

function toUpperCase(value){

    var indexStart = value.indexOf('<upcase>');
    while(indexStart != -1){
        var indexStop = value.indexOf('</upcase>',indexStart+1)+9;
        var word = value.substring(indexStart,indexStop);
        var newWord = word.substr(8,word.indexOf('</upcase>')-8).toUpperCase();
        value=value.replace(word, newWord);
        indexStart=value.indexOf('<upcase>',indexStop);
    }
    return value;
}

function toLowerCase(value){

    var indexStart = value.indexOf('<lowcase>');
    while(indexStart != -1){
        var indexStop = value.indexOf('</lowcase>',indexStart+1)+10;
        var word = value.substring(indexStart,indexStop);
        var newWord = word.substr(9,word.indexOf('</lowcase>')-9).toLowerCase();
        value=value.replace(word, newWord);
        indexStart=value.indexOf('<lowcase>',indexStop);
    }
    return value;
}

function toRamdomCase(value){
    var indexStart = value.indexOf('<mixcase>');
    while(indexStart != -1){
        var indexStop = value.indexOf('</mixcase>',indexStart+1)+10;
        var word = value.substring(indexStart,indexStop);
        var newWord = word.substr(9,word.indexOf('</mixcase>')-9);
        newWord = chooseCaseing(newWord);
        value=value.replace(word, newWord);
        indexStart=value.indexOf('<mixcase>',indexStop);
    }
    return value;
}

function chooseCaseing(word){
    var letters = word.split("");
    for(var i=0; i<letters.length; i++){
        var random = Math.floor(Math.random()*2);
        if(random==1){
            letters[i] = letters[i].toUpperCase();
        }else{
            letters[i] = letters[i].toLowerCase();
        }
    }
    word = letters.join("");
    return word;
}
fixCasing("We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>ANYTHING</lowcase> else.");
