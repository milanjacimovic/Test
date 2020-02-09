// Zadatak 1
{
    let k = 5;
    let n = 9;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += Math.pow((-1),i) * (i + 1) / (i + k);
    }
    console.log(`Sum for k = ${k} and n = ${n} is: ${sum}`);
}

// Zadatak2
{
    let m = 10;
    let n = 100;
    let sum = 0; // Suma deljivih sa 7
    let num = 0; // Koliko ih je deljivo sa 7
    // if(m > n){
    //     let tmp = m;
    //     m = n;
    //     n = tmp;
    // }
    for(let i = m; i <= n;i++){
        if(i % 7 === 0){
            sum += i;
            num++;
        }
    }
    console.log(`Prosek brojeva deljivih sa 7 izmedju ${m} i ${n} je: ${sum / num}`)
}

//Zadatak3
{
    let n = 9;
    let poklopac = ' '.repeat(n-1) + '*';
    console.log(poklopac);
    for(let i = 0;i < n - 1; i++){
        let row = ' '.repeat(n-i-2) + '*' + ' '.repeat(2*i+1) + '*';
        console.log(row);
    }
    for(let i = n - 2;i > 0; i--){
        let row = ' '.repeat(n-i-1) + '*' + ' '.repeat(2*i-1) + '*';
        console.log(row);
    }
    console.log(poklopac);

}

// Zadatak4
{
    let month = 1;
    let isLeap = true;
    
    switch(month){
        case 0:case 2:case 4:case 6:case 7:case 9:case 11:
            console.log(31);
            break;
        case 1:
            if(isLeap)
                console.log(29);
            else
                console.log(28);
            break;
        case 3:case 5:case 8:case 10:
            console.log(30);
            break;
        default:
            console.log('Nepravilan unos');
            break;
    }

}