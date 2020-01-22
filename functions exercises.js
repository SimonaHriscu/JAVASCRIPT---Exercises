

//EXERCISES
// 1. Amplify the Multiples of 4. Create a function that takes an integer and returns an array of integers ascending 
// from 1 to the given number, where:
// For each number in the array that can be evenly divided by 4, that number is amplified by 10 
// (i.e. return 10 times the number).
// If the number cannot be divided evenly by 4, simply return the number.
// The given integer will always be equal to or greater than 1.
// Include the given number (the number in the parameters).
// Examples:
//  = amplify(4) ➞ [1, 2, 3, 40]
//  = amplify(3) ➞ [1, 2, 3]
//  = amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]


function multiplesOf(numbers, number) { // add second argument
    var multiples = []; // change to array (so that we can store multiple numbers - not just one multiple)
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] % number === 0) { // divide by the number
        multiples.push(numbers[i]*10); // add the current multiple found to the multiples array
      }else {
        multiples.push(numbers[i]);
      }
    }
  
    return multiples;
  }
  
  console.log(multiplesOf([1, 2, 3, 4, 5, 6], 4)); 



 //   const nameFunct = (num) =>{
    function nameFunct(num){
        if(typeof num === "number"){
            if(num > 0){
              const myArray = [];
              for (let i =1; i<=num; i++){
                  if (i%4 ===0){
                      myArray.push(i*10);
                      }else{
                          myArray.push(i);
                      }
                 
              }
              console.log(myArray);
  
            }
        }
    }
  
    nameFunct(4) //Argument
    nameFunct(3);
    nameFunct(25);
    
  
  
  // 2. One is not like the others... Create a function that takes an array of numbers and return the number that’s unique.
  // Examples:
  // unique([3, 3, 3, 7, 3, 3]) ➞ 7
  // unique([0, 0, 0.77, 0, 0]) ➞ 0.77
  // unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0
  
  
  const array = [3, 3, 3, 7, 3, 3];
  const unique = array.filter(
    value => array.indexOf(value) === array.lastIndexOf(value)
  );
  console.log(unique);
  
  
  
  // console.log(++p);// the exact understanding like while loops 
  // console.log(p++);
  
  