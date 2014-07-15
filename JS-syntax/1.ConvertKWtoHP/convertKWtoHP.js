/**
 * Created by BitMix on 15.7.2014 г..
 */
function convertKWtoHP(kw){
    var hp = kw*1.34048;
    console.log(Number((hp).toFixed(2)));
}

convertKWtoHP(75);
convertKWtoHP(150);
convertKWtoHP(1000);