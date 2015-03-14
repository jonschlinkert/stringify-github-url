/*!
 * stringify-github-url <https://github.com/jonschlinkert/stringify-github-url>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var should = require('should');
var github = require('./');

describe('github', function () {
  it('should generate a github URL:', function () {
    github('assemble', 'verb').should.equal('https://github.com/assemble/verb');
  });
  it('should support branch:', function () {
    github('assemble', 'verb', 'v0.6.0').should.equal('https://github.com/assemble/verb/tree/v0.6.0');
  });
});

describe('github tarball', function () {
  it('should generate a github tarball url:', function () {
    github.tarball('assemble', 'verb').should.equal('https://api.github.com/repos/assemble/verb/tarball');
  });
});

describe('github zipball', function () {
  it('should generate a github zipball url:', function () {
    github.zipball('assemble', 'verb').should.equal('https://api.github.com/repos/assemble/verb/zipball');
  });
});

describe('errors', function () {
  it('should throw an error when `user` not a string:', function () {
    (function () {
      github();
    }).should.throw('stringify-github-url expects `user` to be a string.');
  });
  it('should throw an error when `repo` not a string:', function () {
    (function () {
      github('foo');
    }).should.throw('stringify-github-url expects `repo` to be a string.');
  });
});
