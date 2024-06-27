const initialValues = [2, "17", 2.3, null, "Ana", -7, true];
const otherValues = ["Maria", 22, undefined, -4, "15", false];
initialValues.push(...otherValues);
console.log(initialValues);

for (let i = 0; i < initialValues.length; i++) {
    if (typeof initialValues[i] === "number") {
        initialValues[i] = initialValues[i] * 4;
    }
    else if (typeof initialValues[i] === "string") {
        initialValues[i] = initialValues[i] + ' happy coding';
    
    }
    else if (typeof initialValues[i] === "boolean") {
        initialValues[i] = !initialValues[i];
    }
}
console.log(initialValues);