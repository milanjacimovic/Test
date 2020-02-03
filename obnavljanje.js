// let x = 2
// switch (x) {
//     case 0:
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//         console.log('Radan dan');
//         break;
//     case 5:
//         console.log('Nije Radan dan');
//         break;
//     case 6:
//         console.log('Nije Radan dan');
//         break;
//     default:
//         console.log('Losa vrednost')

// }

// let mesec = 8

// switch (mesec) {
//     case 0:
//     case 2:
//     case 4:
//     case 6:
//     case 7:
//     case 9:
//     case 11:
//         console.log('Ovaj mesec ima 31 dan');
//         break;
//     case 1:
//         console.log('Ovaj mesec ima 28 dana');
//         break;
//     case 3:
//     case 5:
//     case 8:
//     case 10:
//         console.log('Ovaj mesec ima 30 dana');
//         break;

//     default:
//         console.log('Morate izabrati broj od 0 do 11 jer postoji samo 12 meseci');
//         break;

// }

//  let godina = 1769;

// if ((godina%4==0 && godina%100!=0)  || godina%400==0) {
//     console.log('Godina je prestupna')
//  }
//  else {
//      console.log('godina nije prestupna')
//  }

// let broj = 123;

// console.log(broj%10);
// broj /= 10 je broj / 10
// broj = Math.floor(broj/10);
// console.log(broj%10);
// broj = Math.floor(broj/10);
// console.log(broj%10)

// Odrediti da li je trocifren broj Armstrongov
// 153 = 1^3 + 5^3 + 3^3

// let br = 374
// let jedinice = br%10
// let desetine = (Math.floor(br/10))%10
// let stotine = Math.floor((Math.floor(br/10))/10)



//  if(jedinice**3 + desetine**3 + stotine**3 == br){
//   console.log('Jeste Armstrongov broj')
//  }
//  else{
//     console.log('Nije Armstrongov broj')
//   }

// let znak = '+';
// let br1 = 102;
// let br2 = 33.2;
// switch (znak) {
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
//         console.log('Znak ne valja')
// }

let x = 5;
let y = 13;
switch (x) {
    case 1:
        console.log(1);
        break;
    case 5:
        if (y % 3 == 0) {
            console.log('jeste');
        }
        else {
            console.log('nije');
        }
}

// Koliko ima februar ako je/nije prestupna godina
let godina = 4
let mesec = 1

switch (mesec) {
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
        console.log('Ovaj mesec ima 31 dan');
        break;
    case 1:
        if ((godina % 4 == 0 && godina % 100 != 0) || godina % 400 == 0) {
            console.log('29 dana')
        }
        else {
            console.log('28 dana')
        }
        break;
    case 3:
    case 5:
    case 8:
    case 10:
        console.log('Ovaj mesec ima 30 dana');
        break;

    default:
        console.log('Morate izabrati broj od 0 do 11 jer postoji samo 12 meseci');
        break;

}

console.log('----------------------------------------------------')

let znak = 'pow';
let br1 = 102;
let br2 = 33.2;
switch (znak) {
    case '+':
        console.log(br1 + br2);
        break;
    case '-':
        console.log(br1 - br2);
        break;
    case '*':
        console.log(br1 * br2);
        break;
    case '/':
        console.log(br1 / br2);
        break;
        case 'sqrt':
        console.log(Math.sqrt(br1));
        break;
        case 'pow':
        console.log(Math.pow(br1, 2));
        break;
        case 'cos':
        console.log(Math.cos(br1));
        break;
        case 'sin':
        console.log(Math.sin(br1));
        break;
    default:
        console.log('Znak ne valja')
}