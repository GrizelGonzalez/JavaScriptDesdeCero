const person = {
    name: 'Juan',
    age: 26,
    sons: ['Laura','Diego']
}
console.log(person);

for(const key in person){
    console.log(person[key]);
}

console.log(`Hola ${person.name}. Tienes ${person.age} años
y tus hijos se llaman ${person.sons.join(', ')}`);//join es un método del Array

