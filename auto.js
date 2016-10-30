// This file can be required in Browserify and Webpack for automatic polyfill
// To use it:  require('whatwg-fetch/auto');
'use strict';
module.exports = require('./').polyfill();
