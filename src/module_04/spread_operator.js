/*Enviar elementos en un array a una función*/

const addNumbers = (a, b, c) => {
  console.log(a + b + c);
};
let numbersToAdd = [1, 2, 3];

addNumbers(...numbersToAdd);

/*Añadir un array a otro array*/

let users = ["javier", "david", "rosa", "juan", "mercedes"];

let newUsers = ["martha", "jaime", "laura"];

users.push(...newUsers);

console.log(users);

/*copiar arrays*/

let array1 = [1, 2, 3, 4, 5];
let array2 = [...array1];
console.log(array2);

/*concatenar arrays*/

let array3 = [6, 7, 8, 9, 10];
let array4 = [11, 12, 13];

let arrayContact = [...array3, ...array4];
console.log(arrayContact);

/*Enviar un número indefinido de argumentos a una
función (parámetros REST)*/

const restParms = (...numbers) => {
  console.log(numbers);
};

restParms(1, 2, 3, 4, 5, 6, 7, 8);

/*libreria math*/

const number = [-12, 2, 3, 23, 43, 2, 3];

console.log(Math.max(...number));
console.log(Math.min(...number));

/*Eliminar elementos duplicados*/

console.log([...new Set(number)]);
