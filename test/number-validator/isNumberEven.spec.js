import {NumbersValidator} from '../../app/numbers-validator.js';
import {expect} from 'chai';

describe('isNumberEven positive tests', () => {
  let numbersValidator;

  beforeEach(() => {
    numbersValidator = new NumbersValidator();
  });

  afterEach(() => {
    numbersValidator = null;
  });

  it('returns true when provided positive even number', () => {
    const expectedResult = numbersValidator.isNumberEven(4);
    expect(expectedResult).to.be.equal(true);
  });

  it('returns true when proided negative even number', () => {
    const expectedResult = numbersValidator.isNumberEven(-124);
    expect(expectedResult).to.be.equal(true);
  });

  it('returns false when provided not even number', () => {
    const expectedResult = numbersValidator.isNumberEven(9);
    expect(expectedResult).to.be.equal(false);
  });
});

describe('isNumberEven negative tests', () => {
  let numbersValidator;

  beforeEach(() => {
    numbersValidator = new NumbersValidator();
  });

  afterEach(() => {
    numbersValidator = null;
  });

  it('throws error when provided not a string', () => {
    expect(() => {
      numbersValidator.isNumberEven('hi');
    }).throw('[hi] is not of type "Number" it is of type "string"');
  });
});
