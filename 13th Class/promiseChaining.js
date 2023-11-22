function intro(name) {
  return new Promise((resolve, reject) => {
    const condition = true;
    if (condition) {
      setTimeout(() => {
        resolve(`Hi I am ${name}`);
      }, 1000);
    } else {
      reject("No intro found");
    }
  });
}

function workPlace(company) {
  return new Promise((resolve, reject) => {
    const condition = true;
    if (condition) {
      setTimeout(() => {
        resolve(`Hi I work at ${company}`);
      }, 500);
    } else {
      reject(`No company found`);
    }
  });
}

function city(cityName) {
  return new Promise((resolve, reject) => {
    const condition = true;
    if (condition) {
      setTimeout(() => {
        resolve(`Hi I live in ${cityName}`);
      }, 100);
    } else {
      reject(`No city found`);
    }
  });
}
// promise hell
// intro("deva")
//   .then((data) => {
//     console.log(data);
//     workPlace("walmart")
//       .then((data) => {
//         console.log(data);
//         city("sitapur")
//           .then((data) => {
//             console.log(data);
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// then method returns a promise

intro("abhilash")
  .then((data) => {
    console.log(data);
    //   if we were not returning anything -> promise wrapped over undefined
    //   if we were returning data -> promise wrapped over data
    // if I am returning a promise -> we will get a promise
    return workPlace("walmart");
  })
  .then((data) => {
    console.log(data);
    return city("delhi");
  })
  .then((data) => {
    console.log(data);
  });
