/**
 * Created by Lusi on 15.7.2014 г..
 */

function calcCylinderVol(r, h){
    var volume=(Math.PI*(r*r))*h;
    console.log(Number(volume.toFixed(3)));
}


//v=p*(r*r)*h
calcCylinderVol(2, 4);
calcCylinderVol(5, 8);
calcCylinderVol(12, 3);