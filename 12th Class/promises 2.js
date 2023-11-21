// the moment you write promise
// the code inside promise starts
// exectuting
// code outside resolve and reject &&
// inside promise are sync in nature

const p2 = new Promise((res, rej) => {
  console.log("Hi I am inside promise");
  const condtion = true;
  if (condtion) {
    setTimeout(() => {
      res("resolved");
    }, 1000);
  } else rej("rejected");
});

for(let i=0;i<100000;i++){
    console.log('some sync code');
}

p2.then((data) => console.log(data)).catch((err) => console.log(err));
