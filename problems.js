function oddIndices(arr) {
  // Return an array containing all the odd indices in the array
  // Your code here
  let newArr = [];
  for (var i = 1; i < arr.length; i += 2) {
    newArr.push(arr[i]);
  }
  return newArr;
}

function oddReverse(arr) {
  // Return an array containing all the odd indices starting from the end
  // Your code here
  let newArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (i % 2 !== 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

oddReverse([1, 2, 3]);

function secondPower(arr) {
  // Return an array containing all indices that are powers of 2
  // Your code here
  let newArr = [];
  for (var i = 1; i < arr.length; i *= 2) {
    newArr.push(arr[i]);
  }
  return newArr;
}

function nthPower(arr, n) {
  // Return an array containing all indices that are powers of n
  // Your code here
  let newArr = [];
  for (var i = 1; i < arr.length; i *= n) {
    newArr.push(arr[i]);
  }
  return newArr;
}

function firstHalf(arr) {
  // Return an array containing the first half of an array
  // Include middle index on odd length arr
  // Your code here
  let newArr = [];
  for (var i = 0; i < arr.length / 2; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

function secondHalf(arr) {
  // Return an array containing the second half of an array
  // Exclude middle index on odd length arr
  // Your code here
  let newArr = [];
  for (var i = arr.length - 1; i >= arr.length / 2; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

module.exports = {
  oddIndices,
  oddReverse,
  secondPower,
  nthPower,
  firstHalf,
  secondHalf,
};
