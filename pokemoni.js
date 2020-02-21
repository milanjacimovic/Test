let piplup = {
    ime: 'Piplup',
    vrsta: 'Vodeni',
    sposobnosti: ['Mehurici', 'Vrtlog', 'Hidro pumpa'],
    karakteristike: {napad:51, odbrana:53, brzina: 40}
}

let glaceon = {
    ime: 'Glaceon',
    vrsta: 'Ledeni',
    sposobnosti: ['Ledeni vetar', 'Snezna oluja', 'Snezna lavina'],
    karakteristike: {napad:60, odbrana:110, brzina: 65}
}
let shaymin = {
    ime: 'Shaymin',
    vrsta: 'Travnati',
    sposobnosti: ['Magicni list', 'Aromaterapija', 'Slatki poljubac'],
    karakteristike: {napad:100, odbrana:100, brzina: 100} 
}
let mareep = {
    ime: 'Mareep',
    vrsta: 'Elektricni',
    sposobnosti: ['Munja', 'Magnetno polje', 'Elektricna mreza'],
    karakteristike: {napad:40, odbrana:40, brzina: 35}
}
let cyndaquil = {
    ime: 'Cyndaquil',
    vrsta: 'Vatreni',
    sposobnosti: ['Erupcija', 'Bacac plamena', 'Plameni tocak'],
    karakteristike: {napad:52, odbrana:43, brzina: 65}
}

let pokemoni = [piplup, glaceon, shaymin, mareep, cyndaquil]

function primaNiz (niz){
  let sposobnostiSvih = [] 
    for(let i=0; i<niz.length;i++){
        for(j=0; j<niz[i].sposobnosti.length; j++){
            sposobnostiSvih.push(niz[i].sposobnosti[j])
        }
      
    }
    return sposobnostiSvih
}

// console.log(primaNiz(pokemoni))

pokemoni.sort((a, b) => {
    return a.karakteristike.brzina - b.karakteristike.brzina
})

// console.log(pokemoni);

function najvecaJacina (niz){
    
    pokemoni.sort((a, b) => {
        return a.karakteristike.napad - b.karakteristike.napad
    })
    console.log('IIIIIII POBEDNIK JEEEEEEEE:');
    
    return niz[niz.length-1]
}


// console.log(najvecaJacina(pokemoni));