type paymentMethod = "card" | "cash" | "upi";

type PaymentMode<T extends paymentMethod>=

T extends "card"? {cardno:number, cvv:number}:
T extends "upi"?{upiid:string}:{cashnumber:number}

const creditCardPayment: PaymentMode<"card"> = { cardno: 1234, cvv: 888 };
const upiPayment:PaymentMode<"upi"> ={upiid:"sudh@dbsbank.com"}
console.log(upiPayment)
