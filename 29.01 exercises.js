// Create a function will calculate how many times empty space occurred in a given string by the user and 
// print out only the characters number 


function countEmptySpaces(string, space){
    let emptySpace = 0;
    console.log(string.length);
    for(i=0; i<=string.length; i++){
        if(string[i] === space){
            emptySpace+=1;
        }
    }let numberOfCharacters = string.length - emptySpace;
     return numberOfCharacters;
        
}


console.log(countEmptySpaces("this is a string with some empty spaces", " "));

// Create a function that will receive a (user name , salary and kid’s names)
// If the user has one kid subtract 30% taxes from the salary 
// For two kids subtract 25% and 20% for more than two.
// If the user has no kids the taxes will be 55%
// Print out the result in a good formated way.

function percentage (userName, salary, ...childrenName ){
    //console.log(childrenName.length);
       if(childrenName.length === 1){
       }else if (childrenName.length ===2){
               console.log(totalPercentage = salary * 0.25);
           }else if (childrenName.length > 2){
                console.log(totalPercentage = salary * 0.20);
               } else {
                    console.log(totalPercentage = salary * 0.55);
                   }
                       
                let totalSalary = salary - totalPercentage;
                return (`Hello ${userName}! After taxes you will have a salary of ${totalSalary} euros.`);
           }
       
console.log(percentage("Michael", "2500", "Andrew", "Monica", "Andrea"));

// Create a function that receive a text from user and check if the user has entered a phone number, and print that out
// Note : phone number should be within the German network starts with (030,017) and has 7 digits after the prefix number


console.log("Phone number exercise:")


function phoneNumber(num){
   // console.log(num);
stringSplit = num.toLowerCase().split(" "); // split the string
 //console.log(stringSplit);
 numSplit =  stringSplit[5].toLowerCase().split(" "); 
 //console.log(typeof numSplit) //it is an object now
 numString = numSplit.toString();  //the number is a string
 //console.log(numString[2]);
 //console.log(typeof numString);
 const isNotNumber = isNaN(numString);
 //console.log(isNotNumber) //check if it is a number
 if((numString[0] ==="0" && numString[1] ==="3" && numString[2] ==="0" )
 ||(numString[0] ==="0" && numString[1] ==="1" && numString[2] ==="7") 
 && numString.length === 10 
 && !isNotNumber)  {
        console.log("This is a valid number")
     }else {
            console.log("This is not a valid number");
         }
    }
    
    phoneNumber("This is a message from 0300123456");
    phoneNumber("This is a message from 0171zz2555");
    phoneNumber("This is a message from 011v678435");
    
// Write a function that checks whether the user has entered a valid German bank account.
// Note: German bank accounts should starts with and has 20 number.
// DExxxxxxxxxxxxxxxxxxxx


function bankAccount(str){
//console.log(str[0]);
//console.log(str.length);
let strToNum = str.slice(2); //the remainder from index 2 on
//console.log(strToNum);
const isNotNumber = isNaN(strToNum);// is the remainder a number?

if(str[0] === "D" && str[1] ==="E" && str.length === 20 && !isNotNumber){
    console.log("This is a valid german bank account")
}else{
    console.log("This is not a valid german bank account")
}

}
bankAccount("DE234560023888674021");
bankAccount("DE234560023ee8674021");
bankAccount("RO234560023458674021");
bankAccount("De234560023458674021");

// console.log(isNaN("23"))

///ANOTHER VERSION
/*
const isAccount = str => {
    // Convert string to lowercase
    const strLwcase = str.toLowerCase();
    //console.log(strLwcase.length);
    //check the prefix of the IBAN
    const prefix = ["de"];
    //get the rest of the string
    const restAccount = strLwcase.slice(3, 22);
    //console.log(restAccount.lenght);
    //We have to slice the first two characters of the passed string
    const slicePrefix = strLwcase.slice(0, 2);
    //console.log(slicePrefix);
    //we have to check if isNAN (if it's we gonna get false)
    const isNotNumber = isNaN(restAccount);
    console.log(isNotNumber);
    try {
      if (
        strLwcase.length > 22 ||
        slicePrefix != prefix ||
        restAccount.length !== 19 ||
        isNotNumber
      ) {
        throw Error;
      }
      return `Your IBAN is ${prefix.join("").toUpperCase() + restAccount}`;
    } catch (e) {
      return "Please Check your IBAN";
    }
  };
  console.log(isAccount("DE000000000010111111"));
  console.log(isAccount("ae00000000000000001000"));
  console.log(isAccount("DExxxxxxxxxxxxxxxxxxxx"));
  console.log(isAccount("de000000012330000001000"));
  console.log(isAccount("DExxxxxxxx123xssxxxxx"));
  console.log(isAccount("aExxxxxxxx123xssxxxxx"));
  
*/