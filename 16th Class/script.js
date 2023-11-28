const grandParent = document.getElementById("grandParent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// 1st -> type of event
// 2nd -> the function which should trigger when this
// event happens
// 3rd -> true/ false -> by default false

// true -> it will follow trickling down
// false -> it will follow bubbling up

grandParent.addEventListener("click", (event) => {
    // event.preventDefault();
    console.log("grand parent clicked");
},true);

parent.addEventListener("click", (event) => {
    event.stopPropagation();
  console.log("parent clicked");
},true);

child.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("child clicked");
},true);

// g
// 

// ideally don't pass the 3rd argument
// and use stop propagation everywhere

