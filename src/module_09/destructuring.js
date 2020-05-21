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

console.log(name, age, email)

//ARREGLO
const numbers = [1, 2, 3, 4]

const[a, b, terceraPosicion] = numbers

console.log(`Posicion del arreglo es: ${terceraPosicion}`)