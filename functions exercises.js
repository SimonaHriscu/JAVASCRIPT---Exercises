

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
  

// c4n y0u r34d th15? Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) 
// version of the string. NB: for your program to work properly, the function should replace all ’a’s with 4, ’e’s with 3, 
// ’i’s with 1, ’o’s with 0, and ’s’s with 5.
// Examples:
// hackerSpeak(“javascript is cool”) ➞ “j4v45cr1pt 15 c00l”
// hackerSpeak(“programming is fun”) ➞ “pr0gr4mm1ng 15 fun”
// hackerSpeak(“become a coder”) ➞ “b3c0m3 4 c0d3r”

const hacking = (str)=>{
  let hackedArr = [];
  let toSmall = str.toLowerCase();
  let letters = toSmall.split('');
  for(let i =0; i< letters.length; i++){
    if(letters[i] =="a"){
      letters[i] = 4;
      hackedArr.push(letters[i]);
    }else if(letters[i]=="e"){
      letters[i] = 3;
      hackedArr.push(letters[i]);
    }else if(letters[i] =="i"){
        letters[i] = 1;
        hackedArr.push(letters[i]);
      }else if(letters[i] =="o"){
          letters[i] = 0;
          hackedArr.push(letters[i]);
        }else if (letters[i] =="s"){
            letters[i] = 5;
            hackedArr.push(letters[i]);
          }else{
            hackedArr.push(letters[i]);
          }
  }
  
  let result = hackedArr.join("");
  return result;
};
let codeStr = "Hi I am a nice man";
console.log(hacking(codeStr));

// Is it Symmetrical? Create a function that takes a number as an argument and returns true or false depending on 
// whether the number is symmetrical or not.
// NB(Nota Bene: used to mark something as particularly important): A number is symmetrical when it is the same as 
// its reverse.
// Examples:
// isSymmetrical(7227) ➞ true
// isSymmetrical(12567) ➞ false
// isSymmetrical(44444444) ➞ true
// isSymmetrical(9939) ➞ false
// isSymmetrical(1112111) ➞ true


function isSymmetrical (num){
  let numToStr = num.toString();
  let result = numToStr.split("")
  .reverse()
  .join('');
  if(numToStr=== result){
    return true;
  }else{
  return false;
  }
  
}
console.log(isSymmetrical(33233));
console.log(isSymmetrical(12567));
console.log(isSymmetrical(1112111));

// snake_case ➞ camelCase Create a function toCamelCase() that takes a single string in snake_case 
// and converts it into camelCase.
// Examples:
// toCamelCase(“hello_world”) ➞ “helloWorld”
// toCamelCase(“javascript_is_fun”) ➞ “javaScriptIsFun”

const toCamelCase = str =>{
  let splitStr = str.split("_");
  let camelArray = [];
  for( let i = 0; i < splitStr.length; i++ ){
    let firstChr, restStr;
    if(splitStr[i] == splitStr[0]){
      camelArray.push(splitStr[0]);
      continue;                           //continue is important
    }else{
      firstChr = splitStr[i].slice(0,1);
      restStr = splitStr[i].slice(1,splitStr[i].length);
    }
    let newWord = firstChr.toUpperCase() + restStr;
    camelArray.push(newWord);

  }

  let result = camelArray.join("");
  return result;

}
console.log(toCamelCase("snake_long_hi"))

// Pig Latin Translation. Create a function that takes a string of words and moves the first letter of each word 
// to the end of it, then adds ‘ay’ to the end of the word. This is a basic form of “Pig Latin”.
// Move the first letter of each word to the end of the word.
// Add “ay” to the end of the word.
// Words starting with a vowel (A, E, I, O, U) append “way” to the end instead.

// Extra Practice
// Preserve proper capitalization as in the examples below.
// Examples:
// pigLatin(“Cats are great pets.“) ➞ “Atscay areway reatgay etspay.”
// pigLatin(“Tom got a small piece of pie.“) ➞ “Omtay otgay away allsmay iecepay ofway iepay.”
// pigLatin(“He told us a very exciting tale.“) ➞ “Ehay oldtay usway away eryvay excitingway aletay.”