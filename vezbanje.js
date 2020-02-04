// let i = 0;
// while (i<5){
//     if (i % 2 == 0)
//     console.log(i);
//     i++ ;
// }

// // i--; minus jedan, i++; plus jedan;

// for(let i=0; i<5; i++){
//     console.log('Hello')
// }

// let zbir = 0;
// for(var i=1; i<100; i++){
//     zbir += i
// }
// console.log(zbir)
// console.log(i)

// let proizvod = 1;
// for(var i=1; i<15; i++){
//     proizvod = proizvod*i
// }
// console.log(proizvod)
// console.log(i)

// let i = 1
// let proizvod = 1
// while (i<14) {
//     i++;
// proizvod = proizvod*i
// }
// console.log(proizvod)


// let m = 20;
// let n = 13;

// if(m>n){
// let tmp = m;
// m = n;
// n = tmp;
// }
// let zbir = 0;
// for (let i=m; i<=n; i++){
//     zbir += i;
    
// }
// console.log(zbir)

// let m = 19;
// let n = 2;
// if(m>n){
// let tmp = m;
// m = n;
// n = tmp;
// }
// let zbir = 0;
// while (m<n) {if (m%3==0) {zbir = zbir +m}
// m++;
// }
// console.log(zbir)

// for (m; m<=n; m++) {
//     if (m%3==0){
//         zbir += m;
//     }
// }
// console.log(zbir)

// let x = '';
// for(let i = 0; i<5; i++){
//     for(let j=0; j<5; j++){
//         x += '*';
//         }
//         x += '\n'
// }
// console.log(x)


// let x = '';
// for (let i=0; i<5; i++){
//     x += '*'.repeat(5) + '\n';
// }
// console.log(x)

let x = ''
let redovi = 5;
let kolone = 10;

// for(let redovi=0; redovi<3; redovi++){
//     x += '*'.repeat(kolone) + '\n'
    
// }
// console.log(x)



// for(let redovi=0; redovi<3; redovi++){
//     for(let kolone=0; kolone<10; kolone++){
//         x += '*'
//     }
//     x += '\n'
// }
// console.log(x)




// x += ('*'.repeat(kolone) + '\n').repeat(redovi)
// console.log(x)


// x += ('*'.repeat(kolone) + '\n').repeat(redovi)
// console.log(x)


// x += '*'.repeat(kolone) 
// x += '\n'
// x += '*'
// x += ' '.repeat(kolone-2)
// x += '*'
// x += '\n'
// x += '*'.repeat(kolone) 


// console.log(x)

// for(let redovi=0; redovi<3; redovi++){
//     for(let kolone=0; kolone<10; kolone++){
//        x += '*'
//      }
//     x += '\n'
//     else if (redovi==1, redovi ==2){x += ' '.repeat(kolone-2)}
// }
// console.log(x)

x += '*'.repeat(kolone) + '\n'
x += ('*' + ' '.repeat(kolone-2) + '*' + '\n').repeat(redovi-2)
x += '*'.repeat(kolone) 

console.log(x)