const p1 = new Promise((res, rej) => {
  const cond = true;
  if (cond) {
    setTimeout(() => {
      res("promise 1 resolved");
    }, 1000);
  } else {
    rej("failed");
  }
});

async function test() {
  console.log("some sync code inside async fn");
  const d1 = await p1;
  console.log(d1);
}

test();

for (let i = 0; i < 10; i++) {
  console.log("some sync code");
}
