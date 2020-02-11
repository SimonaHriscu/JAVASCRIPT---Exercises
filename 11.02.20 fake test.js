// # first-fake-test
console.log("Exercise 1:");
//  * Return Keys and Values. Write a program that takes an object and returns an array which contains two arrays:
//  one for the keys of the object and the other for the values of the object.

let car = {
  name: "BMW",
  color: "red",
  style: "convertible",
  year: 2014
};

function isCar(obj) {
  let array = [];
  array.push(Object.keys(obj));
  array.push(Object.values(obj));
  return array;
}
console.log(isCar(car));


console.log("Exercise 2:");
// * Where's Waldo? Create a function that takes a string and returns true if Waldo is found, and false if he's not.

function isWaldoHere(str) {
  return str.includes("Waldo") || str.includes("waldo");
}

console.log(isWaldoHere("is there wal here ?"));
console.log(isWaldoHere("I found you Waldo!"));
console.log(isWaldoHere("is wally here?"));
console.log(isWaldoHere("waldo is here"));

//Examples:

// isWaldoHere("is there wal here ?") ➞ false
// isWaldoHere("I found you Waldo!") ➞ true
// isWaldoHere("is wally here?") ➞ false
// isWaldoHere("waldo is here") ➞ true

console.log("Exercise 3:");
// * isPrime? Create a function that returns true if a number is prime and false if it's not. NB: a prime number is any
// positive integer greater than 1, which is only evenly divisible by two divisors: itself and 1.
// The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.

// function isPrime(num) {
//   for (let i = 1; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

const isPrime = (num) => {
    for(let i = 2; i<num; i++){
        if (num % i === 0){
            return false;
        }
    }
    return num > 1;
}

console.log(isPrime(7));
console.log(isPrime(0));
console.log(isPrime(9));
console.log(isPrime(10));

// Examples:

// isPrime(7) ➞ true
// isPrime(9) ➞ false
// isPrime(10) ➞ false

console.log("Exercise 4:");

// const longestWord = (string)=>{
//     let strSplit = string.split(" "); //we split
//     for(let i=0; i<strSplit.length; i++){ //we loop through the words length
//         //console.log(strSplit[i].length) 
//          if(strSplit[i].length > strSplit.length ){ //if the split length is longer than the length of the string
//             return strSplit[i];
//         }
//     }
// }

// console.log(longestWord("this is a web development course"));


const longestWord = (string)=>{
  let strSplit = string.split(" "); //we split
  console.log(strSplit);
  let biggestWord = strSplit[0]; // we consider the first element as being the biggest
  for(let i=0; i<strSplit.length; i++){ //we loop through the words length
      if(strSplit[i].length > biggestWord.length){//if the first word is the longest it stays, if we find another long one then the variable takes its value
        biggestWord = strSplit[i];
      }
  }return biggestWord;
}

console.log(longestWord("this is a web development course"));
// * For the longest word. Create a function to find the longest word in a given string.

// i.e. longestWord("this is a web development course") ➞ "development"
