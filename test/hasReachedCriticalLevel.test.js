const settings_bill = require('../settings_bill');
const assert = require('assert')

describe('hasReachedCriticalLevel function', function () {
    it('returns false', function () {
        assert.equal(false, settings_bill().hasReachedCriticalLevel())
    } )
  
})