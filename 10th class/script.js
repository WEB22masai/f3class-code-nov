const arr = [1, 2, 3, 4, [5, 6, [7, 8]]];

function myFlat(array, depth = 1) {
  const result = [];
  array.forEach((element) => {
    // inside this if condition
    // there'll be recursive call
    if (Array.isArray(element) && depth > 0) {
      const miniAns = myFlat(element, depth - 1);
      result.push(...miniAns);
    } else {
      result.push(element);
    }
  });
  return result;
}

console.log(myFlat(arr, Infinity));
