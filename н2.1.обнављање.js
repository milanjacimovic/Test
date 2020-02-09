// console.log()
// // var,let,const
// //if , if else

// let x = 0;
// switch(x){
//     case 4:
//     case 1:
//     case 2:
//     case 3:
//     case 0:
//         console.log('Radan dan');
//         break;
//     case 5:
//         console.log('Nije Radan dan');
//         break;
    
//     default:
//         console.log('Losa vrednost');
//         break;
//     case 6:
//         console.log('Nije Radan dan');
//         break;

// }

// let mesec = 5
// mesec [0-11]
// Koliko mesec ima dana?

// let mesec = 1;
// let godina = 1769;
// switch(mesec){
//     case 0:case 2:case 4:case 6:case 7:case 9:case 11:
//         console.log(31);
//         break;
//     case 1:
//         if((godina % 4 == 0 && godina % 100 != 0) || godina % 400 == 0){
//             console.log(29);
//         }
//         else{
//             console.log(28);
//         }
//         break;
//     case 3:case 5:case 8:case 10:
//         console.log(30);
// }

// Година је преступна ако је 
// (дељива са 4  И није дељива са 100)
// ИЛИ је дељива са 400
// let godina = 1768;

// if((godina % 4 == 0 && godina % 100 != 0) || godina % 400 == 0){
//     console.log('Jeste');
// }
// else{
//     console.log('Nije');
// }


// let br = 123;
// j: 3, d: 2, s: 1

// let br = 123;
// let jed = b % 10;
// console.log('j:',br % 10)
// br = Math.floor(br / 10); // 12
// console.log(br % 10);
// br = Math.floor(br / 10); // 1
// console.log(br % 10);

// Одредити да ли је троцифрен број Армстронгов
// 153 = 1^3 + 5^3 + 3^3
// 370
// 371

// let br = 153;
// let j = br % 10;
// let d = Math.floor(br / 10) % 10;
// let s = Math.floor(br / 100) % 10;
// console.log(`${br}`);

// let znak = 5; // * , / , -
// let br1 = 102;
// let br2 = 33.2;

// switch(znak){
//     case '+':
//         console.log(br1 + br2);
//         break;
//     case '-':
//         console.log(br1 - br2);
//         break;
//     case '*':
//         console.log(br1 * br2);
//         break;
//     case '/':
//         console.log(br1 / br2);
//         break;
//     default:
//         console.log('Знак не ваља');
//         break;
// }
// sqrt , pow, cos, sin
// Math.pow()

// let x = 7;
// let y = 13;
// switch(x){
//     case 1:
//         console.log(1);
//         break;
//     case 5:
//         var broj = 5;
//         if(y % 3 == 0){
//             console.log('jeste');
//         }
//         else{
//             console.log('nije');
//         }
//         break;
//     case 7:
//         console.log(broj);
// }

let korisnik = 'admin'; // 'user', 'moderator'

if(korisnik === 'admin'){
    console.log('nesto');
}
else if(korisnik === 'user'){
    console.log('nesto drugo');
}
else if(korisnik === 'moderator'){
    console.log('nesto trece');
}
else{
    console.log('neispravno');
}

switch(korisnik){
    case 'admin':
        console.log('admin');
        break;
    case 'user':
        console.log('user');
        break;
    case 'moderator':
        console.log('mod');
        break;
    default:
        console.log('neispravno');
        break;
}




let x = 5;

switch(x){
    case 4:
        console.log(4);
        break;
    case 5:
        console.log(5);
    case 7:
        console.log(7);
    default:
        console.log('77');
    case 9:
        console.log('9');
    }























