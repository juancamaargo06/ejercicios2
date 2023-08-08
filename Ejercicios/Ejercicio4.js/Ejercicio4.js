'use strict';

let numero1 = parseFloat(prompt('Introduzca el primer numero a evaluar'));
let numero2 = parseFloat(prompt('Introduzca el segundo numero a evaluar'));
let numero3 = parseFloat(prompt('Introduzca el tercer numero a evaluar'));

let mayor, menor;

if (numero1 >= numero2 && numero1 >= numero3) {
    mayor = numero1;
} else if (numero2 >= numero1 && numero2 >= numero3) {
    mayor = numero2;
} else {
    mayor = numero3;
}

if (numero1 <= numero2 && numero1 <= numero3) {
    menor = numero1;
} else if (numero2 <= numero1 && numero2 <= numero3) {
    menor = numero2;
} else {
    menor = numero3;
}

alert(`El número mayor es: ${mayor}`);
alert(`El número menor es: ${menor}`);



