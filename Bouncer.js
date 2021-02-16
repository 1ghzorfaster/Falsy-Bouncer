function bouncer(arr) {
 arr = arr.filter(Boolean);
  for (let j =0; j < arr.length; j++) {
      if (arr[j] === false) {
        arr.splice(j, 1);
      }
    }
  return arr;
}
