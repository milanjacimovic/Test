/*
    Z1.
    Ipisati brojeve od M do N,ukljucujuci i N

    Z2.
    Ispisati brojeve od M do N, ukljucujuci i N,
    koji su deljivi sa 3

 Z3.
    Ispisati brojeve od M do N, ukljucujuci i N,
    koji nisu deljivi sa 3


    Z4.
    Ispisati brojeve od M do N, ukljucujuci i N,
    koji su deljivi sa K

 Z5.
    Ispisati brojeve od M do N, ukljucujuci i N,
    koji nisu deljivi sa K


Z4. Prebrojati brojeve od M do N koji su deljivi sa 3







*/
/*
    let a,b,c;
    a=4;b=5;

    console.log(a,b,c);

    c=a;
    a=b;
    b=c;
    console.log(a,b,c);
    
    /*Z4. Prebrojati brojeve od M do N, koji su deljivi sa 3*/
/*
let m=5,n=15,brojac=0;

for (let index = m; index <n; index++) {
   if(index%3==0){
     brojac++;
   }
}
console.log(brojac);
 
*/

/* 
 let sum=0;
 let n=8;

 for (let index = 1;index<=n ; index++) {
     sum+=1/index;
 }
 console.log(sum);
 */
/*
let n = 5;
let sum = 0;
for (let i = 1; i <= n; i++) {
    //?
    let fact = 1;
    for (let j = 1; j <= i; j++) {
        fact *= j;
    }
    sum += fact;
}
console.log(sum);
*/
let n = 5;
let sum = 0, fact = 1;
for (let i = 1; i <= n; i++) {
    fact *= i
    sum += fact;
}
console.log(sum);
