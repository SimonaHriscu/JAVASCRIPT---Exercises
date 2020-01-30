/*
// Create a function that receive a text from user and check if the user has entered a phone number, and print that out
// Note : phone number should be within the German network starts with (030,017) and has 7 digits after the prefix number

function phoneNumber(str){
    //console.log(typeof str);
    ///First we split the string according to the free space;
    let splitStr = str.toLowerCase().split(" ");
    //console.log(splitStr); //now it's an object
    // we need to access and check the phone number
    //console.log(splitStr);
    let longNumber = splitStr[5];
    //console.log(longNumber);// 
    let prefixPhoneNumber = longNumber.slice(0,3); //separating the prefix
    //console.log(prefixPhoneNumber);
    let remainderPhoneNumber = longNumber.slice(3);//separating the rest of the number
    //console.log(remainderPhoneNumber);
     const isNotNumber = isNaN(longNumber);
     //console.log(isNotNumber);
    if(prefixPhoneNumber === "030" || prefixPhoneNumber === "017" && !isNotNumber){
        if(remainderPhoneNumber.length === 7 ){
            console.log(`The ${longNumber} is a valid german phone number`)
        }
    }else{
            console.log(`The ${longNumber} is not a valid german phone number`)
        
    }
}

phoneNumber("This is a message from 0300123456");
phoneNumber("This is a message from 0171zz2555");
phoneNumber("This is a message from 011v678435");

*/

//Improved version with loop

// Create a function that receive a text from user and check if the user has entered a phone number, and print that out
// Note : phone number should be within the German network starts with (030,017) and has 7 digits after the prefix number

function phoneNumber(str) {
  //console.log(typeof str);
  ///First we split the string according to the free space;
  let splitStr = str.toLowerCase().split(" ");
  //console.log(splitStr); //now it's an object
  //console.log(splitStr.length);

  // let result = "";

  
  for (let i = 0; i < splitStr.length; i++) {
    let counter = 0;
    //    console.log(splitStr[i]);
    prefixNumber = splitStr[i].slice(0, 3);
    //console.log(prefixNumber);
    remainderNumber = splitStr[i].slice(3);
    //console.log(remainderNumber);
    //     const isNotNumber = isNaN(remainderNumber);
    //   //  console.log(isNotNumber);
    if (prefixNumber === "030") {
      //         if(remainderNumber.length === 7 && !isNotNumber ){
      //            return (`The number is a valid german phone number`);
      counter++;
      
      //         }
      //     }else{
      //             return `The number is not a valid german phone number`
    } 
    if (counter== 1) {
        console.log("if counter", counter);
    }
    else {
        console.log(counter)

        return `This is no phone number`;

      }
  }
  
  
}
console.log(phoneNumber("0300123456 message from "));
// console.log(phoneNumber("0300123456 send you a message"));
// console.log( phoneNumber("from 0300123456 you have a message"));
// console.log( phoneNumber("This is a message from 0171zz2555"));
// console.log( phoneNumber("This is a message from 011v678435"));
// console.log( phoneNumber("This is a message from 017"));

// const phone = str => {
//     let result = "";
//     let counter = 0;
//     let strToArr = str.toLowerCase().split(" ");
//     for (let i = 0; i < strToArr.length; i++) {
//       let firstThreeDigits = strToArr[i].slice(0, 3);
//       if (firstThreeDigits == "030" || firstThreeDigits == "017") {
//         if (isNaN(strToArr[i]) || strToArr[i].length !== 10) {
//           result = `This is not a valid phone number ${strToArr[i]}`;
//           counter++;
//         } else if (strToArr[i].length == 10) {
//           result = `The phone number is ${strToArr[i]}`;
//           counter++;
//         }
//       }
//     }
//     if (counter == 0) {
//       return `This is no phone number`;
//     }
//     return result;
//   };
//   console.log(phone("Phone"));
//   console.log(phone("Hi my 030221A398 number is "));
//   console.log(phone("I have 0302221321 a phone number 0302221221"));
