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
var FoodService = /** @class */ (function () {
    function FoodService() {
    }
    FoodService.prototype.closureMessage = function (msg) {
        console.log(msg);
    };
    return FoodService;
}());
var Swiggy = /** @class */ (function (_super) {
    __extends(Swiggy, _super);
    function Swiggy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Swiggy.prototype.searchRestaurant = function (food) {
        console.log("searching the restaurant for the given food:", food);
    };
    Swiggy.prototype.pay = function (amount) {
        console.log("you have successfully paid");
    };
    Swiggy.prototype.placeOrder = function (food, qty) {
        console.log("order has been placed");
    };
    return Swiggy;
}(FoodService));
var Zomato = /** @class */ (function (_super) {
    __extends(Zomato, _super);
    function Zomato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Zomato.prototype.searchRestaurant = function (food) {
        console.log("zomato");
    };
    Zomato.prototype.pay = function (amount) {
        console.log("zomato");
    };
    Zomato.prototype.placeOrder = function (food, qty) {
        console.log("zomato");
    };
    return Zomato;
}(FoodService));
var userOrder = new Zomato();
userOrder.searchRestaurant("Pizza");
userOrder.placeOrder("Pizza", 2);
userOrder.pay(2000);
