/*.from(iterable) convierte en array el elemento iterable*/
let word = "Hola Mundo";

console.log(Array.from(word));
console.log(word.split(" "));

/*.sort([callback]) ordena los elementos de un array alfabéticamente
(valor unicode)*/
const letters = ['b', 'c', 'z', 'a']
console.log(letters.sort());

const numbers = [1,8,100,300,3]
console.log(numbers.sort((a,b) => a-b));

/*.forEach(callback(currentValue, [index])) ejecuta la función indicada una
vez por cada elemento del array*/
numbers.forEach((numbers) => console.log(numbers));

/*.some(callback) comprueba si al menos un elemento del array cumple la condición*/

/*.every(callback) comprueba si todos los elementos del array cumplen la condición*/

const palabra = ['HTML', 'CSS', 'JavaScript', 'PHP']
console.log(palabra.some(palabra => palabra.length>10));
console.log(palabra.every(palabra => palabra.length>2));

/*.map(callback) transforma todos los elementos del array y devuelve
un nuevo array*/

const number = [12, 25, 47, 84, 98]
const numero = number.map(number => number * 2)
console.log(numero);

/* .filter toma los numeros mayores a los que le indiques*/

const number2 = number.filter(number => number >80)
console.log(number2);

/*.reduce se junta los números del arreglo*/

console.log(number.reduce((a,b) => a+b));