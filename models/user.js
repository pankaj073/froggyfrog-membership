var assert = require("assert");
var utility = require("../lib/utility");
var User = function(args) {
    assert(args.email, "email is required");
    var user = {};
    user.email = args.email;
    user.createdAt = args.createdAt || new Date();
    user.status = args.status || "pending";
    user.signInCount = args.signInCount || 0;
    user.lastLoginAt = args.LastLogin || new Date();
    user.currentLoginAt = args.currentLoginAt || new Date();
    user.authenticationToken = args.authenticationToken || utility.randomString(12);
    return user;
};
module.exports = User;