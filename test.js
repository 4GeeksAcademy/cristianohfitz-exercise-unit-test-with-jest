// Import the function sum from the app.js file
const { sum } = require('./app.js');
// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);
    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", () => {
    const result = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(result).toBeCloseTo(expected, 2); // handles floating point precision
});

test("10 USD should be converted to the correct amount of Yen", () => {
    // Using the formula: (10 / 1.07) * 156.5
    const expected = (10 / 1.07) * 156.5;
    const result = fromDollarToYen(10);
    expect(result).toBeCloseTo(expected, 2);
});

test("1000 Yen should be converted to the correct amount of Pounds", () => {
    // Using the formula: (1000 / 156.5) * 0.87
    const expected = (1000 / 156.5) * 0.87;
    const result = fromYenToPound(1000);
    expect(result).toBeCloseTo(expected, 2);
});