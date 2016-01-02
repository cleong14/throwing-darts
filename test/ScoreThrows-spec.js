// before everything...
// 1. npm init to do initial naming of file
// 2. npm install -D chai to install chai as a dev dependency.
// NOTE: npm install chai will install chai with it and you dont want to do that
// 3. mocha -w will auto run tests in terminal

// 1. make sure to require in chai or else chai will not be defined
// 2. make sure you have spec files in test folder. mocha looks for test folder in path
var chai = require('chai');

// also dont forget to require in actual js file
// NOTE: .. means parent of current file
var ScoreThrows = require('../ScoreThrows');

// make sure to do this as well!
var expect = chai.expect;

// now we can begin!
describe('ScoreThrows', function () {
  var score;

  beforeEach(function () {
    score = new ScoreThrows ();
  });

  it('it should be a function', function () {
    expect(ScoreThrows).to.be.a('function');
  });

  it('it should take in a number array', function () {
    expect(arguments).to.equal.arguments;
    expect(arguments).to.equal([]);
  });
});