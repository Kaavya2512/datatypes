var OrderQueue = /** @class */ (function () {
    function OrderQueue() {
        this.orders = [];
    }
    OrderQueue.prototype.placeOrder = function (order) {
        this.orders.push(order);
        console.log("Order is placed");
    };
    OrderQueue.prototype.processOrder = function () {
        if (this.orders.length > 0) {
            console.log("Order proceed", this.orders.shift());
        }
        else {
            console.log("All order are proceessed. no more order available");
        }
    };
    return OrderQueue;
}());
var order1 = new OrderQueue();
order1.placeOrder("pizza");
order1.placeOrder("burger");
order1.processOrder();
order1.processOrder();
order1.processOrder();
