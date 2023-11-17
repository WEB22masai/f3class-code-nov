// // method 1 of creating objects
// let user1 = {
//   name: "Suneel",
//   bankName: "AXIS",
//   balance: 10000,
//   addMoney(amount) {
//     this.balance += amount;
//   },
// };

// console.log(user1);

// method 2 of creating object
function createCustomer(name, bankName, balance) {
  let user = {};
  user.name = name;
  user.bankName = bankName;
  user.balance = balance;
  user.addMoney = function (amount) {
    this.balance += amount;
  };
  return user;
}

let user2 = createCustomer("anuj", "icici", 5000);
console.log(user2);

let user3 = createCustomer("akash", "PNB", 50000);
console.log(user3);

