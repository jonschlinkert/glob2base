var getBase = require('../');
var glob = require('glob');
var path = require('path');
var should = require('should');
require('mocha');

function glob2base(pattern) {
  var globber = new glob.Glob(pattern, {cwd: __dirname});
  return getBase(globber);
}

describe('glob instance support', function() {
  it('should get a base name', function() {
    glob2base('js/*.js').should.equal('js/');
  });

  it('should get a base name from a nested glob', function() {
    glob2base('js/**/test/*.js').should.equal('js/');
  });

  it('should get a base name from a flat file', function() {
    glob2base('js/test/wow.js').should.equal('js/test/');
  });

  it('should get a base name from character class pattern', function() {
    glob2base('js/t[a-z]st}/*.js').should.equal('js/');
  });

  it('should get a base name from brace set expansion', function() {
    glob2base('js/{src,test}/*.js').should.equal('js/');
  });

  it('should get a base name from brace range expansion', function() {
    glob2base('js/test{0..9}/*.js').should.equal('js/');
  });

  it('should get a base name from extglob', function() {
    glob2base('js/t+(wo|est)/*.js').should.equal('js/');
  });

  it('should get a base name from a complex brace glob', function() {
    glob2base('lib/{components,pages}/**/{test,another}/*.txt').should.equal('lib/');
    glob2base('js/test/**/{images,components}/*.js').should.equal('js/test/');
    glob2base('ooga/{booga,sooga}/**/dooga/{eooga,fooga}').should.equal('ooga/');
  });
});
