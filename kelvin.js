//forcast is 293. Variable kelvin (for kelvin weather) is equal to 293
const kelvin = 293;
//convert Kelvin to celsius by subtracting 273 from kelvin variable
let celsius = kelvin - 273; 
//calculate the fahrenheit celsius * (9/5) + 32
let fahrenheit = celsius * (9/5) + 32;
//use math object Math.floor to round to nearest whole number
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
//Output: The temperature is 68 degrees Fahrenheit.
