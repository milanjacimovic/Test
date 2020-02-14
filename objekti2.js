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



/* let x = [12, 4, 6, 12, 12, 4, 1, 12]
let y = []
function duplikat(niz){
for (let i = 0; i < niz.length; i++) {
    let nadjen = false
    for (let j = i + 1; j < niz.length; j++) {
        if (niz[i] == niz[j]) {
            nadjen = true;
            break
        }


    }
    if (!nadjen) {
        y.push(niz[i])
    }

}
return y
}
console.log(duplikat(x)); */
