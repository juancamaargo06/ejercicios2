// Juan esteban camargo 
'use strict';

// Solicitar al usuario dos números y validar la entrada
let number1 = parseFloat(prompt("Dame un numero"));
let number2 = parseFloat(prompt("Dame un numero"));
// Validar si los números son válidos
{
    // Realizar cálculos
    let suma = number1 + number2;
    let resta = number1 - number2;
    let multiplicacion = number1 * number2;
    let division = number1 / number2;
    alert(`El resultado de la suma es: ${suma}`);
    alert(`El resultado de la resta es: ${resta}`);
    alert(`El resultado de la multiplicacion es: ${multiplicacion}`);
    alert(`El resultado de la division es: ${division}`);
}
