/**
 * Created by BitMix on 24.7.2014 г..
 */

//remove the element(not index element) from the array
Array.prototype.removeItem = function(element){
    var res = new Array();
    for(var i=0; i<this.length; i++){
        if(element != this[i]){
           res.push(this[i]);
        }
    }
    return res;
}
//same one
Array.prototype.clean = function(deleteValue) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == deleteValue) {
            this.splice(i, 1);
            i--;
        }
    }
    return this;
};


arr=['hi','hi','hi','hello','buy'];
console.log(arr.removeItem('hi'));
arr=[1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
console.log(arr.removeItem(1));
arr=['hi','hi','hi','hello','buy','',''];
console.log(arr.clean(''));