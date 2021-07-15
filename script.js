// Check age
const checkAge = function (theAge) {
    if (theAge >= 18) {
        return true;
    } else {
        return false;
    }
};
console.log(checkAge(20));

// Check age - 2
const checkAgeTwo = function (theAge) {
    checkAge();
    if (theAge >= 18) {
        return "Hello there";
    } else {
        return "Hey kiddo";
    }
};
console.log(checkAgeTwo(20));

// VAT exercise 1
const calculate = function (basePrice) {
    // * 9% - Uitkomst 18 cent
    const calculateVAT = basePrice * 0.09;
    console.log(calculateVAT);
    //  * 109% - Uitkomst 2,18
    const includeVAT = basePrice * 1.09;
    return includeVAT;
};
console.log(calculate(15));


// VAT exercise 2
const 


