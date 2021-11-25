function hasTargetSum(array, target) {
  //array.forEach(integer => {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i], array[`${i++}`])
    }
  //})
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
The function hasTargetSum() takes in two arguments: an array of integers and a target integer. If any 2 of the integers in the array can be added together to become the same number as the target integer then the return value should be true, otherwise it returns false. This means that I have to write a function that iterates through the array and adds every combination of two integers together and compares each outcome to the target integer.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
