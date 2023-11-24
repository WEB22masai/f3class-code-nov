function searchFn(event) {
  console.log(event.target.value);
}

// 1. we convert searchFn to optimised searchFn using debouncing concepts
// 2. we write a generic method that takes any function and gives us optimised version of that

const debounceFn = (normalFn, delay) => {
  let timerId;
  //   debounceFn should return us a function
  // that internally calls normalFn
  return function (...args) {
    // this is rest operator
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      normalFn(...args);
    }, delay);
  };
};

const searchFn2 = debounceFn(searchFn,200);

