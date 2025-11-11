//For you to explore
// Create a Map to store product stock (Product Name -> Stock Quantity)
class Product{
    productname:string=""
    qty:number=0
    constructor(pname:string,qty:number){
        this.productname = pname
        this.qty = qty
    }

}
let p1 = new Product("iphone",10)
let p2 = new Product("headset", 20);
let productStock = new Map<string, Product>();

// Adding products with initial stock
productStock.set("p001",p1);
productStock.set("p002", p2);


// Checking stock for a product
console.log(`Stock for Phone: ${productStock.get("Phone")}`);
// Output: Stock for Phone: 20

// Updating stock after a purchase
function purchaseProduct(product:Product): void {
  if (productStock.has(product.productname)) {
    //check if that key is present in the object
    let currentStock = productStock.get(product.productname)!; //get the value for the particular key
    if (currentStock >= product.qty) {
      productStock.set(product.productname, currentStock - product.qty);
      console.log(
        `✅ Purchased ${
          product.qty
        } ${product}(s). Remaining stock: ${productStock.get(product)}`
      );
    } else {
      console.log(
        `❌ Not enough stock for ${product}. Only ${currentStock} left.`
      );
    }
  } else {
    console.log(`❌ Product ${product} not found.`);
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
