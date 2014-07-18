/**
 * Created by BitMix on 18.7.2014 г..
 */

function countSubstringOccur(value){
    var count=0;
    var key = value[0].toLowerCase();
    var text = value[1].toLowerCase();
    var index = text.indexOf(key);
    while(index != -1){
        count++;
        index=text.indexOf(key,index+1);
    }
console.log(count);
}

countSubstringOccur(['in', "We are living in a yellow submarine. We don't have anything else. " +
                    "Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days."]);
countSubstringOccur(['your', 'No one heard a single word you said. They should have seen it in your eyes. What was going around your head.']);
countSubstringOccur(['but', "But you were living in another world tryin' to get your message through."])