//filter numbers out of a mixed array

function filterArray(arr) {
  const totalNum = [];
  const totalStr = [];
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
        totalNum.push(arr[i]);
        
    } else {
      totalStr.push(arr[i]);
      
    }
  } return totalNum;
}

console.log(filterArray([1, 2, "a", "b"]));

console.log(filterArray([1, "a", "b", 0, 15]));

console.log(filterArray([1, 2, "aasf", "1", "123", 123]));



//Write a function that takes the last number of a consecutive list of numbers and returns the total of all numbers up to 
//and including it.

function addUpTo(n) {
    let sum = 
	
}

addUpTo(3);
addUpTo(10);