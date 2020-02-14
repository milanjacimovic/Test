// let dan={
//     temperatura:20.5,
//     datum:'13.02.2020.',
//     oblacnost:false,
//     suncano:true,
//     kisa:false,
//     vrednostiTemperature:[1,4,5,6,7,10,12,12,15,20.5,10,10,9],
// };
// console.log(dan);
// console.log(dan.temperatura=15.5);
// console.log(dan);

let o1 = {
    name: 'Pera',
    age: 32,
}

let o2 = {
    name: 'Mikica',
    age: 102,
}

let o3 = {
    name: 'Masinka',
    age: 45,
}

// let niz=[o1,o2,o3]
// for (let el of niz){
//     console.log(niz[el]);

// }

// Napraviti novi niz koji sadrzi samo osobe izmedju 30 i 50 godina (ukljucujuci)

// let niz=[o1,o2,o3]
// let niz2=[]
// for (let el of niz){
//     if (el.age>=30 && el.age<=50){
//        niz2.push(el)

//     }
// }

// for (let i =0; i<niz.length; i++){
//     if(niz[i].age>=30 && niz[i].age<=50){
//         niz2.push(niz[i])
//     }
// }
// console.log(niz2);


//Nesto nije okej, proveriti sta
// function between(a){
//     let x = [];
//     for (let el of a){
//         if (el.age >= 30 && el.age<=50){
//             x.push(el)
//         }
//     }
//     return x;
// }
// let niz=[1,2,3,4]
// console.log(between(niz));


// if(typeof x == 'object' && x != null)

//Napisati funkciju koja vraca niz brojeva deljivih sa 3 i sa 7
// function vracaNiz() {
//     for (let el of x) {
//         if (el % 3 == 0 && el % 7 == 0) {
//             y.push(el)
//         }
//     }
//     return y
// }
// console.log(vracaNiz());


// function test(x){
//     console.log(x);

// }
// test(5)
// x.forEach(test)


//Napisati funkciju koja VRACA niz bez duplikata

function vracaNizBezDuplikata(niz) {

    // for (let i = 0; i < x.length; i++) {
    //     for (let j = i+1; j < x.length, j++) {
    //         if (x[i] == x[j]) {continue}
    //         else {y.push(x[i])}
    //             return y
    //         }
}

// x.forEach(vracaNizBezDuplikata)



// function funkcija(broj){
//     if (broj%3==0&&broj%7==0){
//         console.log(broj);

//     }
// }
// x.forEach(funkcija)

let x = [12, 4, 6, 12, 4, 1, 12]
let y = []

for (let i = 0; i < x.length; i++) {
    let nadjen = false
    for (let j = i + 1; j < x.length; j++) {
        if (x[i] == x[j]) {
            nadjen = true;
            break
        }


    }
    if (!nadjen) {
        y.push(x[i])
    }

}

console.log(y);
