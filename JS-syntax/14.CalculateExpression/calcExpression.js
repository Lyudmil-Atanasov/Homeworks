/**
 * Created by BitMix on 16.7.2014 г..
 */

function calculates(){
    var paragraph =  document.getElementsByTagName('p');
    paragraph[0].innerHTML='';
    var expressionElement = document.getElementsByTagName('textarea');
    var expression = expressionElement[0].value;
    var res = eval(expression);
    var paragraph =  document.getElementsByTagName('p');
    paragraph[0].innerHTML=res;
}