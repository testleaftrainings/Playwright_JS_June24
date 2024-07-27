"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var learnInheritance_1 = require("./learnInheritance");
var SFHome = /** @class */ (function (_super) {
    __extends(SFHome, _super);
    function SFHome(page, title) {
        var _this = _super.call(this, page) || this;
        _this.verifytitle(title);
        return _this;
    }
    SFHome.prototype.verifytitle = function (title) {
        this.username = "Vidya"; //overridden
        console.log("title is verified ".concat(this.username, " ").concat(title));
    };
    return SFHome;
}(learnInheritance_1.SFLogin));
var hpage = new SFHome("Bharathi", "Home | Salesforce");
hpage.displayLoginform();
