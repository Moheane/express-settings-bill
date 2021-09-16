let assert = require("assert")
let settings_bill = require('../settings_bill');


describe('returns settings value function', function () {
    it('returns false when given action value', function () {
        assert.equal(false, settings_bill().actionsFor('sms'))
    } );
   
})