let cars = [
  {
    id: '19UUA8F50DA160249',
    car_make: 'Scion',
    car_model: 'tC',
    price: 18185
  },
  {
    id: '1GYS3AEF7DR496039',
    car_make: 'Cadillac',
    car_model: 'CTS',
    price: 9552
  },
  {
    id: '2FMDK4KC0AB695258',
    car_make: 'BMW',
    car_model: '525',
    price: 7216
  },
  {
    id: '2FMDK4KC1AB495258',
    car_make: 'BMW',
    car_model: 'X5',
    price: 24373
  },
  {
    id: 'WAUAGAFDXEN710904',
    car_make: 'Volkswagen',
    car_model: 'Passat',
    price: 14950
  },
  {
    id: 'WAUDF68E55A006958',
    car_make: 'BMW',
    car_model: 'M3',
    price: 20307
  },
  {
    id: 'WAUDGAFL7CA205458',
    car_make: 'Chevrolet',
    car_model: 'Suburban 1500',
    price: 15344
  },
  {
    id: 'WAUUL58E95A401485',
    car_make: 'Chevrolet',
    car_model: 'Astro',
    price: 6157
  },
  {
    id: 'WAUVKAFR5AA133227',
    car_make: 'Volkswagen',
    car_model: 'GTI',
    price: 15589
  },
  {
    id: 'WBA3T3C5XF5402761',
    car_make: 'Nissan',
    car_model: 'NV2500',
    price: 12837
  }
];

let section1 = document.querySelector('.input-container');
let section2 = document.querySelector('#item-list')
let forma = document.querySelector('.forma');
let imePrezime = document.querySelector('#imeprezime');
let dugme = document.querySelector('.btn-kupi')
let ImeIPrezimeTxt = ""

dugme.addEventListener('click', (e) => {
  e.preventDefault();
  if (ImeIPrezimeTxt.trim() == '') {
    alert('Morate uneti Vase ime i prezime!')
    imePrezime.value = '';
    ImeIPrezimeTxt = '';
    return;
  }
  let div = document.createElement('div')
  let p = document.createElement('p')
  section2.appendChild(div)
  div.appendChild(p)
  p.innerHTML += `Vase Ime i Prezime je: ${ImeIPrezimeTxt.trim()} `
  let select = document.querySelector('#auto-marka').value
  let pronadjiAuto = cars.find((auto) => {
    return auto.id == `${select}`
  })
  p.innerHTML += `Cena automobila je: ${pronadjiAuto.price} `;
  p.innerHTML += `Marka automobila je: ${pronadjiAuto.car_make} `;
  p.innerHTML += `Model automobila je: ${pronadjiAuto.car_model} `;


  p.innerHTML += `Datum i vreme kupovine: ${vreme.toLocaleString()}`

  let btnDelete = document.createElement('button')
  div.appendChild(btnDelete)
  btnDelete.innerText = 'Obrisi unos';
  btnDelete.addEventListener('click', (e) => {
    console.log(e);
    div.remove();
  });
  imePrezime.value = '';
  ImeIPrezimeTxt = '';
})


let vreme = new Date();


imePrezime.addEventListener('input', (e) => {
  ImeIPrezimeTxt = e.target.value;

})

