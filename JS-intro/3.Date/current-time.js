/**
 * Created by Lusi on 12.7.2014 г..
 */

var date = new Date();
var hours = date.getHours();
var mins = date.getMinutes();
if(mins<10){
    mins='0'+mins;
}
console.log(hours+":"+mins);

Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
}