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
// Maak functie die de VAT berekend
const calculateVAT = function(basePrice, VATPercentage) {
    return basePrice * (VATPercentage / 100);
};

const calculatePriceIncludingVAT = function(basePrice, VATPercentage) {
    const VAT = calculateVAT(basePrice, VATPercentage);
    return basePrice + VAT;
};

console.log(calculatePriceIncludingVAT(1000, 21)); // 1210
console.log(calculatePriceIncludingVAT(2, 9)); // 2.18

// VAT exercise 2
const calculateBasePrice = function(priceIncludingVAT, VATPercentage) {
    const basePrice = priceIncludingVAT / ((100 + VATPercentage) / 100);
    return basePrice;
};

const calculateBasePriceAndVAT = function(priceIncludingVAT, VATPercentage) {
    const basePrice = calculateBasePrice(priceIncludingVAT, VATPercentage);
    const VAT = priceIncludingVAT - basePrice;
    return [basePrice, VAT];
};

console.log(calculateBasePriceAndVAT(1210, 21)); // [1000, 210]
console.log(calculateBasePriceAndVAT(2.18, 9)); // [2, 0.18]

