let capacitateCilindrica = prompt("Introduceti capacitatea cilindrica");
let mijlocDeTransport = prompt("Introduceti tipul mijlocului dumneavoastra de transport")
let fractiune = Math.floor(capacitateCilindrica / 200);
let restFractiune = capacitateCilindrica % 200;

if (restFractiune > 0) {
    fractiune = fractiune+1;
}
let pret = 8;
if (capacitateCilindrica <= 1600 && ["autoturism", "motocicleta", "triciclu", "cvadriciclu"].includes(mijlocDeTransport)) {
    
    pret = 8;
    
}
else if (capacitateCilindrica > 1600 && ["motocicleta", "triciclu", "cvadriciclu"].includes(mijlocDeTransport)) {
    pret = 9;
}
else if ((capacitateCilindrica > 1600 && capacitateCilindrica <= 2000 && ["autoturism"].includes(mijlocDeTransport))|| ["tractor"].includes(mijlocDeTransport)) {
    pret = 18;
}
else if (capacitateCilindrica > 2000 && capacitateCilindrica<= 2600 && ["autoturism"].includes(mijlocDeTransport)) {
    pret = 72;
}
else if (capacitateCilindrica > 2600 && capacitateCilindrica <= 3000 && ["autoturism"].includes(mijlocDeTransport)) {
    pret = 144;
}
else if (capacitateCilindrica > 3000 && ["autoturism"].includes(mijlocDeTransport)) {
    pret = 290;
}
else if (["autobuz", "autocar", "microbuz"].includes(mijlocDeTransport)) {
    pret = 24;
}

impozit = fractiune * pret;
alert(`Impozitul auto pentru mijlocul dumneavoastra de transport cu capacitatea cilindrica de ${capacitateCilindrica} este: ${impozit} RON`);