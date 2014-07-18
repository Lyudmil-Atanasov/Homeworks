/**
 * Created by BitMix on 18.7.2014 г..
 */

function replaceSpaces(value){
    var index = value.indexOf(" ");
    while(index != -1){
        value=value.replace(" ", "\u00A0");
        index = value.indexOf(" ",index+1);
    }
    console.log(value);
}

replaceSpaces("But you were living in another world tryin' to get your message through");
