import {NumbersValidator} from '../../app/numbers-validator.js';
import {expect} from 'chai';

describe('isInteger positive tests', () => {
  let numbersValidator;

  beforeEach(() => {
    numbersValidator = new NumbersValidator();
  });

  afterEach(() => {
    numbersValidator = null;
  });

  it('returns true when provided argument is positive integer', () => {
    const expectedResult = numbersValidator.isInteger(1234);
    expect(expectedResult).to.be.equal(true);
  });

  it('returns true when provided argument is negative integer', () => {
    const expectedResult = numbersValidator.isInteger(-10);
    expect(expectedResult).to.be.equal(true);
  });
});

describe('isInteger negative tests', () => {
  let numbersValidator;

  beforeEach(() => {
    numbersValidator = new NumbersValidator();
  });

  afterEach(() => {
    numbersValidator = null;
  });
  
  it('returns false when provided number with decimal', () => {
    const expectedResult = numbersValidator.isInteger(3.14);
    expect(expectedResult).to.be.equal(false);
  });

  it('throws error when provided array', () => {
    expect(() => {
      numbersValidator.isInteger([3.14]);
    }).throws('[3.14] is not a number');
  });

  it('throws error when provided string', () => {
    expect(() => {
      numbersValidator.isInteger('number');
    }).throws('[number] is not a number');
  });
});
