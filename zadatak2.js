let cena = 100;
let novac = 1000;
if (cena>novac) {
    console.log('Nemate dovoljno novca');
    console.log(novac);
}
else {
    console.log('Uspesno ste kupili proizvod')
    console.log( 'Na racunu Vam je ostalo ', + novac-cena + ' dinara')
}