// Class is syntactical sugar over const funcs

// class syntax ->
// we are wrapping over constructor fn with class

class BankAccount {
  constructor(name, bankName, balance) {
    this.name = name;
    this.bankName = bankName;
    this.balance = balance;
    // this.addMoney = function (amount) {
    //   this.balance += amount;
    // };
  }
  addMoney(amount) {
    this.balance += amount;
  }
}

// class will handle adding functions in prototype
// you don't have to add functions explicitly

const user1 = new BankAccount("Uday", "kotak", 100);
console.log(user1);

class SavingsAccount extends BankAccount {
  constructor(name, bankName, balance, cibil) {
    // this.name = name;
    // this.bankName = bankName;
    // this.balance = balance;
    // we need to call BankAccount const fn here
    super(name, bankName, balance);
    this.cibil = cibil;
  }
  //   addMoney(amount) {
  //     this.balance += amount;
  //   }
  //   educationLoan() {
  //     console.log("you loan has been granted");
  //   }
}

const user2 = new SavingsAccount("Md", "Pnb", 10000, 800);
console.log(user2);

user1.addMoney(1000);
user2.addMoney(500);

console.log(user1);
console.log(user2);

// super keyword calls constructor fn
// and execute this
// SavingsAccount.prototype.__proto__ = BankAccount.prototype;
