"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateData = void 0;
var faker_1 = require("@faker-js/faker");
var GenerateData = /** @class */ (function () {
    function GenerateData() {
    }
    GenerateData.getFirstname = function () {
        return faker_1.faker.person.firstName('female');
    };
    GenerateData.getCvvNumber = function () {
        return faker_1.faker.finance.creditCardCVV();
    };
    return GenerateData;
}());
exports.GenerateData = GenerateData;
