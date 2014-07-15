/**
 * Created by Lusi on 15.7.2014 г..
 */


function isPrime(number){
    var isPrime = true;
    for(var i=2; i < Math.sqrt(number); i++){
       if(number % i ==0){
           isPrime = false;
       }
    }
    console.log(isPrime)
}

isPrime(7);
isPrime(254);
isPrime(587);