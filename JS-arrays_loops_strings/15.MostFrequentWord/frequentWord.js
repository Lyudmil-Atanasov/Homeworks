/**
 * Created by BitMix on 18.7.2014 г..
 */

function findMostFreqWord(value){
    var wordsArr = value.toLowerCase().split(/[ .,]+/);
    wordsArr.sort();
    var sum=1;
    var res=new Array();
    for(var i=0; i<wordsArr.length-1; i++){
        var tempSum=1;
        for(var b=i+1; b<wordsArr.length; b++){
            if(wordsArr[i] == wordsArr[b]){
                tempSum++;
            }
        }
        if(sum<=tempSum){
            sum=tempSum;
        }
    }
    for(var i=0; i<wordsArr.length-1; i++){
        var tempSum=1;
        for(var b=i+1; b<wordsArr.length; b++){
            if(wordsArr[i] == wordsArr[b]){
                tempSum++;
            }
        }
        if(sum==tempSum){
            console.log(wordsArr[i]+"  "+sum+" times");
        }
    }
}
findMostFreqWord('Hello my friend, hello my darling. Come on , come here. Welcome, welcome darling.');
console.log("-----------------------------");
findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');
console.log("-----------------------------");
findMostFreqWord('in the middle of the night');