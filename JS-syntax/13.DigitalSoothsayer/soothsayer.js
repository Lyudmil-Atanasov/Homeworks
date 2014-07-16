/**
 * Created by BitMix on 16.7.2014 г..
 */

function soothsayer(arr){
    var indexYears = Math.floor(Math.random()*5);
    var indexLanguages = Math.floor(Math.random()*5);
    var indexCities = Math.floor(Math.random()*5);
    var indexCars = Math.floor(Math.random()*5);
    return [ arr[0][indexYears], arr[1][indexLanguages], arr[2][indexCities], arr[3][indexCars]]
}

function say(arr ){
    console.log('You will work '+ arr[0]+' years on '+ arr[1]+'.\nYou will live in '+ arr[2]+' and drive '+ arr[3]);
}
say(soothsayer([[3, 5, 2, 7, 9], ['Java', 'Python', 'C#', 'JavaScript', 'Ruby'], ['Silicon Valley', 'London', 'Las Vegas', 'Paris', 'Sofia'], ['BMW', 'Audi', 'Lada', 'Skoda', 'Opel']]))
