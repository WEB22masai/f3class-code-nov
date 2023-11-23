localStorage.setItem("vaibhav", 10);

let obj = {
  a: 10,
};

const stringobj = JSON.stringify(obj);

localStorage.setItem("obj",stringobj);

const d = localStorage.getItem('obj');
console.log(d);

localStorage.removeItem('obj');
localStorage.removeItem('vaibhav');
