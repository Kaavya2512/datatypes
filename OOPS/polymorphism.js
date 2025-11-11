// Step 2: Implement different payment types
var CreditCard = /** @class */ (function () {
    function CreditCard() {
    }
    CreditCard.prototype.pay = function (amount) {
        console.log("Paid \u20B9".concat(amount, " using Credit Card (via bank gateway)."));
    };
    return CreditCard;
}());
var Cash = /** @class */ (function () {
    function Cash() {
    }
    Cash.prototype.pay = function (amount) {
        console.log("Paid \u20B9".concat(amount, " using Cash. Change returned if any."));
    };
    return Cash;
}());
var UPI = /** @class */ (function () {
    function UPI() {
    }
    UPI.prototype.pay = function (amount) {
        console.log("Paid \u20B9".concat(amount, " using UPI (PhonePe/GPay)."));
    };
    return UPI;
}());
var GiftCard = /** @class */ (function () {
    function GiftCard() {
    }
    GiftCard.prototype.pay = function (amount) {
        console.log("Paid \u20B9".concat(amount, " using Gift Card. Balance updated."));
    };
    return GiftCard;
}());
// Step 3: Customer uses any payment method
function checkout(payment, amount) {
    payment.pay(amount); // Polymorphic call
}
// Step 4: Try different payment methods
checkout(new CreditCard(), 500);
checkout(new Cash(), 300);
checkout(new UPI(), 200);
checkout(new GiftCard(), 150);
