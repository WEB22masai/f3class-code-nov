function BankAccount(name, bankName, balance) {
  this.name = name;
  this.bankName = bankName;
  this.balance = balance;
}

BankAccount.prototype.addMoney = function (amount) {
  this.balance += amount;
};

// function SavingsAccount(name, bankName, balance, cibil) {
//   this.name = name;
//   this.bankName = bankName;
//   this.balance = balance;
//   this.cibil = cibil;
// }

function SavingsAccountModified(name, bankName, balance, cibil) {
  this.cibil = cibil;
  //   any this keyword points to new memory created (user3)
  //   I need to call BankAccount with the ref of user3 (this);
  BankAccount.call(this, name, bankName, balance);
}

// earlier this `SavingsAccountModified.prototype` was inherting
// from Object.prototype but after this line
// it will inherit from BankAccount.prototype
SavingsAccountModified.prototype.__proto__ = BankAccount.prototype;

const user1 = new BankAccount("suyash", "janDhan", 100);
// const user2 = new SavingsAccount("naveen", "hdfc", 10000, 780);
const user3 = new SavingsAccountModified("vamshi", "axis", 5000, 750);

console.log(user1);
// console.log(user2);
console.log(user3);

user1.addMoney(500);
user3.addMoney(500);

console.log(user1);
// console.log(user2);
console.log(user3);
