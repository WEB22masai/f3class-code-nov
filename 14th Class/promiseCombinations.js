function promiseCreate(name, condition, delay) {
  return new Promise((res, rej) => {
    if (condition) {
      setTimeout(() => {
        res(`${name} is resolved`);
      }, delay);
    } else {
      setTimeout(() => {
        rej(`${name} is rejected`);
      }, delay);
    }
  });
}

const p1 = promiseCreate("p1", false, 500);
const p2 = promiseCreate("p2", false, 3000);
const p3 = promiseCreate("p3", false, 1000);

// // // // // // // // // // // // // // //
// promise.all is AND of promise combinations
// if all promises are passing, it will
// give me array of results

// promise.all is seeking for the
// first failing promise

// Promise.all([p1, p2, p3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function test() {
//   try {
//     const data = await Promise.all([p1, p2, p3]);
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// test();

// // // // // // // // // // // // // //
//
// promise.any is OR of promise
// Promise.any([p1, p2, p3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//   AggregateError: All promises were rejected
// when all are rejected

// promise.race -> it seeks for first
// settled promise

// promise.race seeks for first
// settled promise
// Promise.race([p1, p2, p3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

Promise.allSettled([p1, p2, p3])
  .then((data) => {
    console.log(data);
  })

//   this gives us array of objects
// and objects are settled promises
// with status -> rejected/fullfilled
// and value

