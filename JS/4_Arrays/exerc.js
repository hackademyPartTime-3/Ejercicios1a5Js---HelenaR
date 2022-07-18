
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