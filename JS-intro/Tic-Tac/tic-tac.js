/**
 * Created by Lusi on 12.7.2014 г..
 */

var turn=1;

function clickTd(id) {
    var cell = document.getElementById(id);
    if (turn == 1) {
        if (cell.className.indexOf('x') < 0 && cell.className.indexOf('zero') < 0) {
            cell.className = cell.className + ' x';
            cell.disabled = true;
            turn = 0;
        }
    } else {
        if (cell.className.indexOf('x') < 0 && cell.className.indexOf('zero') < 0) {
            cell.className = cell.className + ' zero';
            cell.disabled = true;
            turn = 1;
        }
    }
    checkWiiner();
}
function checkWiiner(){
    chekResult(0, 3, 6, 'x');
    chekResult(1, 4, 7, 'x');
    chekResult(2, 5, 8, 'x');
    chekResult(0, 4, 8, 'x');
    chekResult(0, 1, 2, 'x');
    chekResult(3, 4, 5, 'x');
    chekResult(6, 7, 8, 'x');
    chekResult(2, 4, 6, 'x');
    chekResult(0, 3, 6, 'zero');
    chekResult(1, 4, 7, 'zero');
    chekResult(2, 5, 8, 'zero');
    chekResult(0, 4, 8, 'zero');
    chekResult(0, 1, 2, 'zero');
    chekResult(3, 4, 5, 'zero');
    chekResult(6, 7, 8, 'zero');
    chekResult(2, 4, 6, 'zero');
}

function chekResult(c_1, c_2, c_3, player){
  var cell_1, cell_2, cell_3;
    cell_1=document.getElementById(c_1).className;
    cell_2=document.getElementById(c_2).className;
    cell_3=document.getElementById(c_3).className;
    if((cell_1.indexOf(player)>0 && cell_2.indexOf(player)>0) && cell_3.indexOf(player)>0){
       document.getElementById('overlay').className=' overlayOn';
        alert(player+' win');
        location.reload();
    }
}