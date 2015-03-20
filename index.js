var Logdown = require('logdown');

module.exports = function (name) {
  if (!name || typeof name !== 'string') {
    throw new Error('expected a prefix name string');
  }
  return new Logdown({ prefix: name });
};

Logdown.disable('*');

var logNames = process.env.DEBUG;
if (logNames) {
  var names = logNames.split(',');
  names.forEach(function (name) {
    Logdown.enable(name);
  });
}
