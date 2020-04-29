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
console.log(`La longitud del numero añadido al final : `+newLength);

let newLength2 = numbers.unshift(1);
console.log(numbers);
console.log(`La longitud del numero añadido al inicio: `+newLength2);

/*.indexOf() Devuelve el primer indice del elemento que coincida con
el valor especificado, o -1 si ninguno es encontrado.*/

console.log(numbers);
console.log(`Devuelve el primer indice del elemento: `+numbers.indexOf(1));

/*.lastIndexOf() Devuelve el último indice del elemento que coincida
con el valor especificado, 0 -1 si ninguno es encontrado*/

console.log(numbers);
console.log(`Devuelve el último indice del elemento: `+numbers.lastIndexOf(5));

/*.reverse() Invierte el orden de los elementos del array*/

console.log(numbers);
console.log(`Orden invertido del Array: `+numbers.reverse());

/*.join(separador) Devuelve un string con el separador que indiquemos,
por defecto son comas*/

console.log(numbers);
let arrayString = numbers.join('-');
console.log(`El array se convierte en String: `+arrayString);

/*.splice() Devuelve el array indicando desde cual posición lo necesitas*/

console.log(numbers);
console.log(`Elimina los numeros: `+numbers.splice(2,2)); //Elimina desde la posición 2 el número de valores que le indiquemos

 //numbers.splice(2,2,10,23,54); Aquí solo le indicamos que despues de la posición 2, elimine 2 números, que agregé los números que le indiquemos

 console.log(numbers)
 numbers.splice(1,0,12,6);
 console.log(`Le agregamos números al array: `+numbers);

/*.slice() Extrae elementos de un array desde el índice hasta el indice b. Si no existe b lo hace desde a hasta el final, si no existe ni a ni b hace una copia original*/

let newNumbers = numbers.slice(2);
console.log(numbers);
console.log(newNumbers);



