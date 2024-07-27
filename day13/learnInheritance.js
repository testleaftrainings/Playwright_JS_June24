"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SFLogin = void 0;
var SFLogin = /** @class */ (function () {
    function SFLogin(fname) {
        this.username = "demo";
    }
    SFLogin.prototype.displayLoginform = function () {
        console.log("SFLogin Page information ".concat(this.username));
    };
    return SFLogin;
}());
exports.SFLogin = SFLogin;
