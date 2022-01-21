const form = document.getElementById('form');
const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');

form.addEventListener('submit', convertCelsiusToFahrenheit);

function convertCelsiusToFahrenheit(e){
    const celsius = parseFloat(celsiusInput.value);
    // Formula (°C × 9/5) + 32 = °F
    const conversion = (celsius * 9/5) + 32; 

    if (isNaN(celsius)){
        alert('Enter a Value');
    } 
    else{
        fahrenheitInput.value = conversion;
    }
    e.preventDefault();
}



