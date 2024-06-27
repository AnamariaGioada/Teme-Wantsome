//media aritmetica a numerelor unui array

const mediaAritmetica = [5, 17, 30, 44, 79, 2];
let sum = 0;

for (let i = 0; i < mediaAritmetica.length; i++){
    sum = sum + mediaAritmetica[i];
}
let media = sum / mediaAritmetica.length;

console.log("Media aritmetica a array-ului este" , media);


// Suma numerelor dintr-un array mixt

const mixtArray = [6, 24, "Cristina", null, true, 33, false, "Andreea", 18];
let suma = 0;
for (let j = 0; j < mixtArray.length; j++) {
    if (typeof mixtArray[j] === "number") {
        suma = suma + mixtArray[j];
    }
}
console.log("Suma numerelor din array este ", suma);

// Bonus

const fibonacci = [0, 1];

for (let i = 2; i < 20; i++) {
    fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1]);
}

console.log("Primele 20 numere din sirul lui Fibonacci sunt: ", fibonacci);