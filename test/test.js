// nothing is shown by default
// node test.js

// show only output for test-log
// DEBUG=test-log node test.js

// show only output for worker
// DEBUG=worker node test.js

// show both loggers
// DEBUG=test-log,worker node test.js

var log = require('..')('test-log'),
  worker = require('..')('worker');

log.log('log.log with *bold keywords*');
log.info('log.info with **emphasis is also bold**');
log.warn('log.warn about the `code samples`');
log.error('log.error there is an *ERROR*');

worker.log('worker.log can *be bold too*');
worker.info('worker.info has\n`code samples\n\teven across lines\n\tlooking good`');
worker.warn('worker.warn');
worker.error('worker.error');
