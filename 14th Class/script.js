// function promiseCreate(name, condition) {
//   return new Promise((res, rej) => {
//     if (condition) res(`${name} is resolved`);
//     else rej(`${name} is rejected`);
//   });
// }

// const p1 = promiseCreate("p1", true);
// const p2 = promiseCreate("p2", false);

// What ever it get
// it wraps promise with the
// error result

// async function test() {
//   try {
//     const d1 = await p1;
//     console.log(d1);
//     const d2 = await p2;
//     console.log(d2);
//   } catch (err) {
//     console.log(err);
//   }
// }

// test();

async function test() {
  try {
    const responseObj = await fetch("https://dummyjson.com/products"); // async code
    const dataPromise = responseObj.json(); // this is sync code
    const data = await dataPromise;
    console.log(data);
    // const d1 = await 10;
    // console.log(d1);
  } catch (err) {
    console.log(err);
  }
}

test();

// for(let i=0;i<10000;i++){
//     console.log('sync code');
// }