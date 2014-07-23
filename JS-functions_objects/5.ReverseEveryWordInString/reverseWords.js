/**
 * Created by BitMix on 23.7.2014 г..
 */

//remove empty elements after splitting;
Array.prototype.clean = function(deleteValue) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == deleteValue) {
            this.splice(i, 1);
            i--;
        }
    }
    return this;
};

function reverseWords(txt){
    var words = txt.split(/[ ]+/)
    words.clean("");
    var txt='';
    for(var i=0; i<words.length; i++){
        txt += printReverse(words[i]);

    }
    console.log(txt);
}

function printReverse(word){
    var reversedWord='';
    for(var i=word.length-1; i>=0; i--) {
        reversedWord += word[i]
    }

    return reversedWord+" ";
}
reverseWords('Hello, how are you.');
reverseWords('Life is pretty good, isn’t it?');

