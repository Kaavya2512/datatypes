//For you to explore
// Create a Map to store product stock (Product Name -> Stock Quantity)
var productStock = new Map();
// Adding products with initial stock
productStock.set("Laptop", 10);
productStock.set("Phone", 20);
productStock.set("Tablet", 5);
// Checking stock for a product
console.log("Stock for Phone: ".concat(productStock.get("Phone")));
// Output: Stock for Phone: 20
// Updating stock after a purchase
function purchaseProduct(product, quantity) {
    if (productStock.has(product)) { //check if that key is present in the object
        var currentStock = productStock.get(product); //get the value for the particular key
        if (currentStock >= quantity) {
            productStock.set(product, currentStock - quantity);
            console.log("\u2705 Purchased ".concat(quantity, " ").concat(product, "(s). Remaining stock: ").concat(productStock.get(product)));
        }
        else {
            console.log("\u274C Not enough stock for ".concat(product, ". Only ").concat(currentStock, " left."));
        }
    }
    else {
        console.log("\u274C Product ".concat(product, " not found."));
    }
}
// Buying 2 Phones
purchaseProduct("Phone", 2);
// Output: ✅ Purchased 2 Phone(s). Remaining stock: 18
// Trying to buy 6 Tablets (Stock is only 5)
purchaseProduct("Tablet", 6);
// Output: ❌ Not enough stock for Tablet. Only 5 left.
// Removing a product when out of stock
if (productStock.get("Tablet") === 0) {
    productStock.delete("Tablet");
}
