/*Orden de ejecutar un programa
 
Estructuras de control de flujo
-> condicionales
-> ->simples
-> ->compuestos
-> ->múltiples */

//condicionales
let numero = 8;

if(numero>10){
console.log(`${numero} es mayor que 10`);
}else{
    if(numero<10)
    console.log(`${numero} es menor que 10`);
}

let num = 15;
if(num>5){
    console.log(`${num} es mayor a 5`);
}else if (num<5) {
    console.log(`${num} es menor a 5`);
} else {
    console.log(`${num} es igual a 5`);
       
}
 /*OPERADORES LOGICOS */
let word = 'Hola';

if(word.length>4){
    console.log(`${word} tiene más de 4 letras`);
}else if(word.length<4){
    console.log(`${word} tiene menos de 4 letras`);
}else{
    console.log(`${word} tiene 4 letras`);
}
 
/*->bucles
-> -> determinados
-> -> indeperminados */


