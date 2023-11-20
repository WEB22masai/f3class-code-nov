class BankAccount {
  #accountBalance; // it follows the same creation as of object (so no let and const)
  constructor(name, bankName, accountBalance) {
    this.name = name;
    this.bankName = bankName;
    this.#accountBalance = accountBalance;
  }
  getBalance() {
    // if pin is correct then
    // return balance
    return this.#accountBalance;
  }
  setBalance(amount) {
    // secure logic
    this.#accountBalance += amount;
    return this.#accountBalance;
  }
  get balance() {
    // this won't accept
    // any argument
    return this.#accountBalance;
  }
  set balance(amount) {
    this.#accountBalance += amount;
    return this.#accountBalance;
  }
}

const user1 = new BankAccount("Deva", "IOB", 4000);
console.log(user1.getBalance());
user1.setBalance(10000);
user1.balance = 5000;
console.log(user1);
