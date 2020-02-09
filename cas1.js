console.log('Hello World!');
//broj1=9;
//console.log(broj1);
var broj1=8;
console.log(broj1);
{
    //neki blok
    //b=7;
    //console.log(b);
    let b=4;
    console.log(b);
}
//console.log(b);
console.log('------------------');

{
    let a=5;
    console.log(a);
}
//a=7;
//console.log(a);
console.log('------------------');
let c=6;
{
    c=7;
    console.log(c);
}

console.log('------------------');
{
    let nula=0;
    {
        let jedan=1;
        console.log(jedan,nula);
        {
            console.log(jedan, nula);
        }
    }
    //console.log(jedan, nula);
    {
        var dva=2;
        //console.log(jedan, nula);
    }
    console.log(dva);
}

/*
    Napisati primere koji prikazuju zapazanja vezana dosege imena.

    1. Primer gde postoje 2 promenljive, tipa LET,
    gde je jedna u okruzujucem dosegu, a druga u ugnjezdenom
    2. Primer gde postoje 2 promenljive, tipa VAR,
    gde je jedna u okruzujucem dosegu, a druga u ugnjezdenom
*/

const konstanta="konstantna vrednost";
console.log(konstanta);
//konstanta="Nova vrednost!";
//console.log(konstanta);
//const konst2;
//console.log(konst2);

//let prom;
//console.log(prom);

let tacno=true;
console.log(tacno);
let netacno=false;
console.log(netacno);

console.log('------------');
console.log(!tacno);

console.log('------------');
console.log(tacno && netacno);

console.log('------------');
console.log(tacno || netacno);

let sedam=7;
console.log(sedam>=7);
console.log('==========');
console.log(sedam>5 && sedam<9);