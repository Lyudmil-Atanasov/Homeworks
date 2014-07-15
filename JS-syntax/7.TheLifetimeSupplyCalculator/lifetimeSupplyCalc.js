/**
 * Created by Lusi on 15.7.2014 г..
 */

function calcSupply(age, maxAge, estimateAmount){
    var days = (maxAge-age)*365;
    console.log(days*estimateAmount+'kg would be enough until I am '+maxAge+' years old.');
}
calcSupply(38, 118, 0.5);
calcSupply(20, 87, 2);
calcSupply(16, 102, 1.1);