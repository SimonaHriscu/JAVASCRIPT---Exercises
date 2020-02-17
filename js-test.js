// Answer Sheet - all answers should go here
console.log("##### OBJECTS");
console.log("##### 1. Key Pair Values");

const profileData = {}; //new Object()
profileData.name = "";
profileData.surname = "";
profileData.age = "";
profileData.city = "";
console.log(profileData);

console.log("##### 2. Object to Array");

function toArray(obj) {
  return Object.entries(obj);
}
console.log(toArray({ "1": 10, "2": 20, "3": 30 }));

console.log("##### ARRAYS");

function _convertArrayData_(arr) {
  arr[2] = "milk";
  console.log(arr);

  let temp = arr[1];
  arr[1] = arr[0];
  arr[0] = temp;
  console.log(arr);
  // arr.splice(0,1);
  // arr[0] = "coffee";
  // arr.unshift("tea");
  // console.log(arr)
}

_convertArrayData_(["coffee", "tea", "juice"]);

console.log("##### 3. Word Converter");

function _wordConverter_(arr) {
  const newArray = arr.map(elem => elem + "er"); //with map
  return newArray;

  // let newArray = arr.join("er,"); //from Bido
  // newArray += "er";
  // // console.log(newArray);
  // return newArray.split(",")

  // for(let i =0; i<arr.length; i++){ //with loop
  //     newArray.push(arr[i] + "er");
  // }
}
console.log(_wordConverter_(["smart", "kind", "sweet", "small", "clear"]));

console.log("##### 4. Hour Calculation");

const _calculateHours_ = arr => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let diff = arr[i].end - arr[i].start;
    result += diff;
  }
  return result;

  //   let mondayHours = hourTracking[0].end - hourTracking[0].start;
  //   let tuesdayHours = hourTracking[1].end - hourTracking[1].start
  //   let wednesdayHours = hourTracking[2].end - hourTracking[2].start
  //   let thursdayHours = hourTracking[3].end - hourTracking[3].start
  //   let fridayHours = hourTracking[4].end - hourTracking[4].start
  //   let result = mondayHours+tuesdayHours+wednesdayHours+thursdayHours+fridayHours;
  //   return result;
};

console.log(
  _calculateHours_([
    { day: "Monday", start: 8, end: 17 },
    { day: "Tuesday", start: 9, end: 15 },
    { day: "Wednesday", start: 10, end: 18 },
    { day: "Thursday", start: 7, end: 14 },
    { day: "Friday", start: 6, end: 12 }
  ])
);

console.log("#### Classes");

class Course {
  constructor(_teacher, _marketing, _webdev, _numberOfStudents) {
    this.teacher = _teacher;
    this.marketing = _marketing;
    this.webdev = _webdev;
    this.number = _numberOfStudents;
  }
  spaceNeeded() {
    let result = this.number * 2;
    console.log(`The classroom should be ${result} m²`);
  }
  details() {
    console.log(
      `This is a web development course taught by ${this.teacher}. There are ${this.number} students taking the course.`
    );
  }
}
const course = new Course("Ali", false, true, 10);
course.spaceNeeded();
course.details();

console.log("#### Problem Solving");

function capitalizeFirstLetter(str) {
  let strSplit = str.split(" ");
  
  console.log(strSplit);

  let strUpperCase = strSplit.map(elem => elem[0].toUpperCase() + elem.slice(1));
  //     for(let i =0; i<strSplit.length; i++){
  //         strUpperCase.push(strSplit[i][0].toUpperCase());

  // }
  return strUpperCase.join(" ") ;
}
console.log(capitalizeFirstLetter("hey there"));

console.log("#### Validation");

const validPin = str => {
  let splitNum = str.split("");
  let newArr = [];
  let diffNum = 0;

  const isNot = isNaN(str);
  //console.log(isNot);

  for (i = 0; i < splitNum.length; i++) {
    newArr.push(parseInt(splitNum[i]));
  }
  // console.log(newArr)

  let result = newArr.reduce((acc, cur) => acc + cur);
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[0] !== newArr[i]) {
      diffNum++;
    }
  }
  //console.log(diffNum)

  if (
    result > 5 &&
    str.length === 4 &&
    str % 2 === 0 &&
    !isNot &&
    diffNum > 0
  ) {
    return true;
  } else return false;
};

console.log(validPin("1234")); //true
console.log(validPin("1235")); //false
console.log(validPin("wwww")); //false
console.log(validPin("2222")); //false
console.log(validPin("2224")); //true


// Do not edit or answer below this line
// EDITING MODULE EXPORTS WILL RESULT IN AN AUTOMATIC FAIL
//module.exports = {profileData, convertObjectToArray, convertArrayData, createGrid, wordConverter, calculateHours, Course, capitalizeFirstLetter, validPin};
