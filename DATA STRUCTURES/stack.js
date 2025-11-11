//For you to explore
var ActionStack = /** @class */ (function () {
    function ActionStack() {
        this.actions = [];
    }
    ActionStack.prototype.performAction = function (action) {
        this.actions.push(action);
        console.log("Performed: ".concat(action));
    };
    ActionStack.prototype.undoAction = function () {
        if (this.actions.length > 0) {
            console.log("Undoing: ".concat(this.actions.pop()));
        }
        else {
            console.log("No actions to undo.");
        }
    };
    return ActionStack;
}());
// Usage
var actionStack = new ActionStack();
actionStack.performAction("Added Laptop to Cart");
actionStack.performAction("Added Phone to Cart");
actionStack.undoAction(); // Undoing: Added Phone to Cart
