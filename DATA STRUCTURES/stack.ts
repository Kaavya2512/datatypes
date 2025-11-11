//For you to explore
class ActionStack {
  private actions: string[] = [];

  performAction(action: string): void {
    this.actions.push(action);
    console.log(`Performed: ${action}`);
  }

  undoAction(): void {
    if (this.actions.length > 0) {
      console.log(`Undoing: ${this.actions.pop()}`);
    } else {
      console.log("No actions to undo.");
    }
  }
}

// Usage
const actionStack = new ActionStack();
actionStack.performAction("Added Laptop to Cart");
actionStack.performAction("Added Phone to Cart");
actionStack.undoAction(); // Undoing: Added Phone to Cart
