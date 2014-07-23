/**
 * Created by BitMix on 23.7.2014 г..
 */

function countDivs(html){
    var doc = document.createElement('html')
    doc.innerHTML=html
    var divs = doc.getElementsByTagName('div');
    console.log(divs.length);
}

countDivs('<!DOCTYPE html><html><head lang="en"><meta charset="UTF-8"><title>index</title>' +
            '<script src="/yourScript.js" defer></script></head><body><div id="outerDiv">' +
            '<div class="first"><div><div>hello</div></div></div><div>hi<div></div></div>' +
            '<div>I am a div</div></div></body></html>')