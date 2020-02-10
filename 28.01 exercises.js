// Create a function that looks inside a givin string if it has the word (JavaScript) if so print "I know it's crazy 😉".
function string(str){
    if(str.includes("JavaScript")){
        console.log("I know it's crazy")
    }else {
        console.log("False");
    }
}
string("JavaScript");

// Create a function that calculates the user age e.g. 2000 -> 20.
function age(number){
let currentYear = new Date().getFullYear();;
let result = currentYear-number;
console.log(result);
}

age(2000);
age(1991);

// Create a function that accepts a text from user and check if the user has entered a month name, if so print out 
//that month and in which season it is.


function isMonth(str) {
    // Convert string to lowercase
    str = str.toLowerCase().split(" ");
    // console.log(str);
    // Initialize array of months
    const months = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december"
    ];
    function season(value) {
      switch (value) {
        case "december":
        case "january":
        case "february":
          return "winter";
        case "march":
        case "april":
        case "may":
          return "spring";
        case "june":
        case "july":
        case "august":
          return "summer";
        case "september":
        case "october":
        case "november":
          return "fall";
      }
    }
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < months.length; j++) {
        if (str[i].includes(months[j])) {
          let composestring = `The month of ${str[i]} is in the ${season(
            str[i]
          )}!`;
          return composestring;
        }
      }
    }
  }
  console.log(isMonth("I'm born in june and I'm a summer girl.."));

// Create a function that takes a string and a word, and then returns true or false depending on whether the word 
// starts with the initial string.
// dictionary("bu", "button") ➞ true
// dictionary("tri", "triplet") ➞ true

function dictionary(str, word){
    if(word.includes(str)){
     console.log(`True , the str "${str}" 'is' in the word "${word}"`);
    }else{
        console.log(`False , the str "${str}" 'is not' in the word "${word}"`);
    }
}

dictionary("bu", "button");
dictionary("lu", "triplet");
dictionary("tri", "triplet");

// Complete the function below so that it returns "Two for me and one for you" when no arguments are passed

const twofer = (who ="you") => {
    
       return `Two for me and one for ${who}`;
  }

  console.log(twofer("Ali")); // -> "Two for me and one for Ali"
  console.log(twofer()); // -> "Two for me and one for you"
  
  
  // Complete the function below so that it still calculates the power of a number even if the `exp` argument is 
  // not passed to it. The default `exp` should be set to 2.
  // Example: Calling the function with 2 and 4 will return 16 (2 to the power of 4), If you call it with just 2, 
  // it should return 4 (2 to the power of 2).
  
  const exponent = (num, exp = 2) => {
    let result = 1;  
    for (let i = 0; i < exp; i++) {
      result *= num;
    }
  
    return result;
  };
  
  console.log(exponent(3, 3)); // -> 27
  console.log(exponent(3)); // -> 9
  
  // Create a function will calculate a student degrees for 6 subjects,
  //if the average was less than 70 will print (F)
  // Over 70 and less than 80 (C)
  // Over than 80 and less than 85 (B)
  // Over than 85 and less than 90 (A)
  // And over 90 print (A+)


  function degree(...num){
      let total =0;
      for(let i = 0; i < num.length; i++) {
          total += num[i];
        } let result = total / num.length;
        if(result === 70){
        console.log(`For ${result} points you get a F`);
      }else if(result > 70 && result<80){
        console.log(`For ${result} points you get a C`);
      }else if(result >= 80 && result<85){
        console.log(`For ${result} points you get a B`);
      }else if(result >= 85 && result<90){
        console.log(`For ${result} points you get an A`);
      }else if(result >= 90){
        console.log(`For ${result} points you get a A+`);
      }else{
          console.log("You failed");
      }
  }

  degree(71, 60, 53, 75, 98, 83);
  

  // Create a function that accepts the (user name, age, address and unlimited number of activities the user enjoy doing)
  // * print all the user input adding the greeting part and more text turning that input into a readable text.
  // * If one of his activities was dance ￼or party print "you are cool".

  function info(name, age, address, ...activities){
     let coolStr = "";
     for(i =0; i<activities.length; i++){
        //console.log(activities[i])
    if(activities[i] == "dance" || activities[i] == "party"){
        coolStr += "and you are cool";
    }
}
console.log(`His name is ${name} and he is aged ${age}. He recently moved to ${address} and his favorite past time 
is ${activities} . You are dong a great job! a lot of text here ${coolStr}!`);


}

      info("Ovidiu", 22, "Berlin", "programming", "sleeping", "watching movies");




