// https://dummyjson.com/

//   GET PRODUCTS
// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// GET PRODUCT

// fetch("https://dummyjson.com/products/1")
//   .then((res) => res.json())
//   .then(console.log);

// query params
// fetch('https://dummyjson.com/products/search?q=phone')
// .then(res => res.json())
// .then(console.log);

// swagger -> curl / fetch

// // POST API
// fetch('https://dummyjson.com/products/add', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     title: 'BMW Pencil',
//     /* other product data */
//   })
// })
// .then(res => res.json())
// .then(console.log);

// fetch("https://dummyjson.com/products/1", {
//   method: "DELETE",
// })
//   .then((res) => res.json())
//   .then(console.log);


//   /* updating title of product with id 1 */
// fetch('https://dummyjson.com/products/1', {
//     method: 'PUT', /* or PATCH */
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       title: 'Samsung Galaxy S23',
//       description: "galaxy smartphone",
//       brand: "samsung",
//     })
//   })
//   .then(res => res.json())
//   .then(console.log);
              

//   GET -> DEFAULT METHOD FETCH
// POST -> TO SEND SOME INFORMATION TO BACKEND
// DELETE -> TO DELETE SOME INFORMATION
// PUT -> EDIT



