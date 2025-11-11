var accountNumber = 8900876;
console.log(accountNumber);
var accountHolderName = "kaavya";
//typescript superset of js
//js is the subset of ts
//whatever you write using js it is acceptable in ts also   //not vice-versa
var isAccountActive = true;
//let transactionID: bigint = 9876543210123456789n;
var balance = 20000;
function makeTransaction(amount) {
    if (balance < amount) {
        return "Insufficient balance";
    }
    else
        balance = balance - amount;
    return balance;
}
console.log(makeTransaction(21000));
