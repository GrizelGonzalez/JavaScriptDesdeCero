/* Arrays -Propiedad
.length devuelve el número que contiene el array*/

let numbers = [1,2,3,4,5];

console.log(numbers.length);

/*Arrays Métodos
Array.isArray(variable a evaluar) devuelve true si la variable es un array*/

let number = 4;

console.log(Array.isArray(numbers));
console.log(Array.isArray(number));

/*Eliminar un elemento
.shift() Elimina el primer elemento del array y devuelve ese elemento
.pop() Elimina el último elemento de un array y devuelve ese elemento*/

console.log(numbers);
numbers.shift();
console.log(`Primer numero eliminado: `+numbers);

numbers.pop();
console.log(`Ultimo numero eliminado: `+numbers);

/*Añadir elementos
.push(element1, element2,....) Añade uno o más elementos al final del array
y devuelve la nueva longitud.
.unshift(element1, element2,...) Añade uno o más elementos al comienzo del array y devuelve
la nueva longitud*/

console.log(numbers);
let newLength = numbers.push(5);
console.log(numbers);
console.log(`Número añadido al final: `+newLength);

let newLength2 = numbers.unshift(1);
console.log(numbers);
console.log(`Número añadido al comienzo: `+newLength2);
