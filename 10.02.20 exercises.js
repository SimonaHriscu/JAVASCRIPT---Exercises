// # objects-ex
console.log("Exercise 1:")
// 1. Check if a number is within a given range. Write a program that checks if a number is within 
//the range of an object's min and max properties. Assume min <= max is always true.

// Examples:

// function isIncluded(num,obj){
//     if (num >= obj.min && num <= obj.max){
//         return true;
//     }else return false;
// }


///SIMPLE VERSION
function isIncluded(num,obj){
    return num >= obj.min && num <= obj.max
}

console.log(isIncluded(4, { min: 0, max: 5 }) );
console.log(isIncluded(4, { min: 4, max: 5 }));
console.log(isIncluded(4, { min: 6, max: 10 }) );
console.log(isIncluded(5, { min: 5, max: 5 }) );

// 4, { min: 0, max: 5 }) ➞ true
// 4, { min: 4, max: 5 }) ➞ true
// 4, { min: 6, max: 10 }) ➞ false
// 5, { min: 5, max: 5 }) ➞ true



console.log("Exercise 2:")
// 2. Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player 
//can earn from the tiles in their hand. 
//Example: [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, 
//{ tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ]

// The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28

function maxScore(arr){
    let array = [{ tile: "N", score: 1 }, 
    { tile: "K", score: 5 }, 
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 }, 
    { tile: "D", score: 2 }, 
    { tile: "A", score: 1 }, 
    { tile: "E", score: 1 }]
    //console.log(array);
    let sum = 0;
    for(let i=0; i<array.length; i++){
        sum += array[i].score;
    }return sum;
}

console.log(maxScore());

 console.log("Exercise 3:")
// 3. Is it an empty object? Write a program that returns true if an object is empty, and false if otherwise.

// Examples:

// {} ➞ true
// {a: 1} ➞ false


// Var 1
// function emptyOrNot(obj){
//     if(Object.keys(obj).length === 0){
//         return true;
//     }else return false;

// }
// console.log(emptyOrNot({ }));
// console.log(emptyOrNot({a: 1}));

function emptyOrNot(obj){
    return Object.keys(obj).length === 0;

}
console.log(emptyOrNot({ }));
console.log(emptyOrNot({a: 1}));

console.log("Exercise 4:")
// 4. Free Shipping. Create a function that determines whether an online order should get free shipping. 
//An order gets free shipping if the total cost of items exceeds €50.

// Examples:

// freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false
// freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true
// freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false

function freeShipping(obj){
   let value = Object.values(obj); //converting the values into an array;
    let sum = 0;
    for(let i=0; i<value.length; i++){
        sum += value[i];
    }return sum > 50;
}

console.log(freeShipping({ "Sponge": 3.50, "Soap": 5.99 })); 
console.log(freeShipping({ "Surround Sound Equipment": 499.99 })) ;
console.log(freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 })); 

console.log("Exercise 5:")
// 5. Programming Object.

// const programming = {
//   languages: ["JavaScript", "Python", "Ruby"],
//   isChallenging: true,
//   isRewarding: true,
//   difficulty: 8,
//   jokes:
//     "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
// };
// Write the command to add the language "Go" to the end of the languages array.

// Change the difficulty to the value of 7.

// Using the delete keyword, write the command to remove the jokes key from the programming object.(need Google)

// Write a command to add a new key called isFun and a value of true to the programming object.

// Using a loop, iterate through the languages array and console.log all of the languages.

// Using a loop, console.log all of the keys in the programming object.

// Using a loop, console.log all of the values in the programming object.

// Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging. Bonus: In a comment, explain what is printed if we console.log an object method without calling it and why.

// Bonus:

// Make sure that any other code cannot delete or change properties of the object.(need Google)


const programming = {
      languages: ["JavaScript", "Python", "Ruby"],
      isChallenging: true,
      isRewarding: true,
      difficulty: 8,
      jokes:
        "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
    };

    
    programming.languages.push( "Go" );
    //console.log(programming)
    programming.difficulty = 7;
   // console.log(programming);

    delete programming.jokes;
    //console.log(programming);

    programming.isFun = true;
    console.log(programming)

    let arr = programming.languages; //reference not cloning
     for(let i=0; i<arr.length; i++){
         console.log(arr[i]);
     }

     let programmingKeys = Object.keys(programming);
     console.log(programmingKeys);
     for(let i=0;i<programmingKeys.length; i++){
         console.log(programmingKeys[i]);
     }


     let programmingValues = Object.values(programming)
     console.log(programmingValues);
     for(let i=0; i<programmingValues.length; i++){   
         console.log(programmingValues[i]);
     }

     //VAR 2
    //  for(let key in programming){
    //     console.log(programming[key]);
    // }
 

     function isTrue(obj){
         if((programming.isChallenging) && (programming.isRewarding )){
             return `Learning the programming languages: \"${programming.languages}\" is rewarding and challenging. `;
         } else return "they are not";
     }
    
   console.log(isTrue());

   //BONUS
   Object.freeze(programming);