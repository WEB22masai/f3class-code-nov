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
  const data = await p1;
  console.log(data);
  console.log('after promise');
}

test();

for(let i=0;i<10000;i++){
    console.log('some sync code');
}

