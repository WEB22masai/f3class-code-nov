const p1 = new Promise((res, rej) => {
  const cond = true;
  if (cond) {
    setTimeout(()=>{
        res("promise 1 resolved");
    },1000);
  } else {
    rej("failed");
  }
});



async function test() {
  console.log("before promise");
  //   if you want to execute any
  // async code inside async fn
  // then you have to `await`
  const responseObj = await fetch('https://dummyjson.com/products');
  console.log('after promise 1');
  const dataPromise = responseObj.json();
  const data = await dataPromise;
  console.log('after promise 2');
  console.log('before data');
  console.log(data);
  console.log('after data');
}

test();

// for(let i=0;i<10000;i++){
//     console.log('some sync code');
// }

