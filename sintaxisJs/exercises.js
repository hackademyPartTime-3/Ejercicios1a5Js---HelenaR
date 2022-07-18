 // ejercicio 1
 /* console.log("¡Empezamos con javascript!");
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
 console.log(string.replace('contigo', 'yo'));  */
//ejerc.15 Crear un programa que dada una variable number nos diga si es mayor que 100.
/* let number = prompt("Introduce un numero");
if(number > 100){
    console.log("El numero introducido es mayor que 100");
}else{
    console.log("El numero es menor que 100")
}; */

//ejerc.16 Crear un programa que dada una variable number nos diga si es positivo o negativo.

/* let numero = parseInt(prompt("introduce un numero"));
if (numero > 0){
    console.log("El numero es positivo" + numero);
}else{
    console.log("El numero es negativo" + numero);
}
*/
// ejerc. 17 Crear un programa que dadas 2 variables tipo number, las sume. Si la suma es mayor que 50 multiplique por 2, si no,
//por 3.

/* let numero1 = 10
let numero2 = 23
let resultado = (numero1 + numero2);
if (resultado > 50){
    console.log(resultado * 2)
}else{
    console.log(resultado * 3)
}; */

//ejercicio 18:

/* let numero = 64
if(numero % 3 == 0){
    console.log("Es un multiplo de 3")
}else if(numero % 8 == 0){
    console.log("Es un multiplo de 8")
}else{
    console.log("error")
}
*/

// ejercicio 19 - - 
/* let buentiempo = false;
let trabajo = false;
if (trabajo == false) {
    if (buentiempo == true) {
        console.log("puedo ir a la playa")
    } else {
        console.log("no puedo ir a la playa porque llueve")
    }
    
} else {
    console.log("no puedo ir a la playa, porque trabajo")
    
} */

// ejecicio 20

/* for(let i=1;i<=20;i++){
    let numero = i-5;
    console.log(numero);
} */
/*  let resta = 1;
while (resta<=20) {
    resta=resta + 5;
    console.log(resta);
}; */



// ejercicio 21

/*  let suma = 0
for(i=0; i<20; i++){
    suma+=i
}console.log(suma)  */

// ejercicio 22 Crear un programa que calcule la suma de los primeros “n” números, donde el valor de n, se recibe desde el
//“prompt”

/* let suma = 0;
let n = parseInt(prompt("introduce un numero entero"));

for(let i = 0;i<=n;i++){
    suma+=i
    console.log(`la suma de los numeros enteros es ${suma}`)
}; 
*/
//ejercicio 23

/*  let factorial = parseInt(prompt("introduce un numero entero y te dire el factorial"));
let valFactorial = 1;
if(typeof factorial == "number" && !Number.isNaN(factorial)){
    for(i=1; i<=factorial;i++){
        
        console.log(valFactorial=valFactorial*i);
        
    }
}
else{
    console.log("Error");
}
*/
// ejercicio 24
/* function aleatorio(min, max){
    return Math.round(Math.random() * (max - min) + min);
}
console.log(aleatorio(1, 25)); */

// ejercicio 25
/* function tipCalculator(calidad, coste){
    if (calidad == "fatal") {
        propina=coste*0.05;
    }else if(calidad=="Ok"){
        propina=coste*0.15;
    }else if(calidad=="bueno"){
        propina=coste*0.2;
    }else if(calidad=="excelente"){
        propina=coste*0.3;
    }else{
        propina=coste*0.18;
    }
    return(calidad, propina);
}
console.log(tipCalculator("fatal", 20));
console.log(tipCalculator("ok", 25));
console.log(tipCalculator("bueno", 30));
console.log(tipCalculator("excelente", 35));
console.log(tipCalculator("", 18)); */

//ejercicio 26

/* for (let i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("javascript")
    } else if (i % 5 == 0) {
        console.log("script")
    } else if (i % 3 == 0) {
        console.log("java")

    } else {
        console.log(i)
    }
} */
// ejercicio 27
/* function numero(h){
if(h%2==0){
    console.log("El numero es divisible entre 2 por lo que es par");
}else{
    console.log("El numero es impar");
}
}
numero(52); */

// ejercio 28
/* function intervalo(){
    for(let i= 1;i<=10; i+=2){
console.log(i);
    }
}

intervalo(); */

//ejercicio 29

/* function area(a, b){
    if (a==b) {
        resultado=a*b;
        console.log(`el area del cuadrado es ${resultado}`);
    } else {
        resultado=2*(a+b);
        console.log(`el perimetro del rectangulo es ${resultado}`);
    }
}
area(4,4); */

// ejercicio 30;

