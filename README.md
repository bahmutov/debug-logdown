# debug-logdown

> [debug][debug] + [logdown][logdown] = awesome Markdown logging per feature.

[![NPM][debug-logdown-icon] ][debug-logdown-url]

[![Build status][debug-logdown-ci-image] ][debug-logdown-ci-url]
[![dependencies][debug-logdown-dependencies-image] ][debug-logdown-dependencies-url]
[![devdependencies][debug-logdown-devdependencies-image] ][debug-logdown-devdependencies-url]

## Example

```js
var log = require('debug-logdown')('test-log'),
  worker = require('debug-logdown')('worker');
log.log('log.log with *bold keywords*');
log.info('log.info with **emphasis is also bold**');
log.warn('log.warn about the `code samples`');
log.error('log.error there is an *ERROR*');
worker.log('worker.log can *be bold too*');
worker.info('worker.info has\n`code samples\n\teven across lines\n\tlooking good`');
worker.warn('worker.warn');
worker.error('worker.error');
```

![screenshot][screenshot]

This works nicely with [quote](https://github.com/bahmutov/quote) to add bold / code style.

```js
var bold = require('quote')({ quotes: '*' });
var code = require('quote')({ quotes: '`' });
var worker = require('debug-logdown')('worker');
worker.log('worker id', bold(id), 'the code is', code('var code;'));
```

## Errors are always logged

Standard log messages from a logger are skipped unless the logger is enabled. The `log.error` messages
are *always* printed to simplify debugging.

### Small print

Author: Gleb Bahmutov &copy; 2015

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/debug-logdown/issues) on Github

## MIT License

Copyright (c) 2015 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[debug-logdown-icon]: https://nodei.co/npm/debug-logdown.png?downloads=true
[debug-logdown-url]: https://npmjs.org/package/debug-logdown
[debug-logdown-ci-image]: https://travis-ci.org/bahmutov/debug-logdown.png?branch=master
[debug-logdown-ci-url]: https://travis-ci.org/bahmutov/debug-logdown
[debug-logdown-dependencies-image]: https://david-dm.org/bahmutov/debug-logdown.png
[debug-logdown-dependencies-url]: https://david-dm.org/bahmutov/debug-logdown
[debug-logdown-devdependencies-image]: https://david-dm.org/bahmutov/debug-logdown/dev-status.png
[debug-logdown-devdependencies-url]: https://david-dm.org/bahmutov/debug-logdown#info=devDependencies
[screenshot]: images/screenshot.png
[debug]: https://www.npmjs.com/package/debug
[logdown]: https://www.npmjs.com/package/logdown
