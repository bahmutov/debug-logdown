var Logdown = require('logdown');

module.exports = function (name) {
  if (!name || typeof name !== 'string') {
    throw new Error('expected a prefix name string');
  }
  return new Logdown({
    prefix: name,
    logAllErrors: true
  });
};

Logdown.disable('*');

function enableSomeLoggers(logNames) {
  if (logNames) {
    var names = logNames.split(',');
    names.forEach(function (name) {
      Logdown.enable(name);
    });
  }
}

enableSomeLoggers(process.env.DEBUG);
