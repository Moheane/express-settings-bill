let assert = require("assert")
let settings_bill = require('../settings_bill');


describe('hasReachedCriticalLevel function', function () {
    it('returns false', function () {
        assert.equal(false, settings_bill().hasReachedCriticalLevel())
    } )
  
})