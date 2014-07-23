/**
 * Created by BitMix on 23.7.2014 г..
 */

function printYougest(value){
    var persons = new Array();
    for(var i=0; i<value.length; i++){
        persons.push(strToObj(value[i]));
    }
    var age=1000;
    var youngest=persons[i];
    for(person in persons){
        var tempAge=persons[person].age
        if(tempAge<age){
            age=tempAge;
            youngest=persons[person];
        }
    }
    console.log('The youngest one is '+youngest.firstname+" "+youngest.lastname);
}

function strToObj(str){
    var obj = JSON.parse(JSON.stringify(str));
    return obj;
}

var persons = [
    { firstname : 'George', lastname: 'Kolev', age: 32},
    { firstname : 'Bay', lastname: 'Ivan', age: 81},
    { firstname : 'Baba', lastname: 'Ginka', age: 40}]

 printYougest(persons);