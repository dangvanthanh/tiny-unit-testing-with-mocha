var md5 = require('../lib/md5');
var expect = require('chai').expect;

describe('#md5()', function() {
  describe('with string argument', function() {
    it('should compute MD5 hash', function(done) {
      md5('Glad Chinda', function(err, hash) {
        if (err) return done(err);

        expect(hash)
          .to.be.a('string')
          .that.matches(/^[a-f0-9]{32}$/)
          .and.equal('877dbb93f50eb8a89012e15bd37ee7e4');
        done();
      });
    });
  });

  describe('with non-string argument', function() {
    it('should throw an error', function(done) {
      md5(12345, function(err, hash) {
        if (err) {
          expect(function() {
            throw err;
          }).to.throw(
            TypeError,
            'The "data" argument must be one of type string, TypedArray, or DataView. Received type number'
          );

          // finally call the done() callback
          // to terminate the test and return
          return done();
        }

        // call the done() callback
        // to terminate the test
        done();
      });
    });
  });
});
