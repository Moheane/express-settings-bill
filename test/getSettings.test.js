let assert = require("assert")
let settings_bill = require('../settings_bill');


describe('returns settings value function', function () {
    it('returns sms value set when given action is sms', function () {
        assert.equal(false, settings_bill().actionsFor('sms'))
    } );
   
})