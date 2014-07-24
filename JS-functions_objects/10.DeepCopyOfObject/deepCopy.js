/**
 * Created by BitMix on 24.7.2014 г..
 */

var a = {name: 'Pesho', age: 21}
var b = JSON.parse(JSON.stringify(a));
console.log("var a = {name: 'Pesho', age: 21};\nvar b = JSON.parse(JSON.stringify(a));")
console.log("a = b -->"+(a==b));
console.log()
var c = {name: 'Pesho', age: 21};
var d = c;
console.log("var c = {name: 'Pesho', age: 21};\nvar d = c;")
console.log("c = d -->"+(c==d));


