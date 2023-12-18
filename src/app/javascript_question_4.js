
function findMissingNumber(arr, n) {
    let hashSet = new Set();
   
    for (let i = 0; i < n - 1; i++) {
      hashSet.add(arr[i]);
    }
   
    for (let i = 1; i <= n; i++) {
      if (!hashSet.has(i)) {
        return i;
      }
    }
   
    return n + 1;
  }
   
  let arr = [1, 2, 4, 6, 3, 7, 8];
  let n = arr.length;
   
  let missingNumber = findMissingNumber(arr, n);
  console.log("Missing number is: " + missingNumber);