
// // fetch is a method and it takes URL that returns us promise
// // that promise has a result as response obj;
// // response object to data promise

// // this response object has a inbuilt method
// // .json which converts response object to data promise

// const url = "https://dummy.restapiexample.com/public/api/v1";

// // .json and JSON these are different

// fetch(url).then((responseObj) => {
//   // you can do responseObj.json() only once
//   const dataPromise = responseObj.json();
//   dataPromise.then((data) => console.log(data.products));
// });