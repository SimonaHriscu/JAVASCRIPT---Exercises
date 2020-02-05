// Merge. Create a function that takes two objects as its parameters and merges them together into a new object.
// Example
// let first = {firstName: "John"}
// let last = {lastName: "Smith"}
// Expected output:
// {firstName: "John", lastName: "Smith"}

let first = { firstName: "John" };
let last = { lastName: "Smith" };

function mergeObj(obj1, obj2) {
  let merged = Object.assign({}, obj1, obj2);
  return merged;
}
console.log(mergeObj(first, last));

function mergeObj(obj1, obj2) {
  let merged = { ...obj1, ...obj2 };
  return merged;
}
console.log(mergeObj(first, last));

// function zodiac(name, day, month, year){
//     let zodiacSigns = ['capricorn',
// 'aquarius',
// 'pisces',
// 'aries',
// 'taurus',
// 'gemini',
// 'cancer',
// 'leo',
// 'virgo',
// 'libra',
// 'scorpio',
// 'sagittarius']

// const result = {
//     userName: name,
//     birthDay: day,
//     birthMonth: month,
//     birthYear: year
//     }

//     if((month == 1 && day <= 20) || (month == 12 && day >=22)) {
//         return zodiacSigns.capricorn;
//       } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
//         return zodiacSigns.aquarius;
//       } else if((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
//         return zodiacSigns.pisces;
//       } else if((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
//         return zodiacSigns.aries;
//       } else if((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
//         return zodiacSigns.taurus;
//       } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
//         return zodiacSigns.gemini;
//       } else if((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
//         return zodiacSigns.cancer;
//       } else if((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
//         return zodiacSigns.leo;
//       } else if((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
//         return zodiacSigns.virgo;
//       } else if((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
//         return zodiacSigns.libra;
//       } else if((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
//         return zodiacSigns.scorpio;
//       } else if((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
//         return zodiacSigns.sagittarius;
//       }
// }
// console.log(zodiac('Simona', '22', '06', '1991'));

function zodiac(name, day, month, year) {
  const result = {
    userName: name,
    birthDay: parseInt(day),
    birthMonth: parseInt(month),
    birthYear: parseInt(year)
  };

  const zodiacSigns = [
    "capricorn",
    "aquarius",
    "pisces",
    "aries",
    "taurus",
    "gemini",
    "cancer",
    "leo",
    "virgo",
    "libra",
    "scorpio",
    "sagittarius",
    "capricorn"
  ];

  const lastDayOfFirstZodiac = [
    19,
    18,
    20,
    20,
    21,
    21,
    22,
    22,
    21,
    22,
    21,
    20,
    19
  ];

  if (result.birthDay > lastDayOfFirstZodiac[result.birthMonth - 1]) {
    return zodiacSigns[result.birthMonth];
  } else {
    return zodiacSigns[result.birthMonth - 1];
  }
}
console.log(zodiac("Simona", "22", "06", "1991"));

function zodiac(name, day, month, year) {
  
    
    const result = {
    userName: name,
    birthDay: parseInt(day),
    birthMonth: parseInt(month),
    birthYear: parseInt(year),
    output: function() {
        const zodiacSigns = {
            capricorn : "19",
            aquarius : "18",
            pisces : "20",
            aries : "20",
            taurus : "21",
            gemini : "21",
            cancer : "22",
            leo : "22",
            virgo : "21",
            libra : "22",
            scorpio : "21",
            sagittarius : "20"
            
        }; 
        
        let months = Object.values(zodiacSigns);
        
        // if (this.birthDay > months) {
        //     return Object.keys(zodiacSigns);
        // } else {
        //   return (Object.keys(zodiacSigns) - 1);
        // }
     
       
    }
  };

  return result;
}
zodiac("Simona", "22", "06", "1991");


const school = new Object(); 
school.name = 'Vivekanada school'; 
school.location = 'Delhi'; 
school.established = 1971; 

school.displayInfo = function(){ 
	console.log(`${school.name} was established in ${school.established} at ${school.location}`); 
} 

school.displayInfo(); 
