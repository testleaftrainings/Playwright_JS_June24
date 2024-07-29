"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoadApplication = /** @class */ (function () {
    function LoadApplication() {
    }
    LoadApplication.prototype.launchBrowser = function () {
        console.log("ChromeBrowser");
    };
    LoadApplication.prototype.fillAndEnter = function () {
        console.log("Method built with type and enter Congifuration for element action");
    };
    LoadApplication.prototype.clickAndverifyTitle = function () {
        console.log("Method built to click and verify the title of the page");
        return "Title";
    };
    LoadApplication.prototype.startReport = function () {
        console.log("Adding custom reports with screenshot for each method");
    };
    return LoadApplication;
}());
var app = new LoadApplication();
app.startReport();
app.clickAndverifyTitle();
