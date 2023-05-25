import {NumbersValidator} from '../../app/numbers-validator.js';
import {expect} from 'chai';

describe('isAllNumbers positive tests', () => {
  let numbersValidator;

  beforeEach(() => {
    numbersValidator = new NumbersValidator();
  });

  afterEach(() => {
    numbersValidator = null;
  });

  it('returns true when all elements in provided array are numbers', () => {
    const expectedResult = numbersValidator.isAllNumbers([1, 2, 123, 1512, 2, 0, -2]);
    expect(expectedResult).to.be.equal(true);
  });

  it('returns false when at least one element in provided array is not number', () => {
    const expectedResult = numbersValidator.isAllNumbers([1, 2, '123', -1023, 2, 0, -2]);
    expect(expectedResult).to.be.equal(false);
  });
});

describe('isAllNumbers negative tests', () => {
  let numbersValidator;

  beforeEach(() => {
    numbersValidator = new NumbersValidator();
  });

  afterEach(() => {
    numbersValidator = null;
  });

  it('throws error when provided not array', () => {
    const inputData = 126;
    expect(() => {
      numbersValidator.isAllNumbers(inputData);
    }).throw(`[${inputData}] is not an array`);
  });
});
