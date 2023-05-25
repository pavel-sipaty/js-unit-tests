import {NumbersValidator} from '../../app/numbers-validator.js';
import {expect} from 'chai';

describe('getEvenNumbersFromArray positive tests', () => {
  let numbersValidator;

  beforeEach(() => {
    numbersValidator = new NumbersValidator();
  });

  afterEach(() => {
    numbersValidator = null;
  });

  it('returns array of even numbers when provided array with positive numbers', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const expectedArray = [2, 4];
    const evenNumbersArray = numbersValidator.getEvenNumbersFromArray(inputArray);
    expect(evenNumbersArray).to.deep.equal(expectedArray);
  });

  it('returns array of even numbers when provided array with negatice numbers', () => {
    const inputArray = [-23, -1, -67, -4, -10, -20];
    const expectedArray = [-4, -10, -20];
    const evenNumbersArray = numbersValidator.getEvenNumbersFromArray(inputArray);
    expect(evenNumbersArray).to.deep.equal(expectedArray);
  });
});

describe('getEvenNumbersFromArray negative tests', () => {
  let numbersValidator;

  beforeEach(() => {
    numbersValidator = new NumbersValidator();
  });

  afterEach(() => {
    numbersValidator = null;
  });

  it('throws an error when provided array has at least one "string" element', () => {
    const inputArray = [1, 2, '3', 6, 7];
    expect(() => {
      numbersValidator.getEvenNumbersFromArray(inputArray);
    }).throw(`[${inputArray}] is not an array of "Numbers"`);
  });

  it('returns empty array when provided array has no even numbers', () => {
    const emptyArray = numbersValidator.getEvenNumbersFromArray([1, 3, 121, 57]);
    expect(emptyArray).to.have.length(0);
  });
});
