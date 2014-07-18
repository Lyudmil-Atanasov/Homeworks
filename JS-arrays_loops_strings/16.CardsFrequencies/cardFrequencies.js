/**
 * Created by BitMix on 18.7.2014 г..
 */

function findCardFrequency(value) {
    var cards = value.split(/[ ]/);
    var allCards = new Array();
    for (var i = 0; i < cards.length; i++) {
        cards[i] = cards[i].substring(0, cards[i].length - 1);
    }
    for (var i = 0; i < cards.length-1; i++) {
        var sum=1;
        for (var b =i+1; b < cards.length; b++) {
            if((cards[i] == cards[b]) && (cards[b]!= '*')){
                sum++;
                cards[b]='*';
            }
        }
        if(cards[i]!='*'){
            var pro=((sum/cards.length)*100).toFixed(2);
            console.log(cards[i]+" -> "+pro+"%");
        }
    }
}

findCardFrequency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');
console.log('_______________');
findCardFrequency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠');
console.log('_______________');
findCardFrequency('10♣ 10♥');