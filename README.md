# Tiny Unit Testing With Mocha

- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)

## Mocha

Run only file test

```
$ npm test -- -f [name-of-file-test]
```

## Chai

Chai provides the following assertion styles

1.  **Assert style**

```javascript
var assert = require("chai").assert;
var numbers = [1, 2, 3, 4, 5];

assert.isArray(numbers, "is array of numbers");
assert.include(numbers, 2, "array contains 2");
assert.lengthOf(number, 5, "array contains 5 numbers");
```

2.  **Expect style**

```javascript
var expect = require("chai").expect;
var numbers = [1, 2, 3, 4, 5];

expect(numbers)
  .to.be.an("array")
  .that.includes(2);
expect(numbers).to.have.lengthOf(5);
```

3.  **Should style**

```javascript
var should = require("chai").should;
var numbers = [1, 2, 3, 4, 5];

numbers.should.be.an("array").that.includes(2);
numbers.should.have.lengthOf(5);
```