//   Count Occurrences. Create a function that accepts two arguments: a string and a letter. The function should 
//   count the number of occurrences of that letter in the string.
//   i.e. countOccurrences(“this is a string”, “i”) ➞ 3


    
const countOccurrences = (string,letter)=>{
    let count = 0;
    for(i=0;i<string.length;i++){
        if(string[i] === letter){
            count+=1
        }
    }return count
}
console.log(countOccurrences("this is a string", "i"))

// Create a function which calculates how old a dog is in doggie years. The function should accept one argument that 
// is the puppy’s age in human years. Calculate the dog’s age in dog years based on the calculation of 
// 1 human year = 7 dog years.
// i.e. dogAge(4) ➞ “Your doggo is 28 years old in dog years!”

function dogAge(years){
    let dogYears = years *7;
    console.log(`Your doggo is ${dogYears} years old in dog years!`);
}
dogAge(6);

// A Lifetime Supply... Create a function to calculate how much you’ll actually be getting for a lifetime 
// supply of your favourite snack. The function should accept two arguments: age and amount per day. 
// The function should calculate the amount that will be consumed for the rest of your life given a constant max age. 
// Bonus Accept floating point values for amount per day and round the result.
// i.e.
// calcSupply(25, 2) ➞ “You will need 40,150 bars of chocolate (2 a day) to last you til the age of 80.”

function calcSupply(age, amountPerDay){
    let daysNow = 365 * age;
    let life = 80;
    let daysTotal = 365 * life;
    let daysLeft = daysTotal - daysNow;
    let result = daysLeft *amountPerDay;
    console.log(result);

}

calcSupply(25, 2);

// Pie. Create a function that determines whether or not it’s possible to split a pie fairly given these three parameters:
// Total number of slices.
// Number of recipients.
// How many slices each person gets.
// Examples:
// equalSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices
// equalSlices(8, 3, 2) ➞ true
// equalSlices(8, 3, 3) ➞ false
// equalSlices(24, 12, 2) ➞ true


function equalSlices(totalSlices, recipients, slicesPerPerson){
    let neededSlices = slicesPerPerson*recipients;
    if(neededSlices<=totalSlices){
        console.log(true);
    }else{
        console.log(false);
    }
}

equalSlices(11, 5, 3); //false
equalSlices(8, 3, 2); //true
equalSlices(8, 3, 3);//false
equalSlices(24, 12, 2);//true

// XO Create a function that takes a string, checks if it has the same number of ’x’s and ’o’s and returns either true or false.
// Notes:
// Return a boolean value (true or false).
// The string can contain any character.
// When neither an x nor an o is in the string, return true.
// Examples:
// XO(“ooxx”) ➞ true
// XO(“xooxx”) ➞ false
// XO(“ooxXm”) ➞ true (case insensitive)
// XO(“zpzpzpp”) ➞ true (returns true if no x and o)
// XO(“zzoo”) ➞ false

const XO = (str) => {
    let countX = 0;
    let countO = 0;
    for (i = 0; i < str.length; i++) {
        if ((str[i] === "x") || (str[i] === "X")) {
            countX += 1;
        }

        if ((str[i] === "o") || (str[i] === "O")) {
            countO += 1;
        } else {

        }
    }
    if (countO === countX) {
        return true;
    } else if(countO !== countX){
        return false;
    }


}

console.log(XO("ooxx"));//true
console.log(XO("XOoxx"));//false
console.log(XO("ooxXm"));//true
console.log(XO("zpzpzpp"));//true
console.log(XO("zzoo")); //false


console.log("Exercise email:")
// Validate Email. Create a function that takes a string, checks if it’s a valid email address, and then accordingly returns 
// either true or false.
// The string must contain an “@” character.
// The string must contain a “.” character.
// The “@” must have at least one character in front of it.
// e.g. “john@example.com” is valid while “@example.com” is invalid.
// The “.” and the “@” must be in the appropriate places.
// e.g. “john.smith@com” is invalid while “john.smith@email.com” is valid.

function email(str){
if(!str.includes("@") && !str.includes(".")){
    console.log("This is not a valid e-mail");
}else if(str.indexOf("@") <= str.indexOf(".")){
    console.log("This is not a valid e-mail")
}else if(str.indexOf("@") === -3 || str.indexOf("@") === -4){
    console.log("This is not a valid e-mail")
}else{
    console.log(true);
}

}
email("john.smith@com");
email("john.smith@email.com")