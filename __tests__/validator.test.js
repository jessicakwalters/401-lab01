'use strict';

const validator = require('../lib/validator.js');

describe('Does the input follow the rule?', () => {

  test('Test positive rule', () => {
    expect(validator.isTrue(5, 'positive')).toEqual(true);
  })
  test('Test negative rule', () => {
    expect(validator.isTrue(-7, 'positive')).toEqual(false);
  })
  test('Test zero rule', () => {
    expect(validator.isTrue(0, 'positive')).toEqual(false);
  })

  test('Test negative rule', () => {
    expect(validator.isTrue(5, 'negative')).toEqual(false);
  })
  test('Test negative rule', () => {
    expect(validator.isTrue(-7, 'negative')).toEqual(true);
  })
  test('Test negative rule', () => {
    expect(validator.isTrue(0, 'negative')).toEqual(false);
  })

  test('Test zero rule', () => {
    expect(validator.isTrue(5, 'zero')).toEqual(false);
  })
  test('Test zero rule', () => {
    expect(validator.isTrue(-7, 'zero')).toEqual(false);
  })
  test('Test sero rule', () => {
    expect(validator.isTrue(0, 'zero')).toEqual(true);
  })
})

describe('Is the type of the input boolean', () => {
  test('Test a boolean', () => {
    expect(validator.isBoolean(true)).toBeTruthy();
  })

  test('Test a string', () => {
    expect(validator.isBoolean('true')).toBeFalsy();
  })
})

describe('Does the object have the indicated property and value', () => {
  test('Test an object with the indicated property', () => {
    expect(validator.hasPropertyValue({title: 'Poor Decision Making', author: 'Jessica'}, {author: 'Jessica'})).toEqual(true);
  })
  test('Test an object without the indicated property', () => {
    expect(validator.hasPropertyValue({title: 'Poor Decision Making', author: 'Jessica'}, {year: '2019'})).toEqual(false);
  })

})

describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out

  it('strings', () => {

    expect(validator.isValid('yes', 'string')).toBeTruthy();
    expect(validator.isValid(7, 'string')).toBeFalsy();
    expect(validator.isValid([1, 2, 3], 'string')).toBeFalsy();
    expect(validator.isValid({name: 'Jessica'}, 'string')).toBeFalsy();
    expect(validator.isValid(true, 'string')).toBeFalsy();
  });

  it('numbers', () => {
    expect(validator.isValid('yes', 'number')).toBeFalsy();
    expect(validator.isValid(7, 'number')).toBeTruthy();
    expect(validator.isValid([1, 2, 3], 'number')).toBeFalsy();
    expect(validator.isValid({name: 'Jessica'}, 'number')).toBeFalsy();
    expect(validator.isValid(true, 'number')).toBeFalsy();
  });

  it('arrays', () => {
    expect(validator.isValid([1, 2, 3], 'object')).toBeTruthy();
  });

  it('objects', () => {
    expect(validator.isValid('yes', 'object')).toBeFalsy();
    expect(validator.isValid(7, 'object')).toBeFalsy();
    expect(validator.isValid([1, 2, 3], 'object')).toBeTruthy();
    expect(validator.isValid({name: 'Jessica'}, 'object')).toBeTruthy();
    expect(validator.isValid(true, 'object')).toBeFalsy();
  });

  it('booleans', () => {
    expect(validator.isValid('yes', 'boolean')).toBeFalsy();
    expect(validator.isValid(7, 'boolean')).toBeFalsy();
    expect(validator.isValid([1, 2, 3], 'boolean')).toBeFalsy();
    expect(validator.isValid({name: 'Jessica'}, 'boolean')).toBeFalsy();
    expect(validator.isValid(true, 'boolean')).toBeTruthy();
  });

  it('functions', () => {
    expect(validator.isValid('yes', 'function')).toBeFalsy();
    expect(validator.isValid(7, 'function')).toBeFalsy();
    expect(validator.isValid([1, 2, 3], 'function')).toBeFalsy();
    expect(validator.isValid({name: 'Jessica'}, 'function')).toBeFalsy();
    expect(validator.isValid(true, 'function')).toBeFalsy();
    expect(validator.isValid(Math.sin, 'function')).toBeTruthy();
  });

});

describe('validator module performs complex validations', () => {

  it('validates the presence of required object properties at any level', () => {
    // i.e. does person.hair.color exist and have a good value, not just person.hair
    expect(validator.hasProperty({title: 'JS for Dummies', author: {firstName: 'Jessica', lastName: 'Walters'}}, 'author')).toEqual(true);
  });

  it('validates the proper types of object properties', () => {
    // i.e. person.name must be a string, etc.
    expect(validator.hasPropertyType({title: 'JS for Dummies', author: {firstName: 'Jessica', lastName: 'Walters'}},'author', 'object')).toBeTruthy();
  });

  it('validates the types of values contained in an array', () => {
    // i.e. an array of all strings or numbers
    expect(validator.arrayType([1,2,3], 'number')).toBeTruthy();
  });

  it('validates a value array against an approved list', () => {
    // i.e. a string might only be allowed to be "yes" or "no"
    expect(validator.arrayValues([1,2,3], [1, 4, 6])).toBeFalsy();
  });

  // TODO: Cover so, so many more cases

});

