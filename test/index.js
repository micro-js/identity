/**
 * Imports
 */

var identity = require('..')
var assert = require('assert')

/**
 * Tests (lol)
 */

describe('identity', function() {
  it('should work', function () {
    assert.equal(identity(1), 1)
  })
})