/* function radio(){
    for(let i = 1; i<=10; i++){
        area=(Math.PI)*(i*i);
        
        console.log(area);

    }
}
radio(); */

// ejercicios Arrays 14/7/22

// Ejercicios de Bea!

// ejercicio 1
/* let numeros = new Array[0];
numeros= [];
for(let i=1; i<=10; i++){
    numeros.push[i];
    
}
console.log(numeros); */

// ejercicio 2

/* function numeroAleatorio(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}
let vacio =[];
for(let i=1; i<=10;i++){
    vacio.push(numeroAleatorio(1,100));
}
console.log(vacio); */

// ejercicio 3

/*    let colores = ["azul", "verde", "rosa", "naranja", "rojo", "marron"];
let color = colores.slice(3, 4);
console.log(color);

// ejercicio 4

let colorA= colores.shift();
console.log(colorA);
let letra= Array.from(colorA);
console.log(letra.shift());

// ejercicio 5 

let frase = ["posiciones", "se cuentan", "Las", "array", "cero.", "apartir", "del"];
console.log(frase.sort());

// ejercicio 6

let a = ["lunes", "Martes", "Miercoles",];
let b = ["jueves", "viernes","Sabado", "Domingo"];
let arrayResultado= a.concat(b);
console.log(arrayResultado);

// ejercicio 7

let resultadoA= a.pop();
let rest=b.push(resultadoA);
console.log(rest);
console.log(resultadoA);
*/
// ejercicio 8

/*   let array1 = [1, 2, [3, 4]];
let array2 = [1, 2, [3, 4, [5, 6]]];
//a. convertir array1 en un solo array
let unSoloArray= array1.flat();
console.log(unSoloArray);
//b. convertir array2 en un array con los 4 primeros elementos
//del array y un subarray anidado del último [5,6]
let arrayAnidado=array2.flat();
console.log(arrayAnidado);
//convertir array3 en un solo array
let array3= new Array();
array3= arrayAnidado.slice(4,6);
console.log(array3); */

//ejercicio 9 Ordena alfabéticamente el siguiente array (en orden
//descendente) según el estándar UNICODE e imprime el resultado
//en la consola.

/* let colores = ["azul", "verde", "rosa", "naranja", "rojo", "marron"];
colores.sort();
console.log(colores);
colores.reverse();
console.log(colores);
*/
// ejercicio 10 -Ordena de menor a mayor este array de números.
/* let numeros = [40, 100, 1, 5, 25, 10];
function comparar ( a,b){ return a - b; }
numeros.sort( comparar );
console.log(numeros); */

//Crea una función que devuelva un mensaje de 3 nombres
//introducimos mediante el prompt uno a uno. Después, una
//colección de esos nombres y devolverlos con un mensaje “Los
//nombres que escribiste son: …” (y los nombres) en un modal.

/* let nombres = [];
function nombr(){
    for(let i = 1; i < 4; i++) 
    {
        nombres[i] = prompt('Introduce un nombre ');
    }
    
    for(let i = 1; i < 4; i++)
    {
        console.log(nombres[i]+" ");
    }
}
nombr(); */

// ejercicio 12(ejercicio encontrado en google....)

/* let dni = prompt("Introzuca su número de DNI");

let letraDNI = dni.substring(8, 9);
let numDNI = parseInt(dni.substring(0, 8));

let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let letraCorrecta = letras[numDNI % 23];

if(numDNI == /\d{8}[a-z A-Z]/){
    numDNI = parseInt(prompt("Introzuca un número válido de DNI"));
}
else{
    
    if(letraDNI.toUpperCase() != letraCorrecta){
        alert("Has introducido una letra incorrecta" + "\n" + "Tu letra debería ser: " + letraCorrecta);
    }
    else{
        alert("Enhorabuena hemos podido validar tu DNI");
    }
} */

// ejercicio 13 fibonachi

/* let serie =[];
serie[0]=0;
serie[1]=1;
for(let i=2;i<15;i++){
    serie[i]= serie[i-2]+serie[i-1];
}
console.log(serie); */

//ejercicio 31


/* palabra.charAt(0).toUpperCase();
console.log(palabra); */

/* function palabra(tomate){
    return tomate[0].toUpperCase() + word.slice(1);
  };
  palabra('hola'); */

/*    String.prototype.capitalize = function primerLetra() {
    return this.charAt(0).toUpperCase() + this.slice(1)
  };
  
primerLetra("simon");  */

//ejercicio 33
/* let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares=[]; */

/* if(numeros%2==0){
    console.log(numeros);
}else{
    console.log("numero impar");
}; */

//ejercicio 34
/* const días = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes',
'sabado', 'domingo'];
const filtrado = dias.filter(dias=>) */