var Wallet = /** @class */ (function () {
    function Wallet(initialBalance) {
        this.balance = initialBalance;
    }
    Wallet.prototype.addMoneyToWallet = function (amount) {
        if (amount > 0)
            return this.balance += amount;
    };
    return Wallet;
}());
var userobj = new Wallet(2000);
console.log("new wallet balance", userobj.addMoneyToWallet(1000));
