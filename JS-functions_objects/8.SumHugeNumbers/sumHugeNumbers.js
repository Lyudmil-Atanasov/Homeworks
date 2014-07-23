/**
 * Created by BitMix on 23.7.2014 г..
 */

function sumHugeNumbers(args){
    var a = args[0].toString();
    var b = args[1].toString();
    var aArr = stringNumberToArray(a);
    var bArr = stringNumberToArray(b);
    if(aArr.length > bArr.length){
        bArr=addZeros(aArr.length - bArr.length, bArr);

    }else if(aArr.length < bArr.length){
        aArr=addZeros(bArr.length - aArr.length, aArr);

    }
    var result = sumTwoArrs(aArr, bArr).join("");
    if(result[0] == 0){
        result = result.replace(0,"");
    }
    console.log(result);
}

function stringNumberToArray(number){
    var n = number.toString();
    var numberArr = new Array();
    for(var i=0; i< n.length; i++){
        numberArr.push(parseInt(n[i]));
    }
    return numberArr;
}

function addZeros(n, arr){
   for(var i=0; i<n; i++){
       arr.unshift(0);
   }
   return arr;
}

function sumTwoArrs(arrOne, arrTwo){
    var resArr = new Array();
    var more = 0;
    for(var i=arrOne.length-1; i>=0; i--){
      var temp = arrOne[i]+arrTwo[i]+more;
      if(temp >=10){
          resArr.push(temp%10);
          more = (Math.floor(temp/10))%10;
      }else{
          resArr.push(temp);
          more=0;
      }
    }
    resArr.push(more)
    return resArr.reverse();
}
sumHugeNumbers(['65', '155']);
sumHugeNumbers(['123456789', '123456789']);
sumHugeNumbers(['887987345974539', '4582796427862587']);
sumHugeNumbers(['347135713985789531798031509832579382573195807', '817651358763158761358796358971685973163314321']);
