'use strict';

var Suite = require('benchmarked');
var suite = new Suite({
  result: false,
  cwd: __dirname,
  fixtures: 'fixtures/*.js',
  add: 'code/*.js',
});

suite.run();
