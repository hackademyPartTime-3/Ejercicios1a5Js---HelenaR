
 // ejercicio 1
console.log("¡Empezamos con javascript!");
// ejercicio 3
console.log("Hola, soy un estudiante Hackademy.");

//ejerc.4 Decalarar una variable y reasignarla
let nombre = "Jussara";
nombre = "Helena";
console.log(nombre);

//ejerc.5 Declara dos variables que al imprimirlas formen una frase.

let saludo = "Hola,";
let presentar = "me llamo Helena";
console.log(saludo + presentar);

// ejerc.6 Inicializar variables de todos los tipos primitivos e imprimir el
//tipo de k.
let a = "6";
console.log(typeof(a));// string
let b = 6;
console.log(typeof(b)); // number
let existo = true;
console.log(typeof(existo));// boolean
let variableSindefinir;
console.log(typeof(variableSindefinir));//undefined
let vacia = null;
console.log(typeof(vacia)); // object

// ejerc.7 Inicializar una variable num igual a 5 e imprimir en la consola
//“num” obteniendo 10 como resultado.

let num = 5
num = 10
console.log(num);
// ejerc.8 Declarar dos variables e inicializarlas tipo string e imprimir
//sólo una nueva variable, con el contenido de las dos variables.

let c = "3";
let d = "2";
let resultado = c+d
console.log(resultado);

//ejerc.9 Inicializar una variable num de valor 5 y transforma num en cadena. Imprime en console.log los dos tipos de ks.

let num1 = 5
console.log(typeof(num1));// number
num1= "5";
console.log(typeof(num1)); // string

// ejerc.10 Inicializar una variable tipo num con 6 decimales e imprimir la variable cambiando el tipo y que aparezcan sólo 3 decimales.

let num2 = 1.555555;
num2 = num2.toFixed(3);
console.log(num2);

//Ejerc. 11 Imprimir la suma de los caracteres entre dos 2 cadenas.
let cadena1 = "Hoy es viernes!";
let cadena2 = "Por fin descansare!";
let suma = cadena1 + cadena2
console.log(suma.length);

// ejerc.12 Encapsular el resultado de la operación anterior en una variable, e imprimir con la string interpolation.

let resultado1 = `El resultado de sumar ${cadena1} + ${cadena2} es ${suma.length}`;
console.log(resultado1);

// ejerc.13 Escribir el resultado y el tipo de dato de la siguiente coerción:
//10 + “1”
//10 - “1”

let dato = 10 + "1";
console.log(typeof(dato));// string
console.log(dato);// 101

let numbi = 10 - "1";
console.log(typeof(numbi)); // number
console.log(numbi);//9

// ejerc.14 Sustituir la palabra "contigo" por la palabra "yo" sin crear una nueva cadena y imprimir la nueva cadena en consola:

let string = "Hey Tú, cómo te llamas. ¡Hey, estoy hablando contigo!";
console.log(string.replace('contigo', 'yo')); 