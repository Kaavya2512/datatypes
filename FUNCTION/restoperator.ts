function displayFullName(firstname: string, ...otherNames: string[]) {
  //0 or more values

  console.log(firstname + otherNames.join(" "));
}
displayFullName("sudha", "valli", "chennai");
displayFullName("sudha", "valli");
displayFullName("sudha");
displayFullName("sudha", "valli", "sarathy", "chennai");

function calculateTotalPrice(...charges: number[]) {
  //logic
  //return total amount to be paid
}
calculateTotalPrice(20, 30, 40);
calculateTotalPrice(30, 90, 80, 90);
//how much total amount to be paid

interface Product {
  productName: string;
  productPrice: number;
}
let pd1: Product = { productName: "Kettle", productPrice: 5000 };
let pd2: Product = { productName: "Window screen", productPrice: 300 };
let pd3: Product = { productName: "Biscuits", productPrice: 100 };
function addProductPrice(...pdt: Product[]) {
  let totalPrice = 0;
  pdt.map((p) => (totalPrice += p.productPrice));
  return totalPrice
}
console.log(addProductPrice(pd1, pd2));
