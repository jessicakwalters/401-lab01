'use strict';

let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */
validator.isTrue = (input, rules) => {
  if(rules === "positive"){
    return input > 0;
  }

  if(rules === "negative"){
    return input < 0;
  }

  if(rules === "zero"){
    return input === 0;
  }
  
};

/**
 * Is this a boolean
 * @param input
 * @returns {boolean}
 */
validator.isBoolean = (input) => {
  return typeof input === 'boolean';
};

/**
 * Does the object have a given value for a stated property
 * @param input
 * @param property
 * @returns {boolean}
 */
validator.hasPropertyValue = (input, property) => {
  if ( typeof input === "object" && typeof property === 'object'){
    let properties = Object.keys(property);
    let values = Object.values(property);
    for(let i = 0; i < properties.length; i++){
      if (input.hasOwnProperty(properties[i])){
        return input[properties[i]] === values[i];
      } else {
        return false;
      }
    }
  } 
  return "Wrong Type!"
};

/**
 * Does the object have a given property
 * @param input
 * @param property
 * @returns {boolean}
 */
validator.hasProperty = (input, property) => {
  if ( typeof input === "object" && typeof property === 'string'){
    return input.hasOwnProperty(property);
  } 
};

/**
 * Does the object have the proper type of a given property
 * @param input
 * @param property
 * @param type
 * @returns {boolean}
 */
validator.hasPropertyType = (input, property, type) => {
  if ( typeof input === "object" && typeof property === 'string'){
    return typeof input[property] === type;
  } 
};

/**
 * Does all array items have correct type
 * @param input
 * @param type
 * @returns {boolean}
 */
validator.arrayType = (input, type) => {
  let flag = true;
  if ( typeof input === "object" && typeof property === 'string'){
    for (let i = 0; i < input.length; i++){
      if (! (typeof input[i] === type)) {
        flag = false;
      }
    }
  } 
  return flag;
};

/**
 * Does all array items have correct type
 * @param input
 * @param list
 * @returns {boolean}
 */
validator.arrayValues = (input, list) => {
  let flag = true;
  if ( typeof input === "object" && typeof list === 'object'){
    for (let i = 0; i < input.length; i++){
        if(!list.includes(input[i])){
          flag = false;
        } 
      }
    }
    return flag;
  } 
  
  
/**
 * Is this a valid input
 * @param input
 * @param rule
 * @returns {boolean}
 */
validator.isValid= (input, rule) => {
  if ( rule === 'string')
  return typeof input === 'string';

  if ( rule === 'number')
  return typeof input === 'number';

  if ( rule === 'array')
  return typeof input === 'object';

  if ( rule === 'object')
  return typeof input === 'object';

  if ( rule === 'boolean')
  return typeof input === 'boolean';

  if ( rule === 'function')
  return typeof input === 'function';


};




