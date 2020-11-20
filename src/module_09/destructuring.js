/* La destructuración es una expresión de JavaScript que hace 
posible la extracción de datos de arreglos u objetos*/

const person = {
    name: 'Dorian',
    age: 20,
    email: 'dorian@gmail.com'
}
//FORMA TRADICIONAL
/*const name = person.name
const age = person.age
const email = person.email*/

//DESTRUCTURING
const{name, age, email} = person

//console.log(name, age, email)

//ARREGLO
//const numbers = [1, 2, 3, 4]
///console.log(...numbers);
//const[a, b, terceraPosicion] = numbers

//console.log(`Posicion del arreglo es: ${terceraPosicion}`)
const sum = (...params) => {
    let flattened = params.flat(Infinity)
    return flattened.reduce((accumulator, currentValue) => accumulator + currentValue);
}
const total = sum([1, 4, 5, [8 ,2, [2]]], [5,3]);
const total2 = sum(1, 4, 5, 8 ,2);


console.log(total);
console.log(total2);
//console.log(numbers.reduce((acc, cur) => acc += cur));