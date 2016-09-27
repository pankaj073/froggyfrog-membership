var expect = require("chai").expect;
var User = require("../models/user");
describe("User", function () {
    describe("defaults", function () {
        var user = {};
        before(function() {
            user = new User({email: "pankaj073@gmail.com"});
        });
        it('email is pankaj073@gmail.com', function() {
            expect(user.email).to.equal("pankaj073@gmail.com");
        });
        it('has an authentication token', function() {
            expect(user.authenticationToken).to.not.be.an('undefined');
        });
        it('has a pending status', function() {
            expect(user.status).to.equal("pending");
        });
        it('has a created date', function() {
            expect(user.createdAt).not.be.an('undefined');
        });
        it('has a signInCount of 0', function() {
            expect(user.signInCount).to.equal(0);
        });
        it('has lastLogin', function() {
            expect(user.lastLoginAt).to.not.be.an('undefined');
        });
        it('has currentLogin', function() {
            expect(user.currentLoginAt).not.be.an('undefined');
        });
    });
});