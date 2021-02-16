function bouncer(arr) {
 arr = arr.filter(Boolean);
  for (let j =0; j < arr.length; j++) {
      if (arr[j] === false) {
        arr.splice(j, 1);
      }
    }
  return arr;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([null, NaN, 1, 2, undefined]));