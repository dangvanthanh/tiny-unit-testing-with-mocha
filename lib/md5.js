var CryptoJs = require('crypto-js');

module.exports = function(string, callback) {
  var withCallback = typeof callback === 'function';

  try {
    var hash = CryptoJs.MD5(string).toString();

    withCallback && callback(null, hash);
  } catch (e) {
    if (withCallback) {
      callback(e);
    } else {
      throw e;
    }
  }
};
