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

function phoneNumber(str){
    //console.log(typeof str);
    ///First we split the string according to the free space;
    let splitStr = str.toLowerCase().split(" ");
    //console.log(splitStr); //now it's an object
    console.log(splitStr);
    for(let i = 0; i<splitStr.length; i++){
        let prefixNumber = splitStr[i].split(0,3);
        console.log(prefixNumber);
        let remainderNumber = splitStr[i].split(3);
        console.log(remainderNumber);
    }
   

     
    // if(prefixPhoneNumber === "030" || prefixPhoneNumber === "017" && !isNotNumber){
    //     if(remainderPhoneNumber.length === 7 ){
    //         console.log(`The ${longNumber} is a valid german phone number`)
    //     }
    // }else{
    //         console.log(`The ${longNumber} is not a valid german phone number`)
        
    // }
}

phoneNumber("This is a message from 0300123456");
phoneNumber("0300123456 send you a message");
phoneNumber("from 0300123456 you have a message");
phoneNumber("This is a message from 0171zz2555");
phoneNumber("This is a message from 011v678435");

