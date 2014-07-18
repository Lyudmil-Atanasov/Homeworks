/**
 * Created by Lusi on 18.7.2014 г..
 */

function replaceATag(html){
    var div = document.createElement('div');
    div.innerHTML = html;
    var aTags = div.getElementsByTagName('a');
    for(var i=0; i<aTags.length; i++){
        var atts = aTags[0].attributes;
        console.log(atts);
        var strAtt='';
        for(var b=0; b<atts.length; b++){
            strAtt+=" "+atts[i].name+'=';
            strAtt+=atts[i].value+'';
        }
        var replacer = '[URL'+strAtt+']'+aTags[0].innerHTML+'[/URL]';
        console.log(replacer);
        var toReplace='<a '+aTags[i].attributes[0].name+"="+aTags[i].attributes[0].value+">"+aTags[i].innerHTML+"</a>";
        console.log(toReplace)
        html=html.replace(toReplace,replacer);
    }
    div.innerHTML=html;
    document.write(html);
}
replaceATag('<li><a href=http://softuni.bg>SoftUni</a></li>');
