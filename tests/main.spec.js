var expect = require('chai').expect;

describe('Main', function() {
  let array;

  beforeEach(function() {
    array = [1,2,3];
  });

  it ('should have a size of 4 after adding one element', function() {
    array.push(4);
    expect(array).to.have.lengthOf(4);
  });
});
