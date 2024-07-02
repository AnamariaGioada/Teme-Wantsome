// 1. verificati daca toate elementele unui array sunt numere pare folosind metoda every
function allEven(array) {
    const result = array.every(element =>
        element % 2 === 0);
    console.log(result ? 'Toate elementele array-ului sunt pare.' : 'Nu toate elementele array-ului sunt pare.');
};
allEven([2, 5, 8, 10, 11, 21, 86, 93, 100]);
allEven([0, 2, 4, 6, 8, 10]);
allEven([10, 12, 14, 16, 18, 20]);


// 2. folosind forEach, afisati toate elementele unui array

const displayArray = [2, 5, 7, "George", "12", 33, undefined, true, 1, null];
    displayArray.forEach((element) => 
        console.log(element)
    );



// 3. folosind reduce, adunati toate numerele dintr-un array

const array = [2, 6, 8, 10];
let sumOfElements = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0);
console.log("Suma elementelor este: ", sumOfElements);