var promiseMd5 = require('../promise-md5');
var expect = require('chai').expect;

describe('#promiseMd5()', function() {
  context('with string argument', function() {
    it('should compute MD5 hash', function(done) {
      return promiseMd5('Glad Chinda').then(function(hash) {
        expect(hash)
          .to.be.a('string')
          .that.matches(/^[a-f0-9]{32}$/)
          .and.equal('877dbb93f50eb8a89012e15bd37ee7e4');
      });
    });
  });

  context('with non-string argument', function() {
    it('should throw an error', function(done) {
      return promiseMd5(12345).catch(function(err) {
        expect(function() {
          throw err;
        }).to.throw(
          TypeError,
          'The "data" argument must be one of type string, TypedArray, or DataView. Received type number'
        );
      });
    });
  });
});