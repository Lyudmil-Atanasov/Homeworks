/**
 * Created by Lusi on 18.7.2014 г..
 */

function extractContent(value){
    var div = document.createElement('div');
    div.innerHTML=value;
    var p = div.getElementsByTagName('p');
    var a = div.getElementsByTagName('a');
    console.log(p[0].innerHTML);
    console.log(a[0].innerHTML);
}

extractContent("<p>Hello</p><a href='http://w3c.org'>W3C</a>");