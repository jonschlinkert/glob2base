'use strict';

var path = require('path');
var globParent = require('glob-parent');
var cache = {};

module.exports = function glob2base(glob) {
  var type = typeof glob;
  var str = glob;

  if (type === 'string' && cache.hasOwnProperty(glob)) {
    return cache[glob];
  }

  if (type === 'object' && glob.pattern) {
    str = glob.pattern;
  }

  var parent = globParent(str);
  if (parent === str) {
    parent = path.dirname(str);
  }
  if (parent[parent.length - 1] !== '/') {
    parent += '/';
  }
  return (cache[str] = parent);
};
