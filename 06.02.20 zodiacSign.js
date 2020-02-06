//Find your zodiac sign

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
    yourZodiac: function() {
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
        
        let arr = Object.entries(zodiacSigns);
        let lastDay = Object.values(zodiacSigns);
        let signs = Object.keys(zodiacSigns)
        //console.log(lastDay);
        //console.log(arr)
        
       for(let i=0; i<lastDay.length; i++){
         // for(let j=0; j<signs)
            if(this.birthDay >= lastDay[i]) {
             
                return signs;
         
        }
           return (Object.keys(zodiacSigns) - 1); 
       }  
    }
  }
  return result.yourZodiac();
}
console.log(zodiac("Simona", "22", "06", "1991"));
