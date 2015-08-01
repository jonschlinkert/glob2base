'use strict';

var getBase = require('glob2base');
var glob = require('glob');

module.exports = function (pattern) {
  var globber = new glob.Glob(pattern, {cwd: __dirname});
  return getBase(globber);
};
