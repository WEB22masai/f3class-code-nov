// // sync

// console.log("start");
// console.log("mid");
// console.log("end");

// async
// console.log("start");
// setTimeout(() => {
//   console.log("mid");
// }, 0);
// console.log("end");

// function intro(name) {
//   // async
//   // return `Hi I am ${name}`
//   setTimeout(() => {
//     return `Hi I am ${name}`;
//   }, 1000);

//   //   sync
//   // return undefined
// }

// const data = intro("Deva");
// console.log(data);

// callback helps us to get data from async code

function intro(name, callback) {
  // async
  // return `Hi I am ${name}`
  setTimeout(() => {
    //   return `Hi I am ${name}`;
    // if i pass the above statement
    // to a function setTimeout will call the
    // fn
    callback(`Hi I am ${name}`);
  }, 1000);

  //   sync
  // return undefined
}

function whereDoIWork(company, callback) {
  setTimeout(() => {
    callback(`Hi I work at ${company}`);
  }, 500);
}

function whatIsMyRole(role, callback) {
  setTimeout(() => {
    callback(`Hi my role is ${role}`);
  }, 300);
}

function whatIsMyLoc(city, callback) {
  setTimeout(() => {
    callback(`Hi I live in ${city}`);
  }, 100);
}

intro("Deva", (data) => {
  console.log(data);
  whereDoIWork("walmart", (data) => {
    console.log(data);
    whatIsMyRole("SDE 2", (data) => {
      console.log(data);
      whatIsMyLoc("Bengaluru", (data) => {
        console.log(data);
        whatIsMyLoc("Bengaluru", (data) => {
          console.log(data);
          whatIsMyLoc("Bengaluru", (data) => {
            console.log(data);
            whatIsMyLoc("Bengaluru", (data) => {
              console.log(data);
            });
          });
        });
      });
    });
  });
});
