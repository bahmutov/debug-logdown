// standard messages are not logged unless the logger is enabled
// errors are always reported

// run using `node test/test-errors.js`
// you should only see the error message
var log = require('..')('test-log');

log.log('log.log with', '*bold keywords*');
log.info('log.info with **emphasis is also bold**');
log.warn('log.warn about the `code samples`');
log.error('log.error there is an *ERROR*');
