"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Validate = /** @class */ (function () {
    function Validate() {
        this.PLATFORM = "JODI";
    }
    Validate.prototype.validateEmail = function (input) {
        //default export
        var emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegExp.test(input);
    };
    Validate.prototype.isPasswordStrong = function (input) {
        //named export
        var strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        return strongPasswordRegex.test(input);
    };
    Validate.prototype.isValidPhonenumber = function (input) {
        return true;
    };
    return Validate;
}());
exports.default = Validate;
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
exports.Employee = Employee;
// console.log(validateEmail("sudhavalli.parthasarathy@matrimony.com"))
// console.log(validateEmail("sudha@"))
// console.log(isPasswordStrong("123"))
// console.log(isPasswordStrong("XTR765@*q"))
