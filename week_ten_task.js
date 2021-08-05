function spinalCase(str) {   
   return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase(); 
}

console.log(spinalCase("This Is my project"));

console.log(spinalCase("AllThings- are working for my good"));

console.log(spinalCase("MyName Is Goodwill iLove Tourism"));
    