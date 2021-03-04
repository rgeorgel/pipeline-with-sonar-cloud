const calculator = require('../src/calculator');

test('Sum 10 + 10 to be equal to 20', () => {
  const expectedValue = 20;
  const result = calculator.sum(10, 10);
  expect(result).toBe(expectedValue);
})

test('Subtract 30 - 10 to be equal to 20', () => {
  const expectedValue = 20;
  const result = calculator.subtraction(30, 10);
  expect(result).toBe(expectedValue);
})

test('Divide 50 / 5 to be equal to 10', () => {
  const expectedValue = 10;
  const result = calculator.division(50, 5);
  expect(result).toBe(expectedValue);
})

test('Multiply 2 x 5 to be equal to 10', () => {
  const expectedValue = 10;
  const result = calculator.multiplication(2, 5);
  expect(result).toBe(expectedValue);
})
