Convert Temperature (Celsius to Fahrenheit).

function celsiusToFahrenheit(celsius) 
{
    return (celsius * 9/5) + 32;
}
let tempCelsius = 25; 
let tempFahrenheit = celsiusToFahrenheit(tempCelsius);

console.log(`${tempCelsius}°C is equal to ${tempFahrenheit.toFixed(2)}°F`);
  
