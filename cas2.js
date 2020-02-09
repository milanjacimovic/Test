//Z1
{
    let n = 3;
    let sum = 0, fact = 1;
    for (let i = 1; i <= 2 * n; i++) {
        fact *= i
        if (i % 2 == 0) {
            sum += fact;
        }
    }
    console.log(sum);
}
{
    let n = 3;
    let sum = 0, fact = 1;
    for (let i = 1; i <= 2 * n - 1; i++) {
        fact *= i
        if (i % 2 != 0) {
            sum += fact;
        }
    }
    console.log(sum);
}
{
    let n = 5;
    let sum = 0, fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i
        sum += 1 / fact;
    }
    console.log(sum);
}
let a=Infinity;
console.log(a);
let b=5;
console.log('To ' + (b/0)+' and beyond!')
console.log(`${b/2}`);

let w=5;
let precka='*'.repeat(5);

//vrh
console.log(' '.repeat(w/2)+'*');
//ostatak krova7
for(let i=1;i<w/2;i++){
    let krov=' '.repeat(w/2-i)+'*'+' '.repeat(2*i-1)+'*';
    console.log(krov);
}
console.log(precka);
for(let i=1;i<=w-2;i++){
    console.log('*'+' '.repeat(w-2)+'*')
}
console.log(precka);