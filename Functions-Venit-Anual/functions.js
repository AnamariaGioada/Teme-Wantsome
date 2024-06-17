function computeIncome(sentence) {
    const modifiedSentence = sentence.replaceAll(",", "");
    const words = modifiedSentence.split(" ");
    nume = words[0];
    let valoare = 0;
    words.forEach((element,index) => {
        switch (element) {
            case "lei/luna":
                valoare = valoare + (parseInt(words[index - 1]) * 12);
                break;
            case "lei/an":
                valoare = valoare + parseInt(words[index - 1]);
                break;
            case "euro/luna":
                valoare = valoare + (parseInt(words[index - 1]) * 4.97 * 12);
                break;
            case "euro/an":
                valoare = valoare + (parseInt(words[index - 1]) * 4.97);
                break;
            case "usd/luna":
                valoare = valoare + (parseInt(words[index - 1]) * 4.60 * 12);
                break;
            case "usd/an":
                valoare = valoare + (parseInt(words[index - 1]) * 4.60);
        };
    });
    return `Venitul anual al lui ${nume} este de ${valoare} lei.`;
};

console.log(computeIncome("Ion castiga 5000 lei/luna din salariu, 1000 lei/an bonus si 1500 lei/luna din freelancing."));
console.log(computeIncome("Andrei are un salariu de 1000 euro/luna, un bonus de 9000 lei/an, insa mai castiga suplimentar aproximativ 500 usd/luna din freelancing."));
console.log(computeIncome("Georgiana are un salariu de 1500 usd/luna, un bonus de 2000 euro/an si mai castiga din actiuni aproximativ 3000 lei/luna din actiuni."));