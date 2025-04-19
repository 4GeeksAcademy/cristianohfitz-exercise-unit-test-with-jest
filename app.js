
// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b;
}
// Just a console log for ourselves
console.log(sum(7,3))
// Export the function to be used on other files
// (similar to the keyword "export" when using webpack)

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
function fromDollarToYen(dollars) {
    return (dollars / oneEuroIs["USD"]) * oneEuroIs["JPY"];
}
function fromEuroToDollar(euros) {
    return euros * oneEuroIs["USD"];
}
function fromYenToPound(yen) {
    return (yen / oneEuroIs["JPY"]) * oneEuroIs["GBP"];
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };