// G 


function getHighestIndex(arr) {
  let max = arr[0];
  let index = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      index = i;
    }
  }

  return index;
}

// Misol:
console.log(getHighestIndex([5, 21, 12, 21, 8])); // 1
