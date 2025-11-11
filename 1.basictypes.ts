let accountNumber: number = 8900876;
console.log(accountNumber);

let accountHolderName: string = "kaavya";
//typescript superset of js
//js is the subset of ts
//whatever you write using js it is acceptable in ts also   //not vice-versa
let isAccountActive: boolean = true;
//let transactionID: bigint = 9876543210123456789n;
let balance = 20000;
function makeTransaction(amount: number): number | string {
  if (balance < amount) {
    return "Insufficient balance";
  } else balance = balance - amount;
  return balance;
}


console.log(makeTransaction(21000))