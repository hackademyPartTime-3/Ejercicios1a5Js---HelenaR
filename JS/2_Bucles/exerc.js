
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