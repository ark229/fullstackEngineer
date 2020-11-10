//Your current age
let myAge = 31;
//The variable earlyYears is set to the value of 2
let earlyYears = 2;
earlyYears *= 10.5;
//Subtract myAge variable from 2 call new variable laterYears
let laterYears = myAge - 2;
/*Multipy laterYears variable by 4 to calculate the number
of dog years accounted for by your later years.
*/
laterYears *= 4; 
//Add earlyYears and laterYears and store in new variable
let myAgeInDogYears = earlyYears + laterYears;
//Create a variable called myName. Add your name and lowercase method
let myName = 'Arnetta'.toLowerCase();

//Print statement that displays human age and age in dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} in dog years.`);
//Output: My name is arnetta. I am 31 years old in human years which is 137 in dog years.
