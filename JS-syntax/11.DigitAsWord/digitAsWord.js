/**
 * Created by Lusi on 15.7.2014 г..
 */

function convertDigitToWord(number){

    switch (number){
        case 1:
            console.log('ONE');
        break;
        case 2:
            console.log('TWO');
        break;
        case 3:
            console.log('THREE');
        break;
        case 4:
            console.log('FOUR');
        break;
        case 5:
            console.log('FIVE');
        break;
        case 6:
            console.log('SIX');
        break;
        case 7:
            console.log('SEVEN');
        break;
        case 8:
            console.log('EIGHT');
        break;
        case 9:
            console.log('NINE');
        break;
        default :console.log('Not supported number');

    }
}

convertDigitToWord(8);
convertDigitToWord(3);
convertDigitToWord(5);
