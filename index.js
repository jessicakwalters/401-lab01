'use strict';

const validator = require('./lib/validator.js');

console.log(validator.isTrue(10, 'positive'));
console.log(validator.isTrue(-7, 'negative'));
console.log(validator.isTrue(0, 'zero'));

console.log(validator.isBoolean(false));
console.log(validator.isBoolean('false'));
console.log(validator.hasProperty({title: 'Good Decision Making', author: 'Frank', year: '2020'}, {author: 'Frank'}));