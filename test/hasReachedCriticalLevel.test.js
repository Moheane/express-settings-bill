let assert = require("assert")
let settings_bill = require('../settings_bill');


describe('hasReachedCriticalLevel function', function () {
    it('returns true if has reached critical level', function () {
        assert.equal(false, settings_bill().hasReachedCriticalLevel())
    } )
  
})