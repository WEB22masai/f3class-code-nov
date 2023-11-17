// // method 2

// function createCustomer(name, bankName, balance) {
//   let user = {}; // this user is instance of Object
//   user.name = name;
//   user.bankName = bankName;
//   user.balance = balance;
//   user.addMoney = function (amount) {
//     this.balance += amount;
//   };
//   return user;
// }

// const user1 = createCustomer("anuj", "bob", 10000);
// console.log(user1);
// what are we trying to achieve that this user should be
// instance of createCustomer

// method 3
function CreateCustomer(name, bankName, balance) {
  // let user={} , we don't need to do this? -> new keyword will handle this
  // now this will be having ref to the new memory
  this.name = name;
  this.bankName = bankName;
  this.balance = balance;
  this.addMoney = function (amount) {
    this.addMoney += amount;
  };
}
CreateCustomer.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

const user1 = new CreateCustomer("naveen", "axis", 5000);
const user2 = new CreateCustomer("Riyaz", "ICICI", 1000);

console.log(user1);

user1.withdraw(100);
console.log(user1);
