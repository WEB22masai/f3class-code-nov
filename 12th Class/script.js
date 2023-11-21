// instance Promise class and it
// takes a callback

// resolve -> fulfilled
// reject -> rejected

// we need to see this error
// Uncaught (in promise) this promise failed

// I will print a code

// I will execute a sync code -> callstack block

const p1 = new Promise((resolve, reject) => {
  // in real world this condition
  // will be coming from outside
  // world
  const condtion = true;
  if (condtion) {
    // resolve is async in nature
    setTimeout(() => {
      resolve("this promise is now resolved");
    }, 10);
  } else {
    reject("this promise failed");
  }
});

// then and catch are methods of promise
// they can take a callback which have
// access to resolved result and rejected result

setTimeout(() => {
  console.log("this is set timeout");
}, 0);

p1.then((data) => console.log(data)).catch((err) => console.log(err));

// this is thread blocking code
for (let i = 0; i < 10000; i++) {
  console.log("this is sync code");
}

// ans
// this is sync code * 10000
//
