'use strict';

var path = require('path');
var globParent = require('glob-parent');

module.exports = function glob2base(glob) {
  var str = glob;
  if (typeof glob === 'object' && glob.pattern) {
    str = glob.pattern;
  }
  var parent = globParent(str);
  if (parent === str) {
    parent = path.dirname(str);
  }
  if (parent[parent.length - 1] !== '/') {
    parent += '/';
  }
  return parent;
};
